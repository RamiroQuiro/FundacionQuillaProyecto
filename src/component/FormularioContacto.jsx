import React from 'react'
import Button1 from './Button1'

export default function FormularioContacto() {
  return (
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
  )
}
