import React, { useEffect, useState } from "react";
import { useSprings,animated } from "react-spring";


const Envolventes1=(props)=>{
  return(
    <g {...props}><path d="M76.92 22.763L38.09 61.594"></path></g>
  )
}
const Envolventes2=(props)=>{
  return(
    <g {...props}><path d="M66.92 22.763L28.09 61.594"></path></g>
  )
}
const Envolventes3=(props)=>{
  return(
    <g {...props}><path d="M76.92 22.763L38.09 61.594"></path></g>
  )
}
const Envolventes4=(props)=>{
  return(
    <g {...props}><path d="M46.92 22.763L8.09 61.594"></path></g>
  )
}
const Envolventes5=(props)=>{
  return(
    <g {...props}><path d="M86.92 22.763L48.09 61.594"></path></g>
  )
}
const Envolventes6=(props)=>{
  return(
    <g {...props}><path d="M96.92 22.763L58.09 61.594"></path></g>
  )
}
const Envolventes7=(props)=>{
  return(
    <g {...props}><path d="M76.92 22.763L38.09 61.594"></path></g>
  )
}




function IconCircle({className,colorFill}) {
  const [active,setActive]=useState(true)

  window.addEventListener('scroll', ()=>{
      const scrollY=window.scrollY
if(scrollY>="1000"){
  setActive(true)
}
})

   

  const lines=[
    <Envolventes1 key="envolventes 1"/>,
    <Envolventes2 key="envolventes 1"/>,
    <Envolventes3 key="envolventes 1"/>,
    <Envolventes4 key="envolventes 1"/>,
    <Envolventes5 key="envolventes 1"/>,
    <Envolventes6 key="envolventes 1"/>,
    <Envolventes7 key="envolventes 1"/>,
  ]

const springs=useSprings(lines.length,
  lines.map((_,i)=>{
    return {
      transform: active
      ? // toggle === true -> initial position
        `translate3d(0px, 0px, 0px)`
      : // toggle === false -> move the envelopes to the left
        `translate3d(-400px, -490px, 0px)`,
    opacity: active
      ? // toggle === true -> full opacity
        1
      : // toggle === false -> full transparency
        0,
    // as we map over the envelopes, increase the delay
    // first envelope -> delay: 0ms
    // second envelope -> delay: 100ms
    // etc.
    delay: i * 100
    }
  })
  )
  const animateEnvelopes = springs.map((animtedStyle,index)=>{
    return(
        <animated.g key={index} style={animtedStyle}>
            {lines[index]}
        </animated.g>
    )
})


  return (
    <svg
    className={`${className} `}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill={colorFill}
    >
      <g>
        <circle
          cx="50.188"
          cy="50"
          r="23.188"
          fill="none"
          stroke={colorFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
        ></circle>
        <defs>
          <circle id="SVGID_5_" cx="50.188" cy="50" r="23.188"></circle>
        </defs>
        <clipPath id="SVGID_2_">
          <use overflow="visible" xlinkHref="#SVGID_5_"></use>
        </clipPath>
        <g
          fill="none"
          stroke={colorFill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="4"
          clipPath="url(#SVGID_2_)"
        >
         {animateEnvelopes}
        </g>
      </g>
    </svg>
  );
}

export default IconCircle;