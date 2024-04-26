import React from "react";
import "./UiUx.css";
import fullstackimage from "./Ui-ux_images/fullstack_sec1image.avif";
import OneToOnetraining from "./Ui-ux_images/3.png";
import Personalizedattention from "./Ui-ux_images/8.png";
import onlineoffline from "./Ui-ux_images/4.png";
import flexibledate from "./Ui-ux_images/5.png";
import Weekdays from "./Ui-ux_images/6.png";
import Unlimitedinterviews from "./Ui-ux_images/7.png";
import GettingYourDreamJob from "./Ui-ux_images//BANNER DESIGN.svg"
import AnimatedButton from './uiux_animationbutton.js';

import companylogo from "./Ui-ux_images/COLLEGE MoU.png";
import OurStudentWorkingCompanyies from "./Ui-ux_images/PLACEMENT.png";
import course_certificate from "./Ui-ux_images/COURSE COMPLETION.png";
import internship_certificate from './Ui-ux_images/INTERNSHIP.png';
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";




export default function () {
  return (
    <>
      <section className="fsd_section1">
        <div id="fsd_sec1div1">
          <h3>Ui-Ux Design</h3>
          <br />
          <h5>Courese objectives:</h5>
          <p>
          The UI/UX Design Specialization brings a design-centric approach to user interface and user experience design, and offers practical, skill-based instruction centered around a visual communications perspective, rather than on one focused on marketing or programming alone.
          </p>
          <h3>Who can enroll ?</h3>
          <p>
          To pursue the UI UX courses at the undergraduate level, the candidates must complete their 10+2 with a valid percentage aggregate score. Similarly, for a postgraduate course, students need a Bachelor's degree in UI UX design or a similar field with a valid aggregate score as specified by the desired institute.
          </p>
          <h3>Coure Module</h3>
          <br />
          <section className="fsd_modulesection">
            <div>
              <p>
                <a href="#html_link_syllabus">Module1 :Html</a>{" "}
              </p>
              <p>
                <a href="#javascript_link_syllabus">Module4 : Javascript</a>
              </p>
              <p>
                <a href="#reactjs_link_syllabus">Module7 : ReactJS</a>
              </p>
              <p>
                <a href="#nodejs_link_syllabus">Module10 : NodeJS</a>
              </p>
            </div>
            <div>
              <p>
                <a href="#css_link_syllabus">Module2 : Css</a>
              </p>
              <p>
                <a href="#ecmascript_link_syllabus">Module5 : Ecmascript</a>
              </p>
              <p>
                <a href="#github_link_syllabus">Module8 : Github</a>
              </p>
              <p>
                <a href="#expressjs_link_syllabus">Module11 : ExpressJS</a>
              </p>
            </div>
            <div>
              <p>
                <a href="#bootsrap_link_syllabus">Module3 : Bootsrap</a>
              </p>
              <p>
                <a href="#jquary_link_syllabus">Module6 : Jquary</a>
              </p>
              <p>
                <a href="#mongodb_link_syllabus">Module9 : MongoDB</a>
              </p>
              <p>
                <a href="#projectusingmern_link_syllabus">
                  Module12 : Project Using MERN
                </a>
              </p>
            </div>
          </section>
        </div>
        <div className="fsd_sec1div2">
          <img src={fullstackimage} className="fullsatckimage"></img>
          <br />
          <br />

          <p>Course Name</p>
          <p>
            <span>Ui-Ux Design</span>
          </p>
          <hr />
          <p>No.of Student Enrolled</p>
          <p>
            <span>250+ Students</span>
          </p>
          <hr />
          <p>Course Duration</p>
          <p>
            <span>5-Months</span>
          </p>
          <hr />
          <br />
          <AnimatedButton />
          {/* <button className="fsd_sec1div2button1">Free Demo</button>
          <button className="fsd_sec1div2button2">Enroll Now </button> */}
        </div>
      </section>
      <h3 id="fsd_whychoose">
        Why to Did Choose{" "}
        <a href="https://www.innovaskill.in/index">Innovaskill ?</a>
      </h3>
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
      <section className="fsd_syllabusfullsection">
        <h3 className="fsd_syllabus">Course Module Syllabus :</h3>
        <section className="fsd_section3" id="fsd_section3">
          <div className="fsd_html" id="html_link_syllabus">
            <details>
              <summary>Html</summary>
              <section className="fsd_html_section">
                <div>
                  <b>Html</b>
                  <p>
                    • Introduction to web development
                    <br />
                    • Introduction to html
                    <br />
                    • DOCTYPE in html
                    <br />
                    • HTML Document Structure
                    <br />
                    • Head & Body
                    <br />
                    • Metadata & title tags
                    <br />
                    • Semantic and non-semantic &nbsp;&nbsp;&nbsp;elements
                    <br />
                    • Block level and inline elements
                    <br />
                  </p>
                  <b>Tags</b>
                  <p>
                    • Heading and Paragraph tags
                    <br />
                    • Section & Div tag
                    <br />
                    • Adding comments
                    <br />
                    • Adding horizontal and line breaks
                    <br />
                    • Preformatted Text
                    <br />
                    • Block Quotes and &nbsp;
                    <br />
                    • Html entities
                    <br />
                  </p>
                  <b>Images</b>
                  <p>
                    • Introduction to Images for Webpages
                    <br />
                    • Adding Images to Webpages
                    <br />
                    • Resizing an Image
                    <br />
                    • Alternative (ALT) Text
                    <br />
                    • Figure and figure caption
                    <br />
                  </p>
                </div>
                <div>
                  <b>Video and Audio</b>
                  <p>
                    • Adding Video.
                    <br />
                    • Adding Audio.
                    <br />
                  </p>
                  <b>Lists </b>
                  <p>
                    • Numbered (Ordered) Lists
                    <br />
                    • Bulleted (Unordered) Lists
                    <br />
                    • Definition Lists
                    <br />
                    • Nested Lists
                    <br />
                  </p>
                  <b>Links</b>
                  <p>
                    • Linking url with text
                    <br />
                    • Linking url with images
                    <br />
                    • Opening a Page in a New Window or Tab
                    <br />
                    • Linking to an Area on the Same
                    &nbsp;&nbsp;&nbsp;Page(Bookmarks)
                    <br />
                    • Linking to an E-mail Address
                    <br />
                    • Linking to Other Types of Files
                    <br />
                    • Adding youtube video (iframe)
                    <br />
                    • Adding geo location(Map)
                    <br />
                    • Navigation bar in html
                    <br />
                  </p>
                  <b>HTML Tables</b>
                  <p>
                    • Inserting a Table
                    <br />
                    • Rowspan and column span
                    <br />
                  </p>
                </div>
                <div>
                  <b>HTML Forms</b>
                  <p>
                    • Input types
                    <br />
                    • Label and placeholder
                    <br />
                    • Text area
                    <br />
                    • Submitting form
                    <br />
                    • Select and option
                    <br />
                    • Datalist
                    <br />
                  </p>
                  <b>Other tags </b>
                  <p>
                    • Bold tag and Strong tag
                    <br />
                    • Italic tags and Emphasis &nbsp;&nbsp;&nbsp;tag
                    <br />
                    • Header and footer tag
                    <br />
                    • Address and Aside tag
                    <br />
                    • Details and Summary tag
                    <br />
                    • Button and Marquee tag
                    <br />
                    • Deleted and Inserted tag
                    <br />
                    • Mark and Small tag.
                    <br />
                    • Sub and Superscripted tag
                    <br />
                    • Span element
                    <br />
                    • Adding icons to html
                    <br />
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_css" id="css_link_syllabus">
            <details>
              <summary>Css</summary>
              <section className="fsd_css_section">
                <div>
                  <b>Css</b>
                  <p>
                    • Introduction to CSS
                    <br />
                    • Types of linking CSS
                    <br />
                    • Inline css
                    <br />
                    • Internal css
                    <br />
                    • External css
                    <br />
                    • Syntax
                    <br />
                    • Adding comments
                    <br />
                  </p>
                  <b>Selectors</b>
                  <p>
                    • tag selector
                    <br />
                    • id selector
                    <br />
                    • class selector
                    <br />
                    • grouping selector
                    <br />
                    • nesting selector
                    <br />
                    • universal selector
                    <br />
                  </p>
                  <b>Text properties </b>
                  <p>
                    • Text Color
                    <br />
                    • Text Alignment
                    <br />
                    • Text decoration
                    <br />
                    • Text Indentation
                    <br />
                    • Text shadow
                    <br />
                    • Font family
                    <br />
                    • Font size
                    <br />
                    • Font style
                    <br />
                    • Font weight
                    <br />
                    • Letter Spacing (Kerning)
                    <br />
                    • Line Spacing (Leading)
                    <br />
                  </p>
                </div>
                <div>
                  <b>Images </b>
                  <p>
                    • Opacity
                    <br />
                    • Box shadow
                    <br />
                    • Border radius
                    <br />
                    • Float
                    <br />
                    • Filter
                    <br />
                  </p>
                  <b>Background</b>
                  <p>
                    • Background image
                    <br />
                    • Background color
                    <br />
                    • Background gradients
                    <br />
                  </p>
                  <b>Box model </b>
                  <p>
                    • border
                    <br />
                    • outline
                    <br />
                    • Margin
                    <br />
                    • Padding
                    <br />
                  </p>
                  <b>Dimensions of elements </b>
                  <p>
                    • Width
                    <br />
                    • Height
                    <br />
                  </p>
                  <b>Navigation Bar </b>
                  <p>
                    • Vertical Navigation Bar
                    <br />
                    • Horizontal Navigation Bar – Inline
                    <br />
                    • Horizontal Navigation Bar – Floating
                    <br />
                  </p>
                  <b>Tables </b>
                  <p>
                    • Borders
                    <br />
                    • Collapsed Borders
                    <br />
                    • Table Width and Cell Height
                    <br />
                    • Table Padding
                    <br />
                  </p>
                </div>
                <div>
                  <b>Display Properties </b>
                  <p>
                    • Flex
                    <br />
                    • Grid
                    <br />
                    • Block
                    <br />
                    • Inline
                    <br />
                    • Inline-block
                    <br />
                    • None
                    <br />
                  </p>
                  <b>Other Properties</b>
                  <p>
                    • Styling Links and lists
                    <br />
                    • Position properties
                    <br />
                    • Top, Right, Bottom and Left
                    <br /> &nbsp;&nbsp; properties
                    <br />
                    • Visibility
                    <br />
                    • Pseudo-classes & Pseudo –<br /> &nbsp;&nbsp;&nbsp;elements
                    <br />
                  </p>
                  <b>Transforms</b>
                  <p>
                    • 2D Transforms
                    <br />
                    • 3D Transforms
                    <br />
                    • CSS media queries
                    <br />
                    • Z-index and !important
                    <br />
                    • CSS tooltip
                    <br />
                  </p>
                  <b>
                    Transitions and Animations <br />
                    in CSS
                  </b>
                  <p>
                    • Transitions
                    <br />
                    • Animations
                    <br />
                    • SVG and Canvas
                    <br />
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_bootsrap" id="bootsrap_link_syllabus">
            <details>
              <summary>Bootsrap</summary>
              <section className="fsd_bootstrap_section">
                <div>
                  <b>Bootstrap</b>
                  <p>
                    • Introduction to Bootstrap
                    <br />
                    • Grids and themes
                    <br />
                    • Tables
                    <br />
                    • Form
                    <br />
                    • Pagination
                    <br />
                    • Navigation bar
                    <br />
                    • Popover
                    <br />
                    • Carousel
                    <br />
                    • Dropdown
                    <br />
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_javascript" id="javascript_link_syllabus">
            <details>
              <summary>Javascript</summary>
              <section className="fsd_javascript_section">
                <div>
                  <b>Javascript Basics </b>
                  <p>
                    • Inline js
                    <br />
                    • Inetrnal js
                    <br />
                    • External js
                    <br />
                    • Javascript keywords
                    <br />
                    • Js Variables
                    <br />
                  </p>
                  <b>Js Data types</b>
                  <p>
                    • String
                    <br />
                    • Number
                    <br />
                    • Boolean
                    <br />
                    • Undefined
                    <br />
                    • Null
                    <br />
                    • Non-primitive datatypes
                    <br />
                  </p>
                  <b>Js Operators </b>
                  <p>
                  • Arithmatic operators<br />
                  • Assignment operators<br />
                  • Relational operators<br />
                  • Logical operators<br />
                  • Bitwise operators<br />
                  • Increment/ decrement operators<br />
                  • Equality operators<br />
                  • Conditional statements<br />
                  • Switch case<br />
                  </p>
                </div>
                <div>
                <b>Js Loops </b>
                  <p>
                  • For loop<br />
                  • While loop<br />
                  • Do-while loop<br />
                  • For-in loop<br />
                  • For-of loop<br />
                  </p>
                  <b>Js functions </b>
                  <p>
                  • Function syntax<br />
                  • Parameter passing function<br />
                  • Arrow Functions<br />
                  • IIFE<br />
                  • Anonymous function<br />
                  • Return keyword in function<br />
                  </p>
                  <b>Js Arrays  </b>
                  <p>
                  • Map<br />
                  • Filter & Find<br />
                  • Every & Some<br />
                  • Sort & Reverse<br />
                  • Concat & Join<br />
                  • Reduce & Includes<br />
                  • FindIndex & IndexOf<br />
                  • ForEach<br />
                  • Push & Unshift<br />
                  • Shift & Pop<br />
                  </p>
                </div>
                <div>
                <b>JS Objects  </b>
                  <p>
                  • Introduction to Object<br />
                  • Dot notation<br />
                  • Bracket notation<br />
                  • Date object<br />
                  • Math object<br />
                  • Array of Objects<br />
                  • Object methods<br />
                  • JS Type conversion<br />
                  </p>
                  <b>JS DOM </b>
                  <p>
                  • Introduction to DOM<br />
                  • DOM Elements<br />
                  • DOM events<br />
                  • DOM css<br />
                  • Event Listener<br />
                  • DOM Selectors<br />
                  • JS BOM<br />
                  </p>
                  <b>Js Arrays  </b>
                  <p>
                  • Map<br />
                  • Filter & Find<br />
                  • Every & Some<br />
                  • Sort & Reverse<br />
                  • Concat & Join<br />
                  • Reduce & Includes<br />
                  • FindIndex & IndexOf<br />
                  • ForEach<br />
                  • Push & Unshift<br />
                  • Shift & Pop<br />
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_ecmascript" id="ecmascript_link_syllabus">
            <details>
              <summary>Ecmascript</summary>
              <section className="fsd_ecmascript_section">
                <div>
                <b>ECMASCRIPT</b>
                  <p>
                  • Scope<br/>
                  • Template literals<br/>
                  • Destructuring<br/>
                  • Rest and spread operators<br/>
                  • Closure<br/>
                  • Hoisting<br/>
                  • Callback function<br/>
                  • Promises<br/>
                  • Async and await<br/>
                  • Timer functions<br/>
                  • Class & constructor<br/>
                  • Inheritance<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_jquary" id="jquary_link_syllabus">
            <details>
              <summary>Jquary</summary>
              <section className="fsd_jquary_section">
                <div>
                  <b>JQUERY </b>
                  <p>
                  • Introduction to jQuery<br/>
                  • jQuery Syntax<br/>
                  • Selectors<br/>
                  • Event Methods<br/>
                  • jQuery Effects<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; o Hide and Show<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  o Fading<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  o Sliding<br/>
                  • jQuery - css() Method<br/>
                  • jQuery - AJAX<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_reactjs" id="reactjs_link_syllabus">
            <details>
              <summary>Reactjs</summary>
              <section className="fsd_reactjs_section">
                <div>
                  <b>Frontend Framework REACTJS</b>
                  <p>
                  • Introduction to react<br/>
                  • React Installation<br/>
                  • Features of react<br/>
                  • Virtual Dom<br/>
                  • Explanation of all predefined <br/>&nbsp;&nbsp;&nbsp;components<br/>
                  • Node modules<br/>
                  • Types of Component<br/>
                  • Class and Functional Component<br/>
                  • State and props<br/>
                  • React router dom<br/>
                  </p>
                </div>
                <div>
                  <b>Life Cycle Methods</b>
                  <p>
                  • Mounting<br/>
                  • Updating<br/>
                  • Unmounting<br/>
                  </p>
                  <b>React Hooks </b>
                  <p>
                  • useState<br/>
                  • useEffect<br/>
                  • useNavigate<br/>
                  • useRef<br/>
                  </p>
                </div>
                <div>
                  <b>React API & methods</b>
                  <p>
                  • GET<br/>
                  • POST<br/>
                  • PATCH<br/>
                  • DELETE<br/>
                  • HOC of react<br/>
                  • React with Redux<br/>
                  • Material UI<br/>
                  • Real Time Project Using <br/>&nbsp;&nbsp;&nbsp;React Library<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_github" id="github_link_syllabus">
            <details>
              <summary>Github</summary>
              <section className="fsd_github_section">
                <div>
                  <b>Version control system GIT</b>
                  <p>
                  • Introduction to Git and Github<br/>
                  • Pushing data<br/>
                  • Committing changes<br/>
                  • Merge data<br/>
                  • Delete data<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_mongodb" id="mongodb_link_syllabus">
            <details>
              <summary>Mongodb</summary>
              <section className="fsd_mongodb_section">
                <div>
                  <b>Database MONGODB</b>
                  <p>
                  • Introduction<br/>
                  • Installation<br/>
                  • Data modeling<br/>
                  • Create & drop Database<br/>
                  • Create & drop collections<br/>
                  • Datatypes<br/>
                  • Insert documents<br/>
                  • Find documents<br/>
                  • Update Document<br/>
                  • Delete Document<br/>
                  • Queries<br/>
                  • Operators<br/>
                  • Selecting fields<br/>
                  • Projection<br/>
                  • Aggregation<br/>
                  • Limit, skip & Sorting Records<br/>
                  • Index<br/>
                  • Backup & Restore<br/>
                  • MongoDB atlas connectionbr<br/>
                  </p>
                </div>
              
              </section>
            </details>
          </div>
          <div className="fsd_nodejs" id="nodejs_link_syllabus">
            <details>
              <summary>NodeJS</summary>
              <section className="fsd_nodejs_section">
                <div>
                  <b>Backend NODEJS</b>
                  <p>
                  • Introduction to node.js<br/>
                  • Features of Node.js<br/>
                  • Advantages of Node.js<br/>
                  • Install Node.js on Windows<br/>
                  • Working in REPL<br/>
                  </p>
                  <b>File System </b>
                  <p>
                  • Synchronous vs Asynchronous<br/>
                  • Reading and Writing a File<br/>  &nbsp;&nbsp;&nbsp;synchronously<br/>
                  • Reading and Writing a file <br/> &nbsp;&nbsp;&nbsp;asynchronously<br/>
                  • Other IO Operations<br/>
                  </p>
                </div>
                <div>
                <b>Working with web server </b>
                <p>
                  • Creating a simple web server<br/>
                  • How request and response works<br/>
                  • Sending HTTP Requests<br/>

                  </p>
                  <b>Routing in Node.js </b>
                  <p>
                  • Creating a Router<br/>
                  • Sending HTML response for the<br/> &nbsp;&nbsp;&nbsp; Requested Route<br/>
                  • Setting headers in response<br/>
                  • Sending JSON response for the<br/> &nbsp;&nbsp;&nbsp;Requested Route<br/>
                  • Parsing URLs and Query Strings<br/>
                  </p>
                </div>
                <div>
                  <b>Architecture of Node.js</b>
                  <p>
                  • Event loops<br/>
                  • Event-Driven Architecture <br/>&nbsp;&nbsp;&nbsp;in Node.js<br/>
                  • Event Emitting and Handling<br/> &nbsp;&nbsp;&nbsp;custom event<br/>
                  </p>
                  <b>Streams in Node.js</b>
                  <p>
                  • Working with Streams in Node.js<br/>
                  • Reading and Writing to a Stream<br/>
                  </p>
                  <b>NPM </b>
                  <p>
                  • Installing Modules using NPM<br/>
                  • Global vs Local Installation<br/>
                  • Using package.json<br/>
                  • Creating a module<br/>
                  • Updating a Module<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_expressjs" id="expressjs_link_syllabus">
            <details>
              <summary>ExpressJS</summary>
              <section className="fsd_expressjs_section">
                <div>
                  <b>EXPRESSJS </b>
                  <p>
                  • Introduction to Express <br/>&nbsp;&nbsp; Framework<br/>
                  • Installing Express<br/>
                  • How do Web API works<br/>
                  • REST Architecture<br/>
                  • MVC Architecture<br/>
                  • Basic Routing<br/>
                  • Request and Response<br/>
                  </p>
                  <b>HTTP methods </b>
                  <p>
                  • Handling GET request<br/>
                  • Handling POST request<br/>
                  • Handling PATCH request<br/>
                  • Handling DELETE request<br/>
                  </p>
                </div>
                <div>
                <b>Integration with MongoDB  </b>
                  <p>
                  • Introduction to MongoDB<br/>
                  • Accessing MongoDB Server<br/>
                  • Connecting MongoDB with ExpressJS<br/>
                  • Creating Schema and model<br/>
                  • Writing Data to MongoDB <br/>&nbsp;&nbsp; Server by using Express<br/>
                  • Querying Data from MongoDB <br/>&nbsp;&nbsp; Server by using Express<br/>
                  • Updating Data in MongoDB by <br/>&nbsp;&nbsp; using Express<br/>
                  • Deleting Data in MongoDB <br/>&nbsp;&nbsp; by using Express<br/>
                  • Filtering ,Sorting and<br/>&nbsp;&nbsp;Pagination<br/>
                  • Error Handling in ExpressJs<br/>
                  </p>
                </div>
                <div>
                  <b>Middleware in Express JS</b>
                  <p>
                  • Creating a custom middleware<br/>
                  • Using third-party middleware<br/>
                  </p>
                  <b>Security</b>
                  <p>
                  • Password encryption<br/>
                  • Introduction to JWT<br/>
                  • Authentication using JWT<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
          <div className="fsd_projecthelp" id="projectusingmern_link_syllabus">
            <details>
              <summary>Project using MERN</summary>
              <section className="fsd_projecthelp_section">
                <div>
                  <b>Project using MERN</b>
                  <p>
                  • Facebook sign up & Login<br/>
                  • Creating website for College<br/>
                  • Creating website for Hospital<br/>
                  • Tourism website creation<br/>
                  • Creating clone website of innovaskill.in<br/>
                  </p>
                </div>
              </section>
            </details>
          </div>
        </section>
        </section>
        <section className="fsd_section4">
          <div className="fsd_section4content">
          <h3>Getting Your Dream Job Can Be An Exciting And Challenging Journey : </h3>
          <p>By fulfilling these roles and responsibilities, a training institute demonstrates its commitment to student success and contributes to the overall advancement of individuals within their chosen fields. Students should expect to receive comprehensive support and resources that empower them to achieve their educational and career aspirations.
          </p>
          <h3> Innovaskill Technologies provide best opportunities in various sector such as</h3>
          <p>
          • Electronic Design Automation<br/>
          • Industrial Automation<br/>
          • Information Security<br/>
          • Software Development<br/>
          • Civil and Mechanical Design<br/>
          • Computerised Accounting<br/>
          • Digital Marketing<br/>
          • And many more<br/>
          </p>
          <p> Innovaskill is eagerly following up the current requirement of each client and noted the uniquenes, so we provide services based on individual needs and requirements for young talents under the umbrella of tech and management profession to provide accurate resolutions. We serves our clients the best to provide customized solutions by considering Clients’ corporate culture, management style and philosophy. We work for almost all the sectors and our services are available across nation (PAN) For any kind of Manpower Requirements please feel free to reach out to us by filling the details below and we will contact you soon.</p>
          </div>
          <div className="fsd_section4imgdiv">
          <img src={GettingYourDreamJob} ></img>
          </div>
        </section><hr className="fsd_hr"/>
        <section className="fsd_section5">
          <h3>Innovaskill Technologies In Association with :</h3><br/>
          <section>
            <img src={companylogo} />
          </section>
        </section>
        <section className="fsd_section6">
          <h3>Our Clients / Our Student Working Companyies :</h3>
          <img src={OurStudentWorkingCompanyies} ></img>
        </section>
        <h3 className="fsd_section7h3">Innovaskill Certification :</h3>
        <section className="fsd_section7">
          <div>
            <h5>Course Complete Certificate</h5>
            <img src={course_certificate} className="fsd_section7img1"></img>
          </div>
          <div>
            <h5>Internship Certificate</h5>
            <img src={internship_certificate} className="fsd_section7img2"></img>
          </div>
          {/* <div>
            <b>Workshop Certificate</b><br/>
            <img src={workshop_certificate} className="fsd_section7img3"></img>
          </div> */}
        </section>
      
    </>
  );
}
