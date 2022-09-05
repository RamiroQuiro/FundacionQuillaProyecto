import React from 'react'
import Button1 from '../../component/Button1'
import H1 from '../../component/H1'
import H2 from '../../component/H2'
import playSVG from '../../img/play.svg'

export default function Izquierda() {

  return (
    <div className="md:w-3/6 flex justify-center items-start flex-col">
          <div className=" md:w-10/12  flex flex-col items-start justify-around h-1/2 text-left border-b-2 mb-5">
            <div>
            <H1>Quilla</H1>
            <H2 className={"-mt-3 leading-5"}>Asociación Civil</H2>
            </div>
            <span className='break-words '>
            Destinada a niños en el arte y adolecentes y jóvenes en el oficio con discapacidad
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
