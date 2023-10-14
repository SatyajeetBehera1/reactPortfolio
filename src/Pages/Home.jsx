import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

import { TypeAnimation } from 'react-type-animation';

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  const butt = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        butt.current,
        {
          x: "-100%",
          delay: 0.2,
          opacity: 0,
          duration: 3,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,{/*👋*/}<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Backend Developer",
              1000,
              "Software Developer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{ fontSize: "1rm" }}
          />
               
        </h2>

        <a href='https://drive.google.com/file/d/1Du91dkFeFgSJKhHDosUIZxicT6TUV8-0/view?usp=drive_link' target='_blank' >
    <button type="button" class="text-white bg-gradient-to-br from-blue-500 to-purple-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-5
    " ref={butt}>Resume</button></a>

      </div>
      
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto" src={img} alt="Satyajeet Behera" />
      </div>
      
    </main>
  );
}

export default Home;
