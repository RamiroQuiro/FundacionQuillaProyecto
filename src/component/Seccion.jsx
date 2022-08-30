import React from 'react'

export default function Seccion({children,className,id}) {
  return (
    <section id={id} className={`${className} w-full my-10  text-gray-700 mx-auto `}>
        {children}
    </section>
  )
}
