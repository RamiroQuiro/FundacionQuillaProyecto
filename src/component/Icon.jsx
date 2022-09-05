import React, { useEffect, useState } from "react";
import { useSprings,animated } from "react-spring";



const Envelopes1=(props)=>{
    return (<g {...props}>
<path
        fill="#2C3D8E"
        d="M127.877 108.379L90.465 70.968a13.926 13.926 0 00-20.375.735c-30.33 34.981-47.761 78.605-49.871 125.011 2.305 51.424 23.417 99.44 60.052 136.075 38.867 38.866 90.542 60.271 145.507 60.271 50.335 0 97.907-17.956 135.413-50.828a13.896 13.896 0 019.18-3.455c3.569 0 7.128 1.365 9.833 4.07l28.079 28.079 11.434-117.505a13.886 13.886 0 00-2.848-4.166 13.924 13.924 0 00-11.194-4.013l-112.161 10.914 9.715 9.715a13.925 13.925 0 014.047 10.773 13.912 13.912 0 01-3.739 8.57 13.913 13.913 0 013.739 10.43 13.94 13.94 0 01-5.443 10.141c-49.061 37.555-119.756 33.911-164.613-10.946-26.826-26.826-38.907-62.893-36.258-98.049-2.336-30.948 6.749-62.6 27.254-88.037-.114-.123-.219-.254-.339-.374z"
      ></path>
    </g>)
}
const Envelopes2=(props)=>{
    return (<g {...props}>
 <path
        fill="#2C3D8E"
        d="M80.62 47.89c3.686 0 7.229 1.462 9.845 4.078l37.411 37.411c5.054 5.054 5.444 13.121.917 18.652-40.219 49.146-37.41 121.969 8.428 167.808 24.416 24.416 56.478 36.619 88.549 36.619 26.849 0 53.707-8.56 76.064-25.674a13.926 13.926 0 001.396-20.914l-27.03-27.03 129.477-12.598a13.928 13.928 0 0111.194 4.012 13.924 13.924 0 014.013 11.194l-12.598 129.477-28.079-28.079a13.868 13.868 0 00-9.833-4.07 13.887 13.887 0 00-9.18 3.455c-37.506 32.873-85.078 50.828-135.413 50.828-54.965 0-106.641-21.404-145.507-60.271C41.404 293.922 20 242.247 20 187.281c0-49.96 17.684-97.202 50.09-134.578a13.94 13.94 0 0110.53-4.813m0-20h-.008a34.058 34.058 0 00-25.633 11.711c-17.72 20.437-31.456 43.547-40.827 68.686C4.761 133.48 0 160.058 0 187.281c0 60.308 23.485 117.006 66.129 159.65 42.644 42.644 99.342 66.128 159.649 66.128 27.43 0 54.196-4.833 79.555-14.366 23.542-8.849 45.286-21.527 64.713-37.722l24.096 24.096a20 20 0 0034.048-12.206l12.598-129.477a33.807 33.807 0 00-9.777-27.273c-6.407-6.407-14.926-9.936-23.987-9.936-1.094 0-2.2.054-3.287.16l-129.475 12.598a20 20 0 00-12.205 34.048l21.957 21.957c-17.105 11.338-37.53 17.518-58.244 17.518-28.145 0-54.57-10.925-74.406-30.761-38.4-38.401-41.449-99.017-7.091-140.999 11.086-13.547 10.118-33.091-2.253-45.461l-37.411-37.411c-6.408-6.405-14.927-9.934-23.989-9.934z"
      ></path>
    </g>)
}
function Icon({className,toggle}) {
    const [active,setActive]=useState(false)

    window.addEventListener('scroll', ()=>{
        const scrollY=window.scrollY
if(scrollY=="2000"){
    setActive(true)
}
})

 useEffect(()=>{

    window.addEventListener('scroll', ()=>{
        const scrollY=window.scrollY
        if(scrollY>=1800 && scrollY<=2500){
    console.log(scrollY)
    setActive(true)
}else {
    setActive(false)
}
})
 },[])   

    const envelopes=[
        <Envelopes1 key="envelopes-1"/>,
        <Envelopes2 key="envelopes-2"/>
    ]

    const springs = useSprings(
        envelopes.length,
        envelopes.map((_, i) => {
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
          };
        })
      );

    const animateEnvelopes = springs.map((animtedStyle,index)=>{
        return(
            <animated.g key={index} style={animtedStyle}>
                {envelopes[index]}
            </animated.g>
        )
    })



  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 440.95 440.95"
      version="1.1"
      viewBox="0 0 440.95 440.95"
      xmlSpace="preserve"
      className={className + "absolute"}
    >
      
    {animateEnvelopes}
    </svg>
  );
}

export default Icon;