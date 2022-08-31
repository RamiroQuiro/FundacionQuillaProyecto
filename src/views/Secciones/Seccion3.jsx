import React from "react";

import Seccion from "../../component/Seccion";
import TarjetaColores from "../../component/TarjetaColores";
import TituloandDescription from "../../component/TituloandDescription";
import svg1 from '../../img/triangle2.svg'
import line from '../../img/line-curve.svg'
import arrow from '../../img/arrow-curve2.svg'


export default function Seccion3() {
  const tarjetas = [
    {
      title: "Colores",
      description:
        "casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad",
      boton: "Ver más",
      link: "/servicios",
      color: "bg-green-200",
    },
    {
      title: "Colores",
      description:
        "casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad",
      boton: "Ver más",
      link: "/servicios",
      color: "bg-rose-200",
    },
    {
      title: "Colores",
      description:
        "casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad",
      boton: "Ver más",
      link: "/servicios",
      color: "bg-orange-300",
    },
    {
      title: "Colores",
      description:
        "casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad",
      boton: "Ver más",
      link: "/servicios",
      color: "bg-orange-300",
    },
    {
      title: "Colores",
      description:
        "casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad",
      boton: "Ver más",
      link: "/servicios",
      color: "bg-green-200",
    },
    {
      title: "Colores",
      description:
        "casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad",
      boton: "Ver más",
      link: "/servicios",
      color: "bg-red-200",
    },
  ];

  return (
    <Seccion  id="servicios" className={'relative'}>

<div className='-rotate-180 absolute z-30 left-2/3 -top-10 '>
        <img src={arrow} alt="" className=' w-28 fill-red-500' />
        </div>
       
        <div className='relative  w-full z-00 '>
        <div className='rotate-45 absolute -z-10 top-0 left-1/3'>
        <img src={svg1} alt="" className=' w-28  ' />
        </div>
        </div>
      <TituloandDescription
      className={'z-50'}
        title="Nuestros Servicios"
        descripcion="casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad"
      />
      <div className="w-full h-5/6  grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-y-0 md:gap-x-8">
        {tarjetas?.map((tarjeta, index) => (
          <TarjetaColores
            key={index}
            title={tarjeta.title}
            description={tarjeta.description}
            boton={tarjeta.boton}
            link={tarjeta.link}
            color={tarjeta.color}
          />
        ))}
      </div>
    </Seccion>
  );
}
