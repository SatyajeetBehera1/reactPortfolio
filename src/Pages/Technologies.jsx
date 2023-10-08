import React from "react";
import { techStackDetails } from "../Details";
import { FaJava, FaHtml5 } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    bootstrap,
    vscode,
    git,
    github,
    npm,
    postman,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center " >
        LANGUAGES
        </h1>
        {/* <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold" style="display: flex;align-items: center;justify-content: center;">
            LANGUAGES
        </h1> */}
        {/* <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p> */}
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6" style={{display:"flex", justifyContent:"space-evenly"}}>
            <img src={html} title="html" alt="" />
            <img src={css} title="CSS" alt="" />
            <img src={js} title="JavaScript" alt="" />
            <img src={react} title="React" alt="" />
            <img src={bootstrap} title="Bootstrap" alt="" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
        LIBRARIES & FRAMEWORKS
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6"style={{display:"flex", justifyContent:"space-evenly"}}>
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        {/* <img src={figma} title="Figma" alt="Figma" /> */}
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
        OTHER SKILLS
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 " style={{display:"flex", justifyContent:"space-evenly"}}>
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" />
        <img src={github} title="Github" alt="Github" />
        {/* <img src={figma} title="Figma" alt="Figma" /> */}
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;
