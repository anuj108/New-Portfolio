import "./intro.css";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Fade from "react-reveal/Fade";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// import Aos from "aos";
export default function Intro() {
  // const Intro = () =>{
  //     useEffect(() => {
  //         Aos.init({ duration: 2000 });

  //     }, [])

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#ffff", "#ffff", "#ffff", "#ffff"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.9,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <div className="Intro" id="intro">
      <div className="left">
        <Particles options={options} init={particlesInit} />
        <Fade left>
          <div className="imgContainer">
            <img src="assets/final.jpg" alt="dkhc's" />
          </div>
        </Fade>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2 color="yellow">Hey There 💚</h2>
          <h1>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "I AM ANUJ SHAKYA",
                1000,
                "I AM A CP CODER",
                1000,
                "I AM A WEB DEVELOPER",
                1000,
                "I AM A TECH ENTHUSIAST",
                1000,
              ]}
              speed={60} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "1em", fontWeight: "300" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h1>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
