import React from 'react'
import { Link } from 'react-router-dom'
export default function Button1({text,link,className}) {

  return (
    <Link 
    to={link}
    className={`${className} bg-blue-500 relative rounded px-5 py-2 z-30 cursor-pointer font-medium text-center text-sm duration-300 hover:scale-105 hover:shadow-sm group overflow-hidden active:scale-125 active:opacity-0 `}>
    <p>
    {text}    
      </p>
      <span className={`absolute top-0 left-0 w-full min-h-full rounded translate-x-full group-hover:translate-x-0 duration-200 bg-red-400 py-2 text-white opacity-50 group-hover:opacity-100 z-50 active:bg-red-300 active:animate-ping`}>
        {text}
      </span>
    </Link>
  )
}
