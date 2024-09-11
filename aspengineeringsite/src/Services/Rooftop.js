import React from 'react'
import Appheader from '../Appbar'
import Scrollanimation from "react-animate-on-scroll"


function Rooftop() {
  return (
   <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vw'}}>
   <Appheader first={"services"} />
   <Scrollanimation animateIn="zoomIn">
   <h1>MASTER</h1>
   </Scrollanimation>
    
   </div>
  )
}

export default Rooftop