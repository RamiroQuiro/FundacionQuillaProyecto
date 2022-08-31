import React from 'react'
export default function Menu() {
const links=[
  {
    link:"#fundacionquilla",
    descripcion:"Fundacion Quilla"
},
  {
    link:"#funcion",
    descripcion:"Función de la Fundacion"
},
  {
    link:"#servicios",
    descripcion:"Nuestros Servicios"
},
  {
    link:"#preguntas",
    descripcion:"Preguntas Frecuentes"
},
  {
    link:"#contacto",
    descripcion:"Contacto"
},
]

  return (
    
    <div className=" w-3/6 ">
      <ul className="flex items-center justfy-around text-center px-3 gap-3">
     
        {
          links?.map((link,i)=>(
        <li 
        key={i}
        className="relative w-full break-words h-full group overflow-hidden text-xs">
        <span className='peer block group-hover:opacity-0 duration-200  text-xs ' >{link.descripcion}</span>
        <a
        className='absolute  text-xs w-full h-full top-0 left-0 text-blue-500 translate-x-full group-hover:translate-x-0 duration-300 font-bold'
        href={link.link}>{link.descripcion}</a>
        </li>

          ))
        }
     
      </ul>
    </div>
  )
}
