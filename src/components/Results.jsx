import Result from './Result'

export default function Results ({concerts}) {

  console.log(concerts)
  let retrievedData = concerts["_embedded"]
  console.log(retrievedData)
  let array = []
  array.push(retrievedData)
  let concertsArray = []
  array[0]?.["events"].map((el) => concertsArray.push(el))
  concertsArray.map((el) => el.dates.start.localDate = new Date(el.dates.start.localDate))
  concertsArray.sort((a,b) => a.dates.start.localDate - b.dates.start.localDate)
  console.log(concertsArray)

  const month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  
  if(concertsArray.length > 0){
    return(
      <div className='Results'>
        <div id='header'>
          <h1>
            Results
            <span>
              ( Displaying {concertsArray.length} of {concertsArray.length} )
            </span>
          </h1>
        </div>
        <div id='results'>
          {concertsArray.map((concert) => {

          const localTimeTrue = () => {
            let hour = concert.dates.start.localTime.split(':')[0]
            if(hour > 12){
              hour -= 12
            }
            let min = concert.dates.start.localTime.split(':')[1]
            if(min == 0){
              min = ''
            }else{
              min = `:${min}`
            }
            return `${hour}${min} PM`
          }
          
          const localTimeFalse = () => {
            let hour = concert.dates.start.localDate.getHours()
            if(hour > 12){
              hour -= 12
            }
            let min = concert.dates.start.localDate.getMinutes()
            if(min == 0){
              min = ''
            }else{
              min = `:${min}`
            }
            return `${hour}${min} PM`
          }
          
          concert.dates.start.localTime ? localTimeTrue() : localTimeFalse()

          const goodImg = concert.images.find((el) => el.ratio = '3_2' && el.url.includes('3_2'))

            return (
                <Result key={concert.id} name = {concert.name} img = {goodImg.url} date = {`${week[concert.dates.start.localDate.getDay()]} · ${month[concert.dates.start.localDate.getMonth()]} ${concert.dates.start.localDate.getDate()} · ${concert.dates.start.localDate.getFullYear()}`} venue = {concert._embedded.venues[0].name} location = {`${concert._embedded.venues[0].city.name}, 
                ${concert._embedded.venues[0].state?.stateCode ? concert._embedded.venues[0].state?.stateCode:concert._embedded.venues[0].country.name}`} time={`${concert.dates.start.localTime ? localTimeTrue() : localTimeFalse()}`}/>
            )
          })}
        </div>
      </div>
    )
  }else{
    return (
      <div className='No-Results'>
        <h1>No Results Found</h1>
      </div>
    )
  }
}
