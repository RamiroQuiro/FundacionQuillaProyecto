import React from 'react'
import Button1 from '../../component/Button1'
import Seccion from '../../component/Seccion'
import image1 from '../../img/imageQuilla.jpg'

export default function Seccion2() {
  return (
    <Seccion
        className={"py-10 md:h-screen items-center"}
    >
        <div className='bg-neutral-900 rounded-3xl -skew-x-2 flex md:flex-row flex-col-reverse gap-5 lg:h-4/6 h-auto md:p-0 px-5 py-10'>
            <div className='md:w-2/6 w-full relative h-1/4 md:h-auto mx-auto '>
                <div className='md:absolute top-0 left-0 w-full md:h-full flex justify-center items-center'>
                    <div className=' h-[25%] md:h-[150%] object-center rounded-3xl md:rounded-2xl items-center overflow-hidden skew-x-3 duration-500'>
                        <img src={image1} alt="image1" className='md:object-cover mx-auto object-scale-down object-center h-1/4 md:h-full md:w-full w-2/3 hover:scale-110 duration-300 ' />
                    </div>
                    </div>
            </div>
            <div className='md:w-4/6 h-full flex flex-col gap-5  text-white items-center md:px-0 px-0 md:items-start text-left justify-center'>

                <h1 className='text-4xl font-medium '>Fundación Brincar por un autismo feliz</h1>
                <p className='break-words font-thin'>
                Trabajamos por la calidad de vida de las personas con autismo desde la detección temprana hasta la vida adulta. Lo hacemos acompañando a las familias, brindando formación profesional y generando espacios, actividades y oportunidades amigables de inclusión social.
            </p>
            <Button1
            text={"ver más"}
            link={'/'}
            />
            </div>
        </div>
    </Seccion>
  )
}
