import './enquiry.css';
// import img from "./images/Innovaskill.png";
// import img from './images/5.jpg';
import logo from "./images/logo.png";



// for Animation  

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Link } from 'react-router-dom';
//  import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


function Enquiry(){


  const courseName = [
    {
      course:"PCB Design"
    },
    {
      course:"Embedded System"
    },
    {
      course:"Embedded Linux"
    },
    {
      course:"IoT"
    },
    {
      course:"Matlab"
    },
    {
      course:"PLC(Master Program in Industrial Automation)"
    },
    {
      course:"AutoCAD Electrical"
    },
    {
      course:"EPLAN"
    },
    {
      course:"ETAP"
    },
    {
      course:"AutoCAD Mechanical"
    },
    {
      course:"Catia"
    },
    {
      course:"Creo"
    },
    {
      course:"SolidWorks"
    },
    {
      course:"NX-CAD"
    },
    {
      course:"Ansys"
    },
    {
      course:"CCNA"
    },
    {
      course:"RedHat Linux"
    },
    {
      course:"AWS"
    },
    {
      course:"C"
    },
    {
      course:"C++"
    },
    {
      course:"Java"
    },
    {
      course:"Python"
    },
    {
      course:"UI-UX Design"
    },
    {
      course:"Graphics Designer"
    },
    {
      course:"MEAN Full Stack Developer"
    },
    {
      course:"MERN Full Stack Developer"
    },
    {
      course:"JAVA Full Stack Developer"
    },
    {
      course:"Python Full Stack Developer"
    },
    {
      course:".Net Full Stack Developer"
    },
    {
      course:"Using Flutter"
    },
    {
      course:"Using React Native"
    },
    {
      course:"SQL"
    },
    {
      course:"Manual Testing"
    },
    {
      course:"Selenium Using Java"
    },
    {
      course:"Selenium Using Python"
    },
    {
      course:"Deep Learning"
    },
    {
      course:"Machine Learning"
    },
    {
      course:"Artificial Inteligence"
    },
    {
      course:"Data Science"
    },
    {
      course:"Data Analytics"
    },
    {
      course:"Virtual Reality"
    },
    {
      course:"Argumental Reality"
    },
    {
      course:"Robatic Process Automation"
    },
    {
      course:"Kids Keep Learning"
    }
  ]
    const formSubmit = (e) =>{
        e.preventDefault();
    }

    return(<>
    
    <div className="enquiry-form-main">

        {/* <img src={img} className='enquiry-bg-img'/> */}

        <div className="enquiry-body">
            
            <div className='logo'>
            <img src={logo}/>
            </div>

            <div className="form-head">
                <h2> Enquiry Form </h2>
            </div>
                <form onSubmit={formSubmit}>

                    <input type="text"   placeholder="Name *"/>

                    <input type="text"   placeholder="Education/Qualification *"/>

                    <input type="number" placeholder="Contact Number *"/>

                    <input type="email"  placeholder="Email ID *"/>

                    <input list='courses' className="datalist" placeholder='Choose Your Courses'/>

                    <datalist id='courses' >

                      {courseName.map( (c) => {
                        return(<>
                          <option> {c.course} </option>
                        </>)
                      })}

                    </datalist>

                    <select>

                        <option> Choose Your Location </option>
                        <option> BTM Layout , Banglore </option>
                        <option> Maraimalai Nager , Chengalpattu/Chennai </option>
        
                    </select>
                
                    <textarea placeholder="Message" cols={22} rows={3} >
                    </textarea>

                        <button> Submit </button>

                        <Link to={'/'} id='enquiry-home-btn'> <button> Home  </button> </Link>

                </form>

        </div>

        <ParticlesComponent id="form-particles" />

    </div>


    </>)
}
export default Enquiry;



const ParticlesComponent = (props) => {

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

    //   background: {
    //     color: {
    //       value: "#fff",
    //     },
    //     height: {
    //         value:"50"
    //     }
    // },
    //   height:"50vh",
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
          color: "#ffffff7a",
          distance: 100,
          enable: true,
          opacity: 1,
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
      detectRetina: true,
    }),
    [],
  );

return <Particles id={props.id} init={particlesLoaded} options={options} />

};
