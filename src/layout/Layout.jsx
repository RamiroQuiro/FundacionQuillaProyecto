import React from "react";
import Footer from "../views/Footer/Footer";
import Header from "../views/Header/Header";
import Contacto from "../views/Secciones/Contacto";
import Preguntas from "../views/Secciones/Preguntas";
import Seccion1 from "../views/Secciones/Seccion1";
import Seccion2 from "../views/Secciones/Seccion2";
import Seccion3 from "../views/Secciones/Seccion3";

export default function Layout() {
  return (
    <>
    <Header/>
      <main className="w-10/12 mx-auto font-roboto">
    <Seccion1/>
       <Seccion2/>
       <Seccion3/>
        <Preguntas/>
        <Contacto/>
      </main>
     <Footer/>
    </>
  );
}
