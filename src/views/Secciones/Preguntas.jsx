import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AcordionSingle from "../../component/AcordionSingle";
import DescripcionTarjetas from "../../component/DescripcionTarjetas";
import Seccion from "../../component/Seccion";
import TituloandDescription from "../../component/TituloandDescription";
import TituloTarjetas from "../../component/TituloTarjetas";

export default function Preguntas() {
  const datosAcordion = [
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
    {
      title: "Will get lifetime update",
      descripcion:
        "La gente con autismo percibe el mundo en forma diferente. Ve detalles que vos no ves y tienen dificultades en procesar los diferentes estímulos.",
      className: "",
    },
  ];

  return (
    <Seccion className={"min-h-screen"}>
      <TituloandDescription
        title={"Preguntas Frecuentes"}
        descripcion={
          "que es lo que generamos, que es lo que hacemos, que es lo que nos motiva..."
        }
        key={3}
      />

      <div className="flex flex-wrap w-full items-center justify-start gap-4 my-5 p-5 duration-300">
        {!datosAcordion ? (
          <h1>'Cargando'</h1>
        ) : (
          datosAcordion.map((element, i) => (
            <AcordionSingle
              key={i}
              title={element.title}
              descripcion={element.descripcion}
            />
          ))
        )}
      </div>
    </Seccion>
  );
}
