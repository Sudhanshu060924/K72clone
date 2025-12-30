import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React from 'react'

function Stair() {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.stair', {
            height: 0,
            
            stagger: {
                amount:-0.2
            }   
    })
    tl.to('.stair',{
       y:"100%",
        stagger:{
            amount:-0.3
        }
    } )      


}
)


        
  return (
    <div>
      <div className="h-screen fixed w-full flex z-20 top-0">
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
      </div>
    </div>
  );
}

export default Stair
