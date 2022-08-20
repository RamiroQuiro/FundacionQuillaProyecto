import React from 'react'

export default function TituloandDescription({title,descripcion}) {
  return (
    <div className="flex flex-col justify-center py-2 w-1/2 mx-auto items-center text-center">
        <h1 className="text-5xl font-medium my-6">{title}</h1>
        <span className="text- font-sans font-medium">
         {descripcion}
        </span>
      </div>
  )
}
