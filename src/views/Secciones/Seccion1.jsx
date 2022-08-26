import { buildQueries } from "@testing-library/react";
import React from "react";
import Seccion from "../../component/Seccion";
import Tarjetas1 from "../../component/Tarjetas1";
import TituloandDescription from "../../component/TituloandDescription";
import playSVG from "../../img/play.svg";

export default function Seccion1() {

  const TarjetasArribaAbajo=(itemsEnd , colorTarjeta, imagenTarjeta, tituloTarjeta,descripcionTarjeta)=>{
    return (
      <div className={`h-full md:w-1/6 w-3/6 my-10 px-10 mf:px-5 flex  ${itemsEnd}`}>
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



  return (
    <Seccion>
      <TituloandDescription
        title="¿Qué es la Fundación Quilla?"
        descripcion="Fundación Quilla es una organización sin fines de lucro que se dedica a la difusión del arte y la cultura, a la educación y a la promoción de la cultura."
      />
      <div className="w-full h-1/4 my-28 flex flex-wrap gap-y-10 justify-between">
        {TarjetasArribaAbajo('items-end','bg-blue-300', playSVG, 'Niños','Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad.')}
        {TarjetasArribaAbajo('items-start','bg-orange-300', playSVG, 'Niños','Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad.')}
        {TarjetasArribaAbajo('items-end','bg-red-300', playSVG, 'Niños','Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad.')}
        {TarjetasArribaAbajo('items-start','bg-gray-300', playSVG, 'Niños','Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad.')}
   
      </div>
    </Seccion>
  );
}
