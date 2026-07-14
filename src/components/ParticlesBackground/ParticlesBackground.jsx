import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "./ParticlesBackground.css";

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        fpsLimit: 60,

        background: {
          color: {
            value: "#050816",
          },
        },

        particles: {

          number: {
            value: 70,
          },

          color: {
            value: ["#38BDF8", "#8B5CF6", "#FFFFFF"],
          },

          size: {
            value: { min: 1, max: 3 },
          },

          opacity: {
            value: 0.6,
          },

          move: {
            enable: true,
            speed: 0.4,
            random: true,
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: false,
          },

        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;