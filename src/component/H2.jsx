import React from 'react'

export default function H2({children,className}) {
  return (
    <h2 className={`${className} text-3xl font-medium `}>
{children}
    </h2>
  )
}
