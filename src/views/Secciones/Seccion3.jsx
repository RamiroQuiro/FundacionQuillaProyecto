import React from "react";

import Seccion from "../../component/Seccion";
import TarjetaColores from "../../component/TarjetaColores";
import TituloandDescription from "../../component/TituloandDescription";

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
    <Seccion>
      <TituloandDescription
        title="Nuestros Servicios"
        descripcion="casa uno de nuestros tarlleres esta orientado y diseñado para niños con discapacidad y sin discapacidad"
      />
      <div className="w-full h-5/6  grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-y-0 gap-x-8">
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

      }
      </div>
    </Seccion>
  );
}
