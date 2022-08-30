import React from 'react'
import Menu from './Menu'

export default function NavBar() {
  return (
    <nav className="flex w-full h-14 items-center justify-between px-16 fixed top-0 backdrop-blur-sm bg-gray-100/30 z-50 font-medium text-sm text-gray-800 border-b">
    <div>logo</div>
    <Menu/>
  </nav>
  )
}
