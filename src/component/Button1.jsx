import React from 'react'
import { Link } from 'react-router-dom'
export default function Button1({text,link}) {
  return (
    <Link 
    to={link}
    className={`bg-blue-500 relative rounded px-5 py-2 z-30 cursor-pointer font-medium text-center text-sm duration-300 hover:shadow-sm before:content-['${text}'] before:absolute before:top-0 before:left-0 before:w-full before:min-h-full before:rounded before:translate-x-full hover:before:translate-x-0 before:duration-150 before:bg-red-400 before:py-2 before:text-white before:opacity-0 overflow-hidden hover:before:opacity-100 before:z-50`}>
    {text}    
    </Link>
  )
}
