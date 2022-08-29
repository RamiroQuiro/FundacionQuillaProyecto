import React from 'react'
import Button1 from '../../component/Button1'
import Seccion from '../../component/Seccion'
import TituloandDescription from '../../component/TituloandDescription'

export default function Contacto() {
  return (
    <Seccion
    className={"flex flex-wrap md:gap-5 w-full items-stretch justify-around"}
    >
      <div className='flex flex-col flex-auto items-center justify-around border-2 border-neutral-700 p-5 rounded-lg mx-auto md:w-6/12 skew-x-1 md:skew-x-3'>
      <TituloandDescription
      className={'md:w-full'}
      classNameTitle={'text-3xl text-left w-full'}
      title={"¿Nos Comunicamos?"}
      descripcion={"Escribanos por cualquier duda consulta que tengas o apadrinamiento hacia nuestra fundación"}
      />
      <form className='w-full my-10 flex flex-col gap-10'>
      <div class="relative">
               <label className="absolute px-2 ml-2 -mt-2 font-medium text-gray-600 bg-white">Nombre</label>
               <input type="text" 
               name='nombre'
               className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Nombre"/>
            </div>
      <div class="relative">
               <label className="absolute px-2 ml-2 -mt-2 font-medium text-gray-600 bg-white">Email</label>
               <input type="text" 
               name='email'
               className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Email"/>
            </div>
      <div class="relative">
               <label className="absolute px-2 ml-2 -mt-2 font-medium text-gray-600 bg-white">Mensaje</label>
               <textarea 
               name='mensaje'
               className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Mensaje"/>
            </div>
            <Button1
            className={"w-1/2 mx-auto"}
      link={'/'}
      text={"Enviar"}
      />
      </form>
     
      </div>
      <div className='md:w-6/12 '>
        Direccion
      </div>
       
    </Seccion>
  )
}
