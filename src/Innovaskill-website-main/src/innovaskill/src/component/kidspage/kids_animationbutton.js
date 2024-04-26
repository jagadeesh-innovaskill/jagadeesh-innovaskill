import React from 'react';
import './kids_animationbutton.css';
import { Link, NavLink } from 'react-router-dom';

const AnimatedButton = () => {
  return (
    <div className='full_animebuttonpage'>
    <a href='/enquiry-form'><button className="animated-button">
      Free Demo
      <span className="border-animation"></span>
    </button></a>

    <a href='/enquiry-form'><button className="animated-button">
     Enroll Now
     <span className="border-animation"></span>
   </button></a>
   </div>
  );
};

export default AnimatedButton;
