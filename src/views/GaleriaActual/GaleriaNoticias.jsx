import React from "react";
import DivImagenGaleria from "../../component/DivImagenGaleria";
import TituloandDescription from '../../component/TituloandDescription'
import image1 from '../../img/desfile.jpg'
import image2 from '../../img/mural1.jpg'
import image3 from '../../img/feriaArtesanal.jpg'
import Seccion from "../../component/Seccion";

export default function GaleriaNoticias() {

const novedades=[
    {
        src:image1,
        h2:"Desfile Beneficio",
        descripcion:"El sabado 8 de Septiembre, se realizara el desfile beneficio para nuestra asociacion en la Ciudad de la Banda, Besares N°500",
        link:"",
        className:"",
    },
    {
        src:image2,
        h2:"Trabajo Mural",
        descripcion:"Mural realizado para un cliente, gracias por considerarnos, la misma nos ayuda a costear gastos muy necesarios artisticos y terapeuticos.",
        link:"",
        className:"",
    },
    {
        src:image3,
        h2:"En La Feria",
        descripcion:"En la feria artesanal. Visitanos.",
        link:"",
        className:"",
    },
    {
        src:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg",
        h2:"hola",
        descripcion:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolor asperiores amet animi vel modi eveniet! Accusantium, porro maxime laborum asperiores recusandae dolorum vitae adipisci quod inventore explicabo expedita autem.",
        link:"",
        className:"",
    },
    {
        src:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg",
        h2:"hola",
        descripcion:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolor asperiores amet animi vel modi eveniet! Accusantium, porro maxime laborum asperiores recusandae dolorum vitae adipisci quod inventore explicabo expedita autem.",
        link:"",
        className:"",
    },
    {
        src:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Cat_plotting_something_evil%21.jpg",
        h2:"hola",
        descripcion:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia dolor asperiores amet animi vel modi eveniet! Accusantium, porro maxime laborum asperiores recusandae dolorum vitae adipisci quod inventore explicabo expedita autem.",
        link:"",
        className:"",
    },
]


  return (
    <Seccion className=" md:h-screen flex duration-1000 flex-col justify-center items-center">
        <TituloandDescription
        title={"Novedades"}
        />
      <div className="flex justify-center h-4/5 gap-3 duration-1000 items-center overflow-hidden skew-x-6">
        {novedades?.map((element,i)=>(
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
