import {useState} from 'react'
import DescripcionTarjetas from './DescripcionTarjetas';
import TituloTarjetas from './TituloTarjetas';

export default function AcordionSingle({title,descripcion,className}) {
    const [active, setActive] = useState(false);

  const handleDownBox = () => {
    setActive(!active);
  };
  return (
    <div
    className={`${className}
    } w-full md:w-2/5 flex-auto  ${active?'border-blue-500/70 shadow-blue-500/50 shadow ':'border-neutral-700'} border hover:border-blue-500/70  duration-150 overflow-hidden  p-5 rounded-lg`}
  >
    <div
      onClick={handleDownBox}
      className="w-full flex items-center duration-300 cursor-pointer justify-between "
    >
      <TituloTarjetas
        className={`${active ? " text-blue-400" : ""}  duration-150`}
        title={title}
        key={4}
      />
      <i className={`${active ? "rotate-180 text-blue-400" : "rotate-45"} text-lg hover:text-xl duration-300  `}>🗙</i>{" "}
    </div>
        {!active ? <div className='duration-300 h-0'></div> : (
          <DescripcionTarjetas
            className={`my-5 h-max  duration-300 `}
          >{descripcion}
            
          </DescripcionTarjetas>
        )}
  </div>
  )
}
