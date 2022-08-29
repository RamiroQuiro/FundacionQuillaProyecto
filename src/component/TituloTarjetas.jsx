import React from 'react'

export default function TituloTarjetas({title,className,onClick}) {
  return (
    <h2 
    onClick={onClick}
    className={`${className} text-lg font-bold capitalize`}>{title}</h2>
  )
}
