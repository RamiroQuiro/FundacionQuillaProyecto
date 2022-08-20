import React from 'react'
import Button2 from "../component/Button2";
import DescripcionTarjetas from "../component/DescripcionTarjetas";
import TituloTarjetas from "../component/TituloTarjetas";

export default function TarjetaColores({title,description,boton,link,color}) {
  return (
    <div className={`${color} marker:flex flex-col gap-3 mx-auto items-center my-20 rounded-2xl h-[80%] w-full p-5 justify-center `}>
          <div className="w-full flex flex-col text-sm items-start justify-between h-full">
            <TituloTarjetas title={title} />
            <DescripcionTarjetas>{description}</DescripcionTarjetas>
            <Button2 text={boton} link={link} />
          </div>
        </div>
  )
}
