import React from "react";
import Button1 from "../../component/Button1";
import FormularioContacto from "../../component/FormularioContacto";
import Seccion from "../../component/Seccion";
import TituloandDescription from "../../component/TituloandDescription";
import DescripcionTarjetas from "../../component/DescripcionTarjetas";
import { Link } from "react-router-dom";

export default function Contacto() {
  return (
    <Seccion
      className={"flex flex-wrap md:flex-nowrap md:gap-5 w-full items-stretch justify-between"}
    >
      <div className="flex flex-col flex-auto items-center justify-around border-2 border-neutral-700 p-5 rounded-lg mx-auto md:w-6/12 skew-x-1 md:skew-x-3">
        <TituloandDescription
          className={"md:w-full"}
          classNameTitle={"text-3xl text-left w-full"}
          classNameDescripcion={"text-left"}
          title={"¿Nos Comunicamos?"}
          descripcion={
            "Escribanos por cualquier duda consulta que tengas o apadrinamiento hacia nuestra fundación"
          }
        />
        <FormularioContacto />
      </div>
      <div className="md:w-6/12 h-contain  flex flex-col items-center justify-center mx-auto ">
        <div className="w-full">
          <TituloandDescription
            className={"p-0 md:w-full"}
            title={
              `Barrio El Rincón - Mza 14 Lote 24`
            }
            classNameTitle={"text-3xl m-0 font-normal w-full"}
          />
          <TituloandDescription
            className="p-0 -mt-10 md:w-full"
            title={
              `- La Banda - Santiago del Estero -`
            }
            classNameTitle={"text-3xl m-0 font-normal w-full"}
          />

          <DescripcionTarjetas className={"font-normal text-xl  tracking-wider my-2 text-center"}>
            <span className="uppercase font-medium text-blue-500">Email:</span>{" "}
            AsociacionQuilla@correo.com
          </DescripcionTarjetas>
          <DescripcionTarjetas className={"font-normal text-xl tracking-wider my-2 text-center"}>
            <span className="uppercase font-medium text-blue-500">Cel:</span>{" "}
            3855345785
          </DescripcionTarjetas>
          <DescripcionTarjetas className={"font-normal text-xl tracking-wider my-2 text-center"}>
            <span className="uppercase font-medium text-blue-500">Fijo:</span>{" "}
            4235426
          </DescripcionTarjetas>
        </div>
        <div>
            <h2 className="text-center mt-8 font-medium">Seguinos en Nuestras Redes</h2>
            <i className="mx-2">facebook</i><i className="mx-2">instagram</i><i className="mx-2">linkedin</i>
        </div>
        <div className="my-10 h-16 flex-col flex items-center justify-around w-full text-center">
          <DescripcionTarjetas 
          className="text-center"
          >¿Como llegar?</DescripcionTarjetas>
          <Link to={'//www.google.com/maps/place/Asoc+civil(QUILLA)+artes+y+oficios.+Consultorios/@-27.711928,-64.2629449,17.46z/data=!4m5!3m4!1s0x943b55c3f554609f:0xaf676cc105835470!8m2!3d-27.711488!4d-64.2637311'}
          target="_black"
          className="text-center text-color  duration-200 text-blue-500 font-medium  hover:text-lg"
          >Abrir Mapa
            </Link>
        </div>
      </div>
    </Seccion>
  );
}
