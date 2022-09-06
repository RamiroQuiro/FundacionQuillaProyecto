import Seccion from "../../component/Seccion";
import Tarjetas1 from "../../component/Tarjetas1";
import TituloandDescription from "../../component/TituloandDescription";
import playSVG from "../../img/play.svg";
import draw from "../../img/draw.svg";
import guitar from "../../img/guitar.svg";
import hand from "../../img/hand.svg";
import TarjetaArribaAbajo from "../../component/TarjetaArribaAbajo";
import TrieanguleIcon from "../../component/TiranguleIcon";

export default function Seccion1() {

const tarjetas =[
  {
    className:"items-end",
    colorTarjeta:"bg-blue-300",
    imagenTarjeta:draw,
    tituloTarjeta:"Talleres",
    descripcionTarjeta:"Percusión y Danza Folklorica",
  },
  {
    className:"items-start",
    colorTarjeta:"bg-orange-300",
    imagenTarjeta:guitar,
    tituloTarjeta:"Talleres",
    descripcionTarjeta:"Música, canto y guitarra",
  },
  {
    className:"items-end",
    colorTarjeta:"bg-red-300",
    imagenTarjeta:hand,
    tituloTarjeta:"Talleres",
    descripcionTarjeta:"Artes plásticas, infanto juvenil",
  },
  {
    className:"items-start",
    colorTarjeta:"bg-gray-300",
    imagenTarjeta:playSVG,
    tituloTarjeta:"Talleres",
    descripcionTarjeta:"Pintura decorativa para adultos",
  },
  {
    className:"items-end",
    colorTarjeta:"bg-blue-300",
    imagenTarjeta:draw,
    tituloTarjeta:"Talleres",
    descripcionTarjeta:"Corte y Confección",
  }, 
  {
    className:"items-start",
    colorTarjeta:"bg-orange-300",
    imagenTarjeta:guitar,
    tituloTarjeta:"Talleres",
    descripcionTarjeta:"Mosaiquismo",
  },
]

  return (
    <Seccion
    id="fundacionquilla"
    className={"mb-28 md:h-screen relative "}
    >
      <TrieanguleIcon
      colorFill="#FDBA7490"
      className="absolute rotate-12 -top-32 right-20  h-auto w-24"
      />
      <TrieanguleIcon
      colorFill="#FCA5A590"
      className="absolute rotate-12 -top-32 left-[50%]  h-auto w-32"
      />
      <TrieanguleIcon
      colorFill="#93C5FD90"
      className="absolute rotate-45 -top-32 left-52 h-auto w-36"
      />
      
      <TituloandDescription
        title="¿Qué hacemos en Quilla?"
        descripcion="Asociación Quilla ofrece los siguientes talleres para el cicle lectivo 2022, son talleres de inclusion para niños jovenes y adultos, con cuotas minimas para costear gastos."
      />
      
      <div className="w-full h-1/3 flex-auto my-16 flex flex-wrap gap-y-10 justify-between items-stretch">
        {tarjetas?.map((element,i)=>(

          <TarjetaArribaAbajo
          key={i}
          className={element.className}
          colorTarjeta={element.colorTarjeta}
          imagenTarjeta={element.imagenTarjeta}
          tituloTarjeta={element.tituloTarjeta}
          descripcionTarjeta={element.descripcionTarjeta}
          />
        ))}
   
      </div>
    </Seccion>
  );
}
