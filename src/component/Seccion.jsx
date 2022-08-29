import React from 'react'

export default function Seccion({children,className}) {
  return (
    <section className={`${className} w-full my-10  text-gray-700 mx-auto `}>
        {children}
    </section>
  )
}
