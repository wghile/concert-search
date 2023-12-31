import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/Form'
import Results from './components/Results'
import Nav from './components/Nav'
import Help from './components/Help'
import Purchase from './components/Purchase'
import Footer from './components/Footer'

function App() {

  const apiKey = import.meta.env.VITE_APIKEY

  const [concert, setConcert] = useState({})

  const findEvent = async (keyword, city) => {
    try{const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&city=${city}&source=Ticketmaster&apikey=${apiKey}`)
    const data = await response.json()
    setConcert(data)
    } catch(e){
      console.error(e)
    }
  }

  return (
    <div className='App'>
      <Nav />
        <Routes>
          <Route path='/' element={<Form check={findEvent}/>}/>
          <Route path='/searchresults' element={<Results concerts={concert}/>}/>
          <Route path='/help' element={<Help />}/>
          <Route path='/checkout' element={<Purchase />}/>
        </Routes>
      <Footer />
    </div>
  )
}

export default App
