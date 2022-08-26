import React from "react";
import NavBar from "../Menu de Navegacion/NavBar";
import Derecha from "./Derecha";
import Izquierda from "./Izquierda";

export default function Header() {
  return (
    <header className="w-full h-screen bg-gradient-to-tr z-20 pb-10 from-lime-100 to-sky-100 relative text-slate-900">
      <NavBar />
      <div className="flex w-10/12 pt-12 items-stretch z-20 mx-auto h-full">
       <Izquierda/>
        <Derecha />
      </div>
    </header>
  );
}
