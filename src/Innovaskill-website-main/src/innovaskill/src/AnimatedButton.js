import React from 'react';
import './AnimatedButton.css';

const AnimatedButton = () => {
  return (
    <>
    <button className="animated-button">
      Free Demo
      <span className="border-animation"></span>
    </button>

     <button className="animated-button">
     Enroll Now
     <span className="border-animation"></span>
   </button>
   </>
  );
};

export default AnimatedButton;
