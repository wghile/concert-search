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
            return (
                <Result key={concert.id} name = {concert.name} img = {concert.images[0].url} link = {concert.url} date = {`${concert.dates.start.localDate.getMonth() + 1}-${concert.dates.start.localDate.getDate()}-${concert.dates.start.localDate.getFullYear()}`} venue = {concert._embedded.venues[0].name} location = {`${concert._embedded.venues[0].city.name}, 
                ${concert._embedded.venues[0].state?.stateCode ? concert._embedded.venues[0].state?.stateCode:concert._embedded.venues[0].country.name}`} />
            )
          })}
        </div>
      </div>
    )
  }else{
    return <h1>No Results Found</h1>
  }
}
