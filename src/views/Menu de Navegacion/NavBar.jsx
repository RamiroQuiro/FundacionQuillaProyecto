import React from 'react'
import Menu from './Menu'
import {useLocation} from 'react-router-dom'
export default function NavBar() {

const params = useLocation()

console.log(params.hash)
const a=[{
  path:"#fundacionquilla",
  color:"red"
},]

  return (
    <nav className={`flex w-full h-14 items-center justify-between px-16 fixed top-0 backdrop-blur-sm bg-gray-100/30 z-50 font-medium text-sm text-gray-800 border-b`}>
    <div
    
    
    >logo</div>
    <Menu/>
  </nav>
  )
}
