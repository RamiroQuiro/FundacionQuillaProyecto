import React from "react";
import DivImagenGaleria from "../../component/DivImagenGaleria";
import TituloandDescription from "../../component/TituloandDescription";
import image1 from "../../img/desfile.jpg";
import image2 from "../../img/mural1.jpg";
import image3 from "../../img/feriaArtesanal.jpg";
import image4 from "../../img/talleres.jpg";
import image5 from "../../img/psicologaConsultorio.jpg";
import image6 from "../../img/tallerCeramica.jpg";
import Seccion from "../../component/Seccion";
import IconCircle from "../../component/IconCircle";

export default function GaleriaNoticias() {
  const novedades = [
    {
      src: image1,
      h2: "Desfile Beneficio",
      descripcion:
        "El sabado 8 de Septiembre, se realizara el desfile beneficio para nuestra asociacion en la Ciudad de la Banda, Besares N°500",
      link: "",
      className: "",
    },
    {
      src: image2,
      h2: "Trabajo Mural",
      descripcion:
        "Mural realizado para un cliente, gracias por considerarnos, la misma nos ayuda a costear gastos muy necesarios artisticos y terapeuticos.",
      link: "",
      className: "",
    },
    {
      src: image3,
      h2: "En La Feria",
      descripcion: "En la feria artesanal. Visitanos.",
      link: "",
      className: "",
    },
    {
      src: image4,
      h2: "Talleres de artes y oficios.",
      descripcion:
        "Talleres de arte y de oficios integrador, dictado por profesinales en el ambito con trayectoria",
      link: "",
      className: "",
    },
    {
      src: image5,
      h2: "Lic. Irina Tévez",
      descripcion: "Nueva profesional en nuestro consultorio Quilla",
      link: "",
      className: "",
    },
    {
      src: image6,
      h2: "Taller de Ceramica",
      descripcion:
        "Coordinado por Marcelo Verón, dictado por Jose Maria Paz, Te esperamos los Sábados a las 9hs.",
      link: "",
      className: "",
    },
  ];

  return (
    <Seccion className=" md:h-screen flex duration-1000 flex-col justify-center relative items-center">
      <div className="group ">
        <TituloandDescription title={"Novedades"} />
        <div className="w-full mx-auto relative flex items-center -mt-5 duration-500 justify-center overflow-hidden gap-2">
            <span className="absolute w-1/2 h-[500%] left-0 -translate-x-full group-hover:translate-x-[170%] duration-500 bg-orange-200/70 -rotate-45 blur-sm"></span>
          <span className="bg-orange-400 rounded-lg w-40 h-2"></span>
          <span className="bg-orange-400 rounded-lg w-8 h-2"></span>
          <span className="bg-orange-400 rounded-lg w-4 h-2"></span>
        </div>
      </div>
      <IconCircle
        colorFill={"#A7CFFD50"}
        className="absolute right-16 w-96 h-96 top-0 bac"
      />
      <div className="flex justify-center h-4/5 gap-3 duration-1000 items-center overflow-hidden skew-x-6">
        {novedades?.map((element, i) => (
          <DivImagenGaleria
            classNameDiv={element.className}
            descripcion={element.descripcion}
            src={element.src}
            h2={element.h2}
            link={element.link}
            key={i}
          />
        ))}
      </div>
    </Seccion>
  );
}
