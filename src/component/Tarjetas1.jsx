import React from "react";


export default function Tarjetas1({titulo, descripcion, imagen, color}) {
  return (
    <div className="flex flex-col gap-3 mx-auto items-center justify-center ">
        <img src={imagen} alt={titulo} className={`w-16 rounded-full p-4 ${color}`} />
      <h2 className="text-xl  font-bold capitalize">{titulo}</h2>
      <p className="font-medium text-center text-sm">{descripcion}</p>
    </div>
  );
}
