import {useState} from 'react'
import DescripcionTarjetas from './DescripcionTarjetas';
import TituloTarjetas from './TituloTarjetas';

export default function AcordionSingle({title,descripcion,className}) {
    const [active, setActive] = useState(false);
  const [descripcionOculta, setDescripcionOculta] = useState(<></>);

  const handleDownBox = () => {
    setActive(!active);
  };
  return (
    <div
    className={`${className}
    } w-full md:w-2/5 flex-auto  ${active?'border-blue-500/70 ':''} border duration-150 overflow-hidden border-neutral-700 p-5 rounded-lg`}
  >
    <div
      onClick={handleDownBox}
      className="w-full flex items-center duration-300 cursor-pointer justify-between "
    >
      <TituloTarjetas
        className={""}
        title={title}
        key={4}
      />
      <i className={`${active ? "rotate-180" : "rotate-45"} text-lg hover:text-xl duration-300 `}>🗙</i>{" "}
    </div>
        {!active ? null : (
          <DescripcionTarjetas
            className={`my-5   duration-300 `}
          >{descripcion}
            
          </DescripcionTarjetas>
        )}
  </div>
  )
}
