import React from 'react'

export default function SvgRender({src,className}) {
  return (
    <div className='relative  w-full z-00 '>
    <div className={`${className}  absolute -z-10 `}>
    <img src={src} alt="" className=' w-28  ' />
    </div>
    </div>
  )
}
