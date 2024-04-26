import Navigation from '../nav/navigation';
import './franchise.css';
import { GiArchiveResearch } from 'react-icons/gi';

import banner from './images/14.svg';
import about from './images/40.svg';
import Franchise2 from './franchise-2/franchise-2';
function Franchise(){

    return(<>

    <Navigation/>

    <div className="franchise-main-div">

        <div className='franchise-banner-div'>
            <img src={banner}/>
        </div>

        <div className='franschise-body-div'>

            <div className='franchise-about-div'>

                <div className='franchise-about-img'>
                    <img src={about}/>
                </div>

                <div className='franchise-about-content'>
                    <h1> Who we are ?</h1>
                    <p>
                        Innovaskill Technologies is a global training company which provides tailor-fit courses to suit individual customer's requirement with our Industry Ready Learning Management System. Our training and development programs will help you to learn and acquire new skills, as well as gain the professional knowledge required to progress in your career. We offer a vast array of practical & job oriented domain specific courses on IT software development, Electronic Design Automation, Industrial Automation, Information & Network Security, Mechanical & Civil Design, Solar Installation, Digital Marketing and many more Professional courses which are specifically designed to suit the needs of the Industry and also helps you to become an Entrepreneur.
                    </p>
                </div>

            </div>

        </div>

    </div>

    <Details/>

    <Franchise2/>

    </>)}
export default Franchise;

function Details(){

    const details = [
        {
            points:"Continuously updating syllabus based on industrial requirements and standards."
        },
        {
            points:"Focusing on various sectors by understanding the pulse of employment market."
        },
        {
            points:"Complete support by fulfilling neccessities like hardware and software services from corporate office at an affordable cost."
        },
        {
            points:"Easy to capture market with existing brandname."
        },
        {
            points:"Experienced and certified trainers and team."
        },
        {
            points:"Special attention towards highly demand courses."
        },
        {
            points:"In-house and out-house activity support from corporate office."
        },
        {
            points:"Sincere suggestions will be taken into consideration while launching new courses or products."
        },
        {
            points:"Easy to target customers/students/corporates with the sake of our high success rate."
        },
        {
            points:"Placement training will be given for all the enrolled candidates at the end of technical course."
        },
        {
            points:"End to end assistance from scratch."
        },
        {
            points:"Special assistance in recruiting and sourcing trainers and marketing staffs."
        },
        {
            points:"Provide technical, marketing and softskill training to staffs."
        },
        {
            points:"Session wise training presentations on every technologies."
        }
    ];

    const support = [
        {
            points:"Marketing support: Marketing and sales methodologies will be shared from our end inorder to capture local market."
        },
        {
            points:"Technical training: Trainers can upgrade themselves to new technologies based upon new courses launch by corporates and can earn expertise knowledge with certification."
        },
        {
            points:"Counsellors training: End to end training for counsellors to understand the prospects, pros and cons of the courses along with the marketing knowledge sharing sessions."
        },
        {
            points:"Techno-commercial sessions: For all courses or technologies which is launching by either of us will be supported by providing value added sessions on technical and competitive openness of product on market."
        },
        {
            points:"College events: Seminars, workshops or special events will be assisted from our end and proper guidance will be given on areas like money and time saving while conducting particular events."
        },
        {
            points:"Hardware setup: Hardware Products will be given at uncomparable low cost like PLC, network routing and switiching and embedded system products."
        },
        {
            points:"Support site: Online system to manage students right from registration till placement assistance."
        }
    ];

    return(<>
   
        <div className='franchise-details-main'>

        <div className='franchise-details-body'>

            <div className='franchise-details-head'>
                <h1> Why to opt Innovaskill ? </h1>
            </div>

            <div className='franchise-details-content'>
                {
                    details.map( (d) => {
                        return(<>
                        <div className='franchise-content'> <GiArchiveResearch className='i'/> <h3> {d.points} </h3> </div> 
                        </>)
                    })
                }
                
            </div>
        </div>

        <div className='franchise-support-body'>

                <div className='franchise-support-head'>
                    <h1> Franchise Support </h1>
                </div>

                <div className='franchise-support-content'>
                    {
                        support.map( (s) => {
                            return(<>
                                <div className='support-content'> <GiArchiveResearch className='j'/> <h3> {s.points} </h3> </div>
                            </>)
                        })
                    }
                </div>
        </div>

    </div>
    </>)
}

