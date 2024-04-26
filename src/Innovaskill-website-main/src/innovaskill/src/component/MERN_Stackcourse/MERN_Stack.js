import React from "react";
import "./MERN_Stack.css";
import fullstackimage from "./Images_MERN/fullstack_sec1image.avif";
import OneToOnetraining from "./Images_MERN/3.png";
import Personalizedattention from "./Images_MERN/8.png";
import onlineoffline from "./Images_MERN/4.png";
import flexibledate from "./Images_MERN/5.png";
import Weekdays from "./Images_MERN/6.png";
import Unlimitedinterviews from "./Images_MERN/7.png";
import GettingYourDreamJob from "./Images_MERN/BANNER DESIGN.svg"
import AnimatedButton from './MERN_animationbutton.js';

import companylogo from "./Images_MERN/COLLEGE MoU.png";
import OurStudentWorkingCompanyies from "./Images_MERN/PLACEMENT.png";
import course_certificate from "./Images_MERN/COURSE COMPLETION.png";
import internship_certificate from "./Images_MERN/INTERNSHIP.png";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";
import Navigation from "../../../nav/navigation.jsx";



export default function Mernstack() {
  return (
    <div className="fsd_mern">
      <Navigation />
      <section className="fsd_section1">
        <div className="fsd_sec1div1">
          <h1>Full Stack Develpment</h1>
          
          <h3>Courese objectives:</h3>
          <p>
            A Full Stack Development course aims to equip students with a
            comprehensive understanding of front-end and back-end web
            technologies, including HTML, CSS, JavaScript, and popular
            frameworks like React or Angular for creating dynamic user
            interfaces. Students also learn server-side programming languages
            such as Node.js or Python, database management using SQL and NoSQL
            databases, and API development for seamless communication between
            front-end and back-end systems.
          </p>
          <h1>Who can enroll ?</h1>
          <p>
            While it is possible to become a full stack developer without formal
            training, most people who enter this field have at least a
            bachelor's degree in computer science or a related field. However,
            anyone interested in Tech Career can become a full stack developer
            by learning various programming languages and frameworks.
          </p>
          <h1>Coure Module :</h1>
          
          <section className="fsd_modulesection">
            <div>
              <li>
                <a href="#fsd_syllabusfullsection">Module1 : Html</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module4 : Javascript</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module7 : ReactJS</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module10 : NodeJS</a>
              </li>
            </div>
            <div>
              <li>
                <a href="#fsd_syllabusfullsection">Module2 : Css</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module5 : Ecmascript</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module8 : Github</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module11 : ExpressJS</a>
              </li>
            </div>
            <div>
              <li>
                <a href="#fsd_syllabusfullsection">Module3 : Bootsrap</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module6 : Jquary</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module9 : MongoDB</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">
                  Module12 : Project Using MERN
                </a>
              </li>
            </div>
          </section>
        </div>
        <div className="fsd_sec1div2">
          <img src={fullstackimage} className="fullsatckimage"></img>
          <br />
          <br />

          <p>Course Name</p>
          <p>
            <span>MERN Full-Stack Development</span>
          </p>
          <hr />
          <p>No.of Student Enrolled</p>
          <p>
            <span>500+ Students</span>
          </p>
          <hr />
          <p>Course Duration</p>
          <p>
            <span>6-Months</span>
          </p>
          <hr />
          <br />
          <AnimatedButton /><br/>
          {/* <button className="fsd_sec1div2button1">Free Demo</button>
          <button className="fsd_sec1div2button2">Enroll Now </button> */}
        </div>
      </section>
      <h2 id="fsd_whychoose">
        Why to Did Choose &nbsp;&nbsp;
        <a href="https://www.innovaskill.in/index">Innovaskill ?</a>
      </h2>
      <br />
      <section id="fsd_section2">
        <div className="fsd_sec2div">
          <img src={OneToOnetraining} width={150} height={150} />
          <br />
          <b>
            One-To-One <br /> training
          </b>
        </div>
        <div className="fsd_sec2div">
          <img src={Personalizedattention} width={150} height={150} />
          <br />
          <b>Personalized attention</b>
        </div>
        <div className="fsd_sec2div">
          <img src={flexibledate} width={150} height={150} />
          <br />
          <b>Flexible date and timing</b>
        </div>
        <div className="fsd_sec2div">
          <img src={onlineoffline} width={150} height={150} />
          <br />
          <b>Available both online/offline</b>
        </div>
        <div className="fsd_sec2div">
          <img src={Weekdays} width={150} height={150} />
          <br />
          <b>Weekdays and weekend classes</b>
        </div>
        <div className="fsd_sec2div">
          <img src={Unlimitedinterviews} width={150} height={150} />
          <br />
          <b>Unlimited interviews until get placed</b>
        </div>
      </section>
      <section className="fsd_syllabusfullsection" id="fsd_syllabusfullsection">
        <h1 className="fsd_syllabus">Course Module Syllabus :</h1>
        <section className="fsd_section3" id="fsd_section3">
          <div className="fsd_html">
            <details>
              <summary>Html</summary>
              <section className="fsd_html_section">
                <div>
                  <b>Html</b>                    <ul>
                    <li> Introduction to web development</li>
                    <li> Introduction to html</li>
                    <li> DOCTYPE in html</li>
                    <li> HTML Document Structure</li>
                    <li> Head & Body</li>
                    <li> Metadata & title tags</li>
                    <li> Semantic and non-semantic elements</li>
                    <li> Block level and inline elements</li>
                    </ul>
                  
                  <b>Tags</b>
                  <ul>
                  <li> Heading and Paragraph tags</li>
                  <li> Section & Div tag</li>
                  <li> Adding comments</li>
                  <li> Adding horizontal and line breaks</li>
                  <li>  Preformatted Text</li>
                  <li>  Block Quotes and</li>
                  <li>  Html entities</li>
                  </ul>
                  
                  <b>Images</b>
                  <ul>
                  <li> Introduction to Images for Webpages</li>
                  <li> Adding Images to Webpages</li>
                  <li> Resizing an Image</li>
                  <li> Alternative (ALT) Text</li>
                  <li> Figure and figure caption</li>
                  </ul>
                  
                </div>


                <div>

                  
                  <b>Video and Audio</b>
                  <ul>
                  <li> Adding Video</li>
                  <li> Adding Audio</li>
                  </ul>
                  
                  <b>Lists </b>
                  <ul>
                  <li> Numbered (Ordered) Lists</li>
                  <li> Bulleted (Unordered) Lists</li>
                  <li> Definition Lists</li>
                  <li> Nested Lists</li>
                  </ul>
                 
                  <b>Links</b>
                  <ul>
                  <li> Linking url with text</li>
                  <li> Linking url with imagess</li>
                  <li> Opening a Page in a New Window</li>
                  <li> Linking to an Area on the Same Page(Bookmarks)</li>
                  <li> Linking to an E-mail Address</li>
                  <li> Linking to Other Types of Filess</li>
                  <li> Adding youtube video (iframe)</li>
                  <li> Adding geo location(Map)</li>
                  <li> Navigation bar in html</li>
                  </ul>
                  
                  <b>HTML Tables</b>
                  <ul>
                  <li> Inserting a Table</li>
                  <li> Rowspan and column span</li>
                  </ul>

                </div>


                <div>

                  <b>HTML Forms</b>

                  <ul>
                  <li> Input types</li>
                  <li> Label and placeholder</li>
                  <li> Text area</li>
                  <li> Submitting form</li> 
                  <li> Select and option</li>
                  <li> Datalist</li>
                  </ul>
                  
                  <b>Other tags </b>
                  <ul>
                  <li> Bold tag and Strong tag</li>
                  <li> Italic tags and Emphasis tag</li>
                  <li> Header and footer tag</li>
                  <li> Address and Aside tag</li> 
                  <li> Details and Summary tag</li>
                  <li> Button and Marquee tag</li>
                  <li> Deleted and Inserted tag</li>
                  <li> Mark and Small tag</li>
                  <li> Sub and Superscripted tag</li>
                  <li> Span element</li>
                  <li> Adding icons to html</li>
                  </ul>

                </div>
              </section>
            </details>
          </div>


          <div className="fsd_css">
            <details>
              <summary>Css</summary>
              <section className="fsd_css_section">
                <div>

                  <b>Css</b>
                  <ul>
                  <li> Introduction to CSS</li>
                  <li> Types of linking CSS</li>
                  <li> Inline css</li>
                  <li> Internal css</li> 
                  <li> External css</li>
                  <li> Syntax</li>
                  <li> Adding comment</li>
                  </ul>
                  
                  <b>Selectors</b>

                  <ul>
                  <li> tag selector</li>
                  <li> id selector</li>
                  <li> class selector</li>
                  <li> grouping selector</li> 
                  <li> nesting selector</li>
                  <li> universal selector</li>
                  </ul>
                  
                  <b>Text properties </b>
                  <ul>
                  <li> Text Color</li>
                  <li> Text Alignment</li>
                  <li> Text decoration</li>
                  <li> Text Indentation</li> 
                  <li> Text shadow</li>
                  <li> Font family</li>
                  <li> Font size</li>
                  <li> Font style</li>
                  <li> Font weight</li>
                  <li> Letter Spacing (Kerning)</li>
                  <li> Line Spacing (Leading)</li>
                  </ul>
                  
                </div>

                <div>
                  <b>Images </b>
                  <ul>
                  <li> Opacity</li>
                  <li> Box shadow</li>
                  <li> Border radius</li>
                  <li> Float</li> 
                  <li> Filter</li>
                  </ul>
                  
                  <b>Background</b>
                  <ul>
                  <li> Background image</li>
                  <li> Background color</li>
                  <li> Background gradients</li>
                  </ul>
                  
                  <b>Box model </b>
                  <ul>
                  <li> border</li>
                  <li> outline</li>
                  <li> Margin</li>
                  <li> Padding</li>
                  </ul>

                  <b>Dimensions of elements </b>
                  <ul>
                  <li> Width</li>
                  <li> Height</li>
                  </ul>
                  
                  <b>Navigation Bar </b>
                  <ul>
                  <li> Vertical Navigation Bar</li>
                  <li> Horizontal Navigation Bar – Inline</li>
                  <li> Horizontal Navigation Bar – Floating</li>
                  </ul>
                 
                  <b>Tables </b>
                  <ul>
                  <li> Borders</li>
                  <li> Collapsed Borders</li>
                  <li> Table Width and Cell Height</li>
                  <li> Table Padding</li>
                  </ul>
                
                </div>

                <div>
                  <b>Display Properties </b>
                  <ul>
                  <li> Flex</li>
                  <li> Grid</li>
                  <li> Block</li>
                  <li> Inline</li>
                  <li> Inline-block</li>
                  <li> None</li>
                  <li> Table Width and Cell Height</li>
                  <li> Table Padding</li>
                  </ul>
                  
                  <b>Other Properties</b>
                  <ul>
                  <li> Styling Links and lists</li>
                  <li> Position properties</li>
                  <li>Top, Right, Bottom and Left properties</li>
                  <li> Visibility</li>
                  <li> Pseudo-classes & Pseudo <br/> – elements</li>
                  </ul>
                  
                  <b>Transforms</b>
                  <ul>
                  <li> 2D Transforms</li>
                  <li> 3D Transforms</li>
                  <li> CSS media queries</li>
                  <li> Z-index and !important</li>
                  <li> CSS tooltip</li>
                  </ul>
                  
                  <b>
                    Transitions and Animations <br />
                    in CSS
                  </b>
                  <ul>
                  <li> Transitions</li>
                  <li> Animations</li>
                  <li> SVG and Canvas</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_bootsrap">
            <details>
              <summary>Bootsrap</summary>
              <section className="fsd_bootstrap_section">
                <div>
                  <b>Bootstrap</b>
                  <ul>
                  <li> Introduction to Bootstrap</li>
                  <li> Grids and themes</li>
                  <li> Tables</li>
                  <li> Form</li>
                  <li> Pagination</li>
                  <li> Popover</li>
                  <li> Carousel</li>
                  <li> Dropdown</li>
                  </ul>
                  
                </div>
                </section>
              </details>
            </div>


          <div className="fsd_javascript" >
            <details>
              <summary>Javascript</summary>
              <section className="fsd_javascript_section">
                <div>
                  <b>Javascript Basics </b>
                  <ul>
                  <li> Inline js</li>
                  <li> Inetrnal js</li>
                  <li> External js</li>
                  <li> Javascript keywords</li>
                  <li> Js Variables</li>
                  </ul>
                  
                  <b>Js Data types</b>
                  <ul>
                  <li> String</li>
                  <li> Number</li>
                  <li> Boolean</li>
                  <li> Undefined</li>
                  <li> Null</li>
                  <li> Non-primitive datatypes</li>
                  </ul>
                 
                  <b>Js Operators </b>
                  <ul>
                  <li> Arithmatic operators</li>
                  <li> Assignment operators</li>
                  <li> Relational operators</li>
                  <li> Logical operators</li>
                  <li> Bitwise operators</li>
                  <li> Increment/ decrement operators</li>
                  <li> Equality operators</li>
                  <li> Conditional statements</li>
                  <li> Switch case</li>
                  </ul>
                </div>
                
                <div>
                <b>Js Loops </b>
                  <ul>
                  <li> For loop</li>
                  <li> While loop</li>
                  <li> Do-while loop</li>
                  <li> For-in loop</li>
                  <li> For-of loop</li>
                  </ul>
                
                  <b>Js functions </b>
                  <ul>
                  <li> Function syntax</li>
                  <li> Parameter passing function</li>
                  <li> Arrow Functions</li>
                  <li> IIFE</li>
                  <li> Anonymous function</li>
                  <li> Return keyword in function</li>
                  </ul>
                  
                  <b>Js Arrays  </b>
                  <ul>
                  <li> Map</li>
                  <li> Filter & Find</li>
                  <li> Every & Some</li>
                  <li> Sort & Reverse</li>
                  <li> Concat & Join</li>
                  <li> Reduce & Includes</li>
                  <li> FindIndex & IndexOf</li>
                  <li> ForEach</li>
                  <li> Push & Unshift</li>
                  <li> Shift & Pop</li>
                  </ul>
                  
                </div>

                <div>
                <b>JS Objects  </b>
                  <ul>
                  <li> Introduction to Object</li>
                  <li> Dot notation</li>
                  <li> Bracket notation</li>
                  <li> Date object</li>
                  <li> Math object</li>
                  <li> Array of Objects</li>
                  <li> Object methods</li>
                  <li> JS Type conversion</li>
                  </ul>
                  
                  <b>JS DOM </b>
                  <ul>
                  <li> Introduction to DOM</li>
                  <li> DOM Elements</li>
                  <li> DOM events</li>
                  <li> DOM css</li>
                  <li> Event Listener</li>
                  <li> DOM Selectors</li>
                  <li> JS BOM</li>
                  </ul>
                  
                  <b>Js Arrays  </b>
                  <ul>
                  <li> Map</li>
                  <li> Filter & Find</li>
                  <li> Every & Some</li>
                  <li> Concat & Join</li>
                  <li> Event Listener</li>
                  <li> Reduce & Includes</li>
                  <li> FindIndex & IndexOf</li>
                  <li> ForEach</li>
                  <li> Push & Unshift</li>
                  <li> Shift & Pop</li>
                  </ul>
                 
                </div>
                </section>
              </details>
            </div>


          <div className="fsd_ecmascript" >
            <details>
              <summary>Ecmascript</summary>
              <section className="fsd_ecmascript_section">
                <div>
                <b>ECMASCRIPT</b>
                <ul>
                  <li> Scope</li>
                  <li> Template literals</li>
                  <li> Destructuring</li>
                  <li> Rest and spread operators</li>
                  <li> Closure</li>
                  <li> Hoisting</li>
                  <li> Callback function</li>
                  <li> Promises</li>
                  <li> Async and await</li>
                  <li> Timer functions</li>
                  <li> Class & constructor</li>
                  <li> Inheritance</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_jquary" >
            <details>
              <summary>Jquary</summary>
              <section className="fsd_jquary_section">
                <div>
                  <b>JQUERY </b>
                  <ul>
                  <li> Introduction to jQuery</li>
                  <li> jQuery Syntax</li>
                  <li> Selectors</li>
                  <li> Event Methods</li>
                  <li> jQuery Effects</li>
                  <li> Hide and Show</li>
                  <li> Fading</li>
                  <li> Sliding</li>
                  <li> jQuery - css() Method</li>
                  <li> jQuery - AJAX</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>

          <div className="fsd_reactjs" >
            <details>
              <summary>Reactjs</summary>
              <section className="fsd_reactjs_section">
                <div>
                  <b>Frontend Framework REACTJS</b>
                  <ul>
                  <li> Introduction to react</li>
                  <li> React Installation</li>
                  <li> Features of react</li>
                  <li> Virtual Dom</li>
                  <li> Explanation of all predefined <br/>components</li>
                  <li> Node modules</li>
                  <li> Types of Component</li>
                  <li> Class and Functional Component</li>
                  <li> State and props</li>
                  <li> React router dom</li>
                  </ul>
                  
                </div>
                
                <div>
                  <b>Life Cycle Methods</b>
                  <ul>
                  <li> Mounting</li>
                  <li> Updating</li>
                  <li> Unmounting</li>
                  </ul>
                  
                  <b>React Hooks </b>
                  <ul>
                  <li> useState</li>
                  <li> useEffect</li>
                  <li> useNavigate</li>
                  <li> useRef</li>
                  </ul>
                  
                </div>
                
                <div>
                  <b>React API & methods</b>
                  <ul>
                  <li> GET</li>
                  <li> POST</li>
                  <li> PATCH</li>
                  <li> DELETE</li>
                  <li> HOC of react</li>
                  <li> React with Redux</li>
                  <li> Material UI</li>
                  <li> Real Time Project Using <br/>React Library</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_github" >
            <details>
              <summary>Github</summary>
              <section className="fsd_github_section">
                <div>
                  <b>Version control system GIT</b>
                  <ul>
                  <li> Introduction to Git and Github</li>
                  <li> Pushing data</li>
                  <li> Committing changes</li>
                  <li> Merge data</li>
                  <li> Delete data</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_mongodb" >
            <details>
              <summary>Mongodb</summary>
              <section className="fsd_mongodb_section">
                <div>
                  <b>Database MONGODB</b>
                   <ul>
                  <li> Introduction</li>
                  <li> Installation</li>
                  <li> Data modeling</li>
                  <li> Create & drop Database</li>
                  <li> Create & drop collections</li>
                  <li> Datatypes</li>
                  <li> Insert documents</li>
                  <li> Find documents</li>
                  <li> Update Document</li>
                  <li> Delete Document</li>
                  <li> Queries</li>
                  <li> Operators</li>
                  <li> Selecting fields</li>
                  <li> Projection</li>
                  <li> Aggregation</li>
                  <li> Limit, skip & Sorting Records</li>
                  <li> Index</li>
                  <li> Backup & Restore</li>
                  <li> MongoDB atlas connectionbr</li>
                  </ul>
                
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_nodejs">
            <details>
              <summary>NodeJS</summary>
              <section className="fsd_nodejs_section">
                <div>
                  <b>Backend NODEJS</b>
                  <ul>
                  <li> Introduction to node.js</li>
                  <li> Features of Node.js</li>
                  <li> Advantages of Node.js</li>
                  <li> Install Node.js on Windows</li>
                  <li> Working in REPL</li>
                  </ul>
                  
                  <b>File System </b>
                  <ul>
                  <li> Synchronous vs Asynchronous</li>
                  <li> Reading and Writing a File<br/>synchronously</li>
                  <li> Reading and Writing a file<br/>asynchronously</li>
                  <li> Other IO Operations</li>
                  </ul>
                  
                </div>
                <div>
                  <b>Working with web server </b>
                  <ul>
                  <li> Creating a simple web server</li>
                  <li> How request and response works</li>
                  <li> Sending HTTP Requests</li>
                  </ul>
                
                  <b>Routing in Node.js </b>
                  <ul>
                  <li> Creating a Router</li>
                  <li> Sending HTML response for the<br/>Requested Route</li>
                  <li> Setting headers in response</li>
                  <li> Sending JSON response for the<br/>Requested Route</li>
                  <li>Parsing URLs and Query Strings</li>
                  </ul>
                  
                </div>
                <div>
                  <b>Architecture of Node.js</b>
                  <ul>
                  <li> Event loops</li>
                  <li> Event-Driven Architecture<br/>in Node.js</li>
                  <li> Event Emitting and Handling<br/>custom event</li>
                  </ul>
                  
                  <b>Streams in Node.js</b>
                  <ul>
                  <li> Working with Streams in Node.js</li>
                  <li> Reading and Writing to a Stream</li>
                  </ul>
                  
                  <b>NPM </b>
                  <ul>
                  <li> Installing Modules using NPM</li>
                  <li> Global vs Local Installation</li>
                  <li> Using package.json</li>
                  <li> Creating a module</li>
                  <li> Updating a Module</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_expressjs">
            <details>
              <summary>ExpressJS</summary>
              <section className="fsd_expressjs_section">
                <div>
                  <b>EXPRESSJS </b>
                  <ul>
                  <li> Introduction to Express <br/>Framework</li>
                  <li> Installing Express</li>
                  <li> How do Web API works</li>
                  <li> REST Architecture</li>
                  <li> MVC Architecture</li>
                  <li> Basic Routing</li>
                  <li> Request and Response</li>
                  </ul>
                
                  <b>HTTP methods </b>
                  <ul>
                  <li> Handling GET request</li>
                  <li> Handling POST request</li>
                  <li> Handling PATCH request</li>
                  <li> Handling DELETE request</li>
                  </ul>
                  
                </div>
                <div>
                <b>Integration with MongoDB  </b>
                <ul>
                  <li> Introduction to MongoDB</li>
                  <li> Accessing MongoDB Server</li>
                  <li> Connecting MongoDB with ExpressJS</li>
                  <li> Creating Schema and model</li>
                  <li> Writing Data to MongoDB <br/>Server by using Express</li>
                  <li> Querying Data from MongoDB <br/>Server by using Express</li>
                  <li> Updating Data in MongoDB by <br/>using Express</li>
                  <li> Deleting Data in MongoDB <br/>by using Express</li>
                  <li> Filtering ,Sorting and<br/>Pagination</li>
                  <li> Error Handling in ExpressJs</li>
                </ul>
            
                </div>

                <div>
                  <b>Middleware in Express JS</b>
                  <ul>
                  <li> Creating a custom middleware</li>
                  <li> Using third-party middleware</li>
                  </ul>
  
                  <b>Security</b>
                  <ul>
                  <li> Password encryption</li>
                  <li> Introduction to JWT </li>
                  <li>Authentication using JWT</li>
                  </ul>
                  
                </div>
              </section>
            </details>
          </div>


          <div className="fsd_projecthelp" >
            <details>
              <summary>Project using MERN</summary>
              <section className="fsd_projecthelp_section">
                <div>
                  <b>Project using MERN</b>
                  <ul>
                  <li> Facebook sign up & Login</li>
                  <li> Creating website for College</li>
                  <li> Creating website for Hospital</li>
                  <li> Tourism website creation</li>
                  <li> Creating clone website of innovaskill.in</li>
                  </ul>
                 
                </div>
              </section>
            </details>
          </div>
        </section>
        </section>

        <section className="fsd_section4">
          <div className="fsd_section4content">
          <h1>Getting Your Dream Job Can Be An Exciting And Challenging Journey : </h1>
          <p>By fulfilling these roles and responsibilities, a training institute demonstrates its commitment to student success and contributes to the overall advancement of individuals within their chosen fields. Students should expect to receive comprehensive support and resources that empower them to achieve their educational and career aspirations.
          </p>
          <h1> Innovaskill Technologies provide best opportunities in various sector such as</h1>
          <ul>
            <li>Electronic Design Automation</li>
            <li>Industrial Automation</li>
            <li>Information Security</li>
            <li>Software Development</li>
            <li>Civil and Mechanical Design</li>
            <li>Computerised Accounting</li>
            <li>Digital Marketing</li>
            <li>And many more</li>
          </ul>
          
          <p className="fsd_section5-para"> Innovaskill is eagerly following up the current requirement of each client and noted the uniquenes, so we provide services based on individual needs and requirements for young talents under the umbrella of tech and management profession to provide accurate resolutions. We serves our clients the best to provide customized solutions by considering Clients’ corporate culture, management style and philosophy. We work for almost all the sectors and our services are available across nation (PAN) For any kind of Manpower Requirements please feel free to reach out to us by filling the details below and we will contact you soon.</p>
          </div>
          <div className="fsd_section4imgdiv">
          <img src={GettingYourDreamJob} ></img>
          </div>
        </section><hr className="fsd_hr"/>
        <section className="fsd_section5">
          <h1>Innovaskill Technologies In Association with :</h1><br/>
          <section>
            <img src={companylogo} />
          </section>
        </section>
        <section className="fsd_section6">
          <h1>Our Clients / Our Student Working Companyies :</h1>
          <img src={OurStudentWorkingCompanyies} ></img>
        </section>
        <h1 className="fsd_section7h1">Innovaskill Certification :</h1>
        <section className="fsd_section7">
          <div>
            <h3>Course Complete Certificate</h3>
            <img src={course_certificate} className="fsd_section7img1"></img>
          </div>
          <div>
            <h3>Internship Certificate</h3>
            <img src={internship_certificate} className="fsd_section7img2"></img>
          </div>
          {/* <div>
            <b>Workshop Certificate</b><br/>
            <img src={workshop_certificate} className="fsd_section7img3"></img>
          </div> */}
        </section>
      
    </div>
  );
}
