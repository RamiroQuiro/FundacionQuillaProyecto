import React from 'react'

export default function Seccion({children}) {
  return (
    <section className="w-full py-10 my-10 h-screen text-gray-700 mx-auto ">
        {children}
    </section>
  )
}
