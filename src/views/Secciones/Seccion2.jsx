import React from 'react'
import Button1 from '../../component/Button1'
import Seccion from '../../component/Seccion'
import image1 from '../../img/imageQuilla.jpg'

export default function Seccion2() {
  return (
    <Seccion>
        <div className='bg-neutral-900 rounded-3xl my-20 -skew-x-2 flex h-4/6'>
            <div className='w-2/6 relative '>
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
                    <div className='w-3/4 h-[130%] bg-red-500 rounded-2xl overflow-hidden skew-x-3 duration-500'>
                        <img src={image1} alt="image1" className='object-contain object-center h-auto w-full hover:scale-110 duration-300 ' />
                    </div>
                    </div>
            </div>
            <div className='w-4/6 h-full flex flex-col gap-5  text-white items-start text-left justify-center'>

                <h1 className='text-4xl font-medium '>Fundación Brincar por un autismo feliz</h1>
                <p className='break-words font-thin'>
                Trabajamos por la calidad de vida de las personas con autismo desde la detección temprana hasta la vida adulta. Lo hacemos acompañando a las familias, brindando formación profesional y generando espacios, actividades y oportunidades amigables de inclusión social.
            </p>
            <Button1
            text={"vermás"}
            link={'/'}
            />
            </div>
        </div>

    </Seccion>
  )
}
