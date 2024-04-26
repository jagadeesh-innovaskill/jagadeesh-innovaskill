import React from "react";
import "./kids_page.css";
import blog_kidsimage from "./kids_images/kids_image.avif";
import AnimatedButton from './kids_animationbutton'
import OneToOnetraining from "./kids_images/3.png";
import Personalizedattention from './kids_images/8.png';
import onlineoffline from './kids_images/4.png';
import flexibledate from './kids_images/5.png';
import Weekdays from './kids_images/6.png';
import Unlimitedinterviews from './kids_images/7.png';
import kkl from "./kids_images/KKL.png"
// import AnimatedButton from './AnimatedButton.js';

import { GiArchiveResearch } from "react-icons/gi";




export default function Kidspage () {
  return (
    <div className="kidsholepage">
      <section className="kids_section1">
        <div id="kids_sec1div1">
          <h1>Kids Keep Learning</h1>
          <br />
          <h3> Kids’ Keep Learning</h3>
          <p>
          Innova for champs’ programme will always finds new and creative ways to get our students excited to learn. Kids champions can join this programming adventure and become talented developers who is capable of writing codes in minutes. We are offering those kinds of learning which every parent wish to give their kids - The brilliant mixture of graphics, games and tech wonders. Enjoyable and organized sessions for fundamental structures, modules, functions & coding etc
          </p>
          <h1>Why Innovaskill for Young champs?</h1>
          
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>Visual appealing and practical sessions given by Innova expert trainers which helps students to learn from basics and builds fundamental logical skills.</li>
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>Games and fun programs to motivate kids and extends the passions for coding on kids beyond the walls of their   schools.</li>
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>Learning through the methods of graphics and apps makes the students more engaging and helps to impart valuable job skills on students.</li>
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>Courseware’s with colourful illustration and catchy notes along with store lines creates deep interest on students.</li>
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>Brain storming sessions and awards along with playful exercises will make the students more creative and develop their insights about tech wonders.</li>
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>&Dedicated faculties who will give one to one attention to students for imparting the skills from basics and supports them for experimenting new ideas.</li>
          <li><GiArchiveResearch  style={{ color: 'yellow', size: '50px' }}/>Daily exercise and application oriented real time learning makes the students more engageable and successful.</li>
          <li><GiArchiveResearch style={{ color: 'yellow', size: '50px' }}  />Supports kids to learn the widely used programming language through unique examples and programming puzzles.</li>

        </div>
        <div className="kids_sec1div2">
          <img src={blog_kidsimage} className="kids_kidsimage"></img>
          <br />
          <br />

          <p>Course Name</p>
          <p>
            <span>Kids Keep Learning</span>
          </p>
          <hr />
          <p>No.of Student Enrolled</p>
          <p>
            <span>250+ Students</span>
          </p>
          <hr />
          <p>Course Duration</p>
          <p>
            <span>1-Months / 2-Months / 3-Months</span>
          </p>
          <hr />
          {/* <p>Mode Of Traning</p>
          <p>
            <span>Online / Offline</span>
          </p>
          <hr /> */}
          <br />
          <AnimatedButton />
        </div>
      </section>
      <h2 id="kids_whychoose">
        Why to Did Choose{" "}
        <a href="https://www.innovaskill.in/index">Innovaskill ?</a>
      </h2>
      <br />
      <section id="kids_section2">
        <div className="kids_sec2div">
          <img src={OneToOnetraining} width={150} height={150} />
          <br />
          <b>
            One-To-One <br /> training
          </b>
        </div>
        <div className="kids_sec2div">
          <img src={Personalizedattention} width={150} height={150} />
          <br />
          <b>Personalized attention</b>
        </div>
        <div className="kids_sec2div">
          <img src={flexibledate} width={150} height={150} />
          <br />
          <b>Flexible date and timing</b>
        </div>
        <div className="kids_sec2div">
          <img src={onlineoffline} width={150} height={150} />
          <br />
          <b>Available both online/offline</b>
        </div>
        <div className="kids_sec2div">
          <img src={Weekdays} width={150} height={150} />
          <br />
          <b>Weekdays and weekend classes</b>
        </div>
        <div className="kids_sec2div">
          <img src={Unlimitedinterviews} width={150} height={150} />
          <br />
          <b>Unlimited interviews until get placed</b>
        </div>
      </section>
      {/* <section className="fsd_syllabusfullsection">
       
        </section> */}
        <section className="kids_section4">
          <div className="kids_section4content">
          <h1>Why our champs should code/learn technologies  ? </h1>
          
          <p>
          <GiArchiveResearch  style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Bringing out hidden talents: Kids learn languages to communicate and express their feelings, ideas and outstanding thoughts which strengthens their verbal and written abilities Coding also possess a language- the amazing disney world of 0's and 1's which every kids should travel so that children will get to know the rapidly moving technology world around them and be able to speak the technological wonders around them.</p>
          <p><br/>
            <GiArchiveResearch  style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Waking up the innovative minds: Programming or coding wonders helps children to experiment new things and fosters their creativity. Creative minds won't stop and it would be difficult to catch those butterflies who will fly higher and higher and bloom like little stars.</p><br/>
          <p>
            <GiArchiveResearch  style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Career orientation and Logical skills: In this digital age of transformation, technological skills will help our young champs to be competent and builds up logical and problem-solving skills. This will be a ladder support to students for boost up their confidence, communication, creativity & math skills. The leading companies like JP Morgan, IBM, Amazon Sky etc being the top most recruiters for developers in 2019-20.</p><br/>
          <p>
            <GiArchiveResearch  style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Achieves academic progress: For being outstanding in a mass crowd our champs have to be extra ordinary, through coding children learns how to plan and organize thoughts. This is way to develop critical thinking and maintain the emotional intelligence. The languages like python, java and swift growth trend is outstripping similar programming languages.</p><br/>
          <p>
            <GiArchiveResearch  style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Be unique from scratch: Kids can jump straight into technological world and can learn how to create games, programs, websites and even integrate with robotics. The initial roots must have to be stronger so that we can sharpen it in future and can become a giant tree of tech expertise.
          </p><br/>
          
           {/* <p>Mode Of Traning</p>
          <p>
            <span>Online / Offline</span>
          </p> */}
          <hr /> 
          </div> 
          <div className="kids_section4imgdiv">
          <img src={kkl} ></img>
          </div>
        </section><hr className="kids_hr"/>
        
      
    </div>
  );
}
