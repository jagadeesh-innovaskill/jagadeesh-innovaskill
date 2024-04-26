import { useState } from 'react';
import ParticlesComponent from '../../particles/particles';
import './banner.css';

// import banner from "./images/BANNER1A.png";
import banner1 from './images/banner111.svg';
import { Link } from 'react-router-dom';
import { motion, useTime } from 'framer-motion';


// for Animation 

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


function Banner() {

    const [btn1 , setBtn1] = useState(true);
    const [btn2 , setBtn2] = useState(false);
    const [btn3 , setBtn3] = useState(false);

    const mousehov = (e) =>{
      if(e == 'btn-2'){
        setBtn1(false)
        setBtn2(true)
        setBtn3(false)
      }

      if(e=='btn-3'){
        setBtn1(false)
        setBtn2(false)
        setBtn3(true)
      }
    }

    const mouseLeft = (e) =>{
      if(e == 'btn-2'){
        setBtn1(true)
        setBtn2(false)
        setBtn3(false)
      }
      if(e=='btn-3'){
        setBtn1(true)
        setBtn2(false)
        setBtn3(false)
      }
    }

    return (<>
    <div className="banner-home">
    <img src={banner1}/>
    <motion.div animate={{x:80}}>
    </motion.div>

        <div className='btns'>

          <a href='#development' className={btn1 ? "btn-1" : "btn-1-hov" } >
            Website/WebApp Development
          </a>

          <a href='#job-oriented-pog' className={btn2 ? "btn-1" : "btn-1-hov"} onMouseOver={()=>mousehov("btn-2")} onMouseLeave={()=>mouseLeft('btn-2')} > 
            Job Oriented Training
          </a>

          <Link to={'/kids'} className={btn3 ? "btn-1" : "btn-1-hov"} onMouseOver={()=>mousehov("btn-3")} onMouseLeave={()=>mouseLeft('btn-3')}>
              Kids Keep Learning
          </Link>

        </div>

        <div className='btns-1'>
        <Link to={'/enquiry-form'}> <button className='btn-enquiry'>  Enquiry Now  </button> </Link>
        </div>

        <div className='btns-icon'>
            <a href='https://wa.me/6380206760' target='blank'>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </div>

        <div className='partiles-div'>
            <BannerParticles id="banner-particles"/>
        </div>

    </div>
    </>);
}

export default Banner;

const BannerParticles = (props) => {

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);

    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({

      // background: {
      //   color: {
      //     value: "#000",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize:true
        },
        modes: {
          grab: {
            distance: 100,
          },
          push: {
            quantity: 4,
            distance:100,
            duration:1
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
      },
      },
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#fff",
          distance: 100,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.5,
        },
        shape:{
          type: "circle",
        },
        size: {
          value: { min: 1 , max: 3 },
        },
      },
      // detectRetina: true,
    }),
    // [],
  );

return <Particles id={props.id} init={particlesLoaded} options={options} />

};

