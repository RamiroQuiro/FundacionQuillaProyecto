import React from 'react'
import Tarjetas1 from './Tarjetas1'

export default function TarjetaArribaAbajo({className , colorTarjeta, imagenTarjeta, tituloTarjeta,descripcionTarjeta}) {
  return (
    <div className={`flex  ${className} h-full md:w-1/6 w-3/6 my-10 px-10 mf:px-5 `}>
    <Tarjetas1
     color={colorTarjeta}
     imagen={imagenTarjeta}
     titulo={tituloTarjeta}
     descripcion={
       descripcionTarjeta
     }
   />
</div>
  )
}
