import React from "react";
import Seccion from "../../component/Seccion";
import Tarjetas1 from "../../component/Tarjetas1";
import TituloandDescription from "../../component/TituloandDescription";
import playSVG from "../../img/play.svg";

export default function Seccion1() {
  return (
    <Seccion>
      <TituloandDescription
        title="¿Qué es la Fundación Quilla?"
        descripcion="Fundación Quilla es una organización sin fines de lucro que se dedica a la difusión del arte y la cultura, a la educación y a la promoción de la cultura."
      />
      <div className="w-full h-1/4 my-20 flex  justify-between">
        <div className="h-full w-1/6  flex items-end">
          <Tarjetas1
            color={"bg-teal-300"}
            imagen={playSVG}
            titulo={"Niños"}
            descripcion={
              "Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad."
            }
          />
        </div>
        <div className="h-full w-1/6  flex items-start">
          <Tarjetas1
            color={"bg-orange-300"}
            imagen={playSVG}
            titulo={"Niños"}
            descripcion={
              "Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad."
            }
          />
        </div>
        <div className="h-full w-1/6  flex items-end">
          <Tarjetas1
            color={"bg-red-300"}
            imagen={playSVG}
            titulo={"Niños"}
            descripcion={
              "Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad."
            }
          />
        </div>
        <div className="h-full w-1/6  flex items-start">
          <Tarjetas1
            color={"bg-gray-300"}
            imagen={playSVG}
            titulo={"Niños"}
            descripcion={
              "Niños en el arte y adolecentes y jóvenes en el oficio con discapacidad."
            }
          />
        </div>
      </div>
    </Seccion>
  );
}
