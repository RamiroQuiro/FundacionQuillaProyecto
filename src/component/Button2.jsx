import React from 'react'
import { Link } from 'react-router-dom'
export default function Button1({text,link}) {
  return (
    <Link 
    className='bg-white rounded-lg text-center hover:bg-gray-100 duration-150 text-gray-700 font-extrabold shadow-lg py-2 px-4 w-full '
   to={link}>
    {text} -►
    </Link>
  )
}
