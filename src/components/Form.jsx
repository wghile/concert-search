import { useRef, useState } from "react"
import { Link } from 'react-router-dom'

import ayra from '../images/ayrastarr.png'
import beyonce from '../images/beyonce.jpeg'
import brent from '../images/brent.png'
import daniel from '../images/danielcaesar.png'
import ed from '../images/edsheeran.png'
import jazmine from '../images/jazminesullivan.png'
import john from '../images/johnmayer.png'
import kali from '../images/kaliuchis.png'
import karol from '../images/karolg.png'
import shania from '../images/shaniatwain.png'
import sza from '../images/sza.png'
import taylor from '../images/taylorswift.png'
import tiwa from '../images/tiwa.png'
import victoria from '../images/victoriamonet.png'
import wizkid from '../images/wizkid.png'

// import ayra from '../assets/images/ayrastarr.png'
// import beyonce from '../assets/images/beyonce.jpeg'
// import brent from '../assets/images/brent.png'
// import daniel from '../assets/images/danielcaesar.png'
// import ed from '../assets/images/edsheeran.png'
// import jazmine from '../assets/images/jazminesullivan.png'
// import john from '../assets/images/johnmayer.png'
// import kali from '../assets/images/kaliuchis.png'
// import karol from '../assets/images/karolg.png'
// import shania from '../assets/images/shaniatwain.png'
// import sza from '../assets/images/sza.png'
// import taylor from '../assets/images/taylorswift.png'
// import tiwa from '../assets/images/tiwa.png'
// import victoria from '../assets/images/victoriamonet.png'
// import wizkid from '../assets/images/wizkid.png'

export default function Form({check}) {


    const artRef = useRef()
    const cityRef = useRef()

    const incRef = useRef()

    const submit = (e) => {
        e.preventDefault()
        check(artRef.current.value, cityRef.current.value)
    }

    // const reset = (e) => {
    //     e.preventDefault()
    //     check(artRef, cityRef)
    // }
    
    const pics = [ayra, beyonce, brent, shania, daniel, wizkid, john, jazmine, kali, taylor, karol, sza, tiwa, victoria, ed]

    const [background, setBackground] = useState(pics[0])

    const [incDisplay, setIncDisplay] = useState(true)
    const [decDisplay, setDecDisplay] = useState(false)

    const decrementIndex = () => {
        let currentIndex = pics.findIndex((el) => el === background)
        // console.log(currentIndex)
        setIncDisplay(true)
        if(currentIndex > 1){
            setDecDisplay(true)
            setBackground(pics[currentIndex-1])
        }else if(currentIndex == 1){
            setBackground(pics[currentIndex-1])
            setDecDisplay(false)
        }
    }
   
    const incrementIndex = () => {
        let currentIndex = pics.findIndex((el) => el === background)
        // console.log(currentIndex)
        if(currentIndex + 1 == pics.length - 1){
            setBackground(pics[currentIndex+1])
            setIncDisplay(!incDisplay)
        }else{
            setBackground(pics[currentIndex+1])
            setDecDisplay(true)
        }
    }

  return (
    <div className="Form">
        <div className="section1">
            <h1>Don't Miss An Unforgettable Experience</h1>
            <div className="inputs">
                <input type="text" ref={artRef} placeholder="Search by Artist"></input>
                <input type="text" ref={cityRef} placeholder="Filter by City"></input>
                <button onClick={submit}>
                    <Link to='/searchresults' style={{color: 'darkslateblue', textDecoration: 'none'}}>
                        Search
                    </Link>
                </button>
            </div>
        </div>
        <div className="section2">
            <div className="images">
                {decDisplay && <button onClick={decrementIndex} style={{color: 'slateblue'}}>{'<'}</button>}
                <img src={background} />
                {incDisplay && <button onClick={incrementIndex} style={{color: 'slateblue'}}>{'>'}</button>}
            </div>
        </div>
        {/* <button onClick={reset}>Clear</button> */}
    </div>
  )
}