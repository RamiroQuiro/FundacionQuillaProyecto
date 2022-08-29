import React from 'react'
import Button1 from '../../component/Button1'
import playSVG from '../../img/play.svg'

export default function Izquierda() {

  return (
    <div className="md:w-3/6 flex justify-center items-start flex-col">
          <div className=" md:w-10/12 text-left border-b-2 mb-5">
            <h1 className="font-bold text-blue-500 text-5xl md:text-7xl my-5">
              Fundación Quilla
            </h1>
            <span className='break-words'>
              Destinada a niños en el arte y adolecentes y jóvenes en el oficio
              con discapacidad.
            </span>
          </div>
          <div className="md:w-10/12 flex w-full  rounded py-2  intems-center justify-between md:justify-around">
            <Button1
            text="Contacto"
            link={'/'}
            />
            <button className='flex gap-3 group items-center justify-around'>
                <img src={playSVG} alt="" className='w-8 group-hover:animate-pulse  group-hover:translate-x-1 fill-zinc-600 duration-150' />
                <span className='font-medium text-sm '>Video Institucional
                    </span>  </button>
          </div>
        </div>
  )
}
