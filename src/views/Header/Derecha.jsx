import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import "./derecha.css";
import moon from "../../img/moon.svg";
import quillalogo from "../../img/quillalogo.svg";
import { loadFull } from "tsparticles";

export default function Derecha() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  return (
    <div className="md:w-3/6 relative  bg-[#18191A] h-2/3 rounded-full  md:h-full">
      <Particles
      className="w-full h-full"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: false,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#f5f5f5",
            },
            links: {
              color: "#f5f5f5",
              distance: 50,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "rigth",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      <img
        src={quillalogo}
        alt="background"
        className="absolute   md:left-32 md:top-24 -translate-x- w-40 md:w-80 rounded-full shadow-xl"
      />
    </div>
  );
}
