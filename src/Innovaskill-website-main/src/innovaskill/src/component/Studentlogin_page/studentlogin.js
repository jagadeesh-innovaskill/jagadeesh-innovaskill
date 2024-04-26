import './studentlogin.css';
// import img from "./images/Innovaskill.png";
// import img from '../Studentlogin_page/std_login_image/5.jpg';
import logo from "./std_login_image/std_logo.png";

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {useState}  from 'react';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
// import { auth } from 'firebase';
import { auth } from '../../firebase.js';


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import { Link } from 'react-router-dom';


function Studentlogin(){

    // const formSubmit = (e) =>{
    //     e.preventDefault();
    // }

    const [phone, setPhone ] = useState("")
    const [user , setUser] = useState(null)
    const [otp , setOtp] = useState("")
    
    // const [code, setCode] = useState('');

    const sendotp = async()=>{
      try{
      const Recaptca = new RecaptchaVerifier(auth,"recaptcha",{})
      const confiremation = await signInWithPhoneNumber(auth,phone,Recaptca)
      setUser(confiremation)
    }
    catch(err){
      console.log(err)
    }
  }

  const verifyotp =async ()=>{
    try{
      const data = await user.confirm(otp)
      console.log(data)
    }
    catch(err){
      console.log(err)
    }
    await user.confirm(otp)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // if (code === phone) {
    //   console.log('Code and mobile number are the same. Submitting...');
    // } else {
    //   console.log('Code and mobile number are different.');
    // }
  };

    
    return(
    <div>
    
    <div className="std-form-main">

        {/* <img src={img} className='enquiry-bg-img'/> */}

        <div className="std-body">
            
            <div className='logo'>
            <img src={logo}/>
            </div >

            <div className="std-form-head">
                <h2>Student Login </h2>
            </div>
                {/* <form onSubmit={formSubmit}> */}
                
                <div className='std_form'
                //  onSubmit={formSubmit} 
                 >

                <input type="text"
                    // value={code} 
                    // onChange={(e) => setCode(e.target.value)}  
                    placeholder="Enter Course code  *"className='std_inp1'/>
                <PhoneInput
                    country={'India'}
                    value={phone}
                    onChange={(phone) =>setPhone('+' + phone )}
                    type="text"
                    className='std_phoneinput'
                    placeholder='Enter Mobile Number  *'
                    // style={{padding:"0 5vw"}}
                    />
                  <div className='std_otpdiv'>

                    <button variant='contained' className='std-generate-otp' onClick={sendotp}>Generate OTP</button>

                    <input type="number" onChange={(e)=> setOtp(e.target.value)}  placeholder="Enter OTP *" className='std_inp2'/>

                  </div>

                    <div id='recaptcha'></div>

                     <button  className='std-buttons-div' type='submit' onClick={verifyotp}> Submit </button><br/>
                     <a href={'/'} className='std-home-button'><button type='submit'
                    //  onSubmit={handleSubmit}
                     >Home</button></a>

                </div>
               
        </div>

        <ParticlesComponent id="form-particles" />

    </div>


    </div>
    )
}
export default Studentlogin;



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
