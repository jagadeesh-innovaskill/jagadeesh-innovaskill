import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import Navigation from "../../../nav/navigation";


import blog_sec2img1 from "./blog_image/blog_sec2img1.jpg";
// import blog_sec2img2 from "./Images/blog_sec2img1.jpg";
// import blog_sec2img3 from "./Images/blog_sec2img1.jpg";
// import blog_sec2img4 from "./Images/blog_sec2img1.jpg";

import blog_banner from "./blog_image/blog_backround.png";

export default function App() {
  return (
    <div>
      <Navigation />
      <section className="blog_section1">
        <img src={blog_banner}></img>
      </section>
      
      <section className="blog_section2">
      <div className="blog_sec2div">
        <img src={blog_sec2img1} />
        <h3>Diploma in Embedded</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem possimus sequi atque temporibus, doloremque nisi voluptates nobis in. Blanditiis, officiis. Animi id nobis vero, totam rem assumenda corrupti labore.</p>
      </div>
      <div className="blog_sec2div">
        <img src={blog_sec2img1} />
        <h3>Diploma in Embedded</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem possimus sequi atque temporibus, doloremque nisi voluptates nobis in. Blanditiis, officiis. Animi id nobis vero, totam rem assumenda corrupti labore.</p>
      </div>
      <div className="blog_sec2div">
        <img src={blog_sec2img1} />
        <h3>Diploma in Embedded</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio autem possimus sequi atque temporibus, doloremque nisi voluptates nobis in. Blanditiis, officiis. Animi id nobis vero, totam rem assumenda corrupti labore.</p>
      </div>
      </section>
    </div>
  );
}
