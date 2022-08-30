import React from 'react'
export default function Menu() {
  return (
    
    <div className=" w-2/6 ">
      <ul className="flex items-center justfy-around text-center px-3 gap-3">
        <li className="relative group overflow-hidden">
        <span className='peer block group-hover:opacity-0 duration-200  ' >¿Fundación Quilla?</span>
        <a
        className='absolute top-0 left-0 text-blue-500 translate-x-full group-hover:translate-x-0 duration-300 font-bold'
          
        href="#queeslafundacion">¿Fundación Quilla?</a>
        </li>
        <li>funcion de la fundacion</li>
        <li>programas</li>
        <li>talleres</li>
      </ul>
    </div>
  )
}
