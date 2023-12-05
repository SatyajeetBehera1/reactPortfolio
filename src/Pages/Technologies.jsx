import React from "react";
import { techStackDetails } from "../Details";

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
    java,
    cplus,
    nodejs,
    express,
    tailwind,
    mongodb,
    sql,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          LANGUAGES
        </h1>
        {/* <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold" style="display: flex;align-items: center;justify-content: center;">
            LANGUAGES
        </h1> */}
        {/* <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p> */}
      </section>
      <section className="grid grid-cols-4 items-center gap-10 pt-6 space-evenly item-center">
        {/* <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6" style={{display:"flex", justifyContent:"space-evenly"}}> */}
        <div className="flex items-center justify-center">
          <img src={html} title="html" alt="HTML" />
        </div>
        <div className="flex items-center justify-center">
          <img src={css} title="CSS" alt="CSS" />
        </div>
        <div className="flex items-center justify-center">
          <img src={js} title="JavaScript" alt="javascript" />
        </div>
        <div>
          <img src={cplus} title="cplus" alt="cplus" />
        </div>
        <div className="flex items-center justify-center col-start-2 col-span-2">
          <img src={java} title="java" alt="java" />
        </div>
      </section> 
      {/* <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          LIBRARIES & FRAMEWORKS
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={react} title="React" alt="React" />
        <img src={nodejs} title="node.js" alt="node.js" />
        <img src={express} title="express.js" alt="express.js" />
      </section> */}
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          LIBRARIES & FRAMEWORKS
        </h1>
      </section>
      <section className="grid grid-cols-4 items-center gap-10 pt-6 space-evenly item-center">
        <div className="flex items-center justify-center">
          <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        </div>
        <div className="flex items-center justify-center">
          <img src={react} title="React" alt="React" />
        </div>
        <div className="flex items-center justify-center">
          <img src={nodejs} title="node.js" alt="node.js" />
        </div>
        <div>
          <img src={express} title="express.js" alt="express.js" />
        </div>
        <div className="flex items-center justify-center col-start-2 col-span-2">
          <img src={tailwind} title="Tailwind" alt="Tailwind" />
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          DataBase
        </h1>
      </section>
      <section className="grid grid-cols-2 items-center gap-10 pt-6 space-evenly item-center">
        <div className="flex items-center justify-center">
          <img src={mongodb} title="MongoDB" alt="MongoDB" />
        </div>
        <div className="flex items-center justify-center">
          <img src={sql} title="SQL" alt="SQL" />
        </div>
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          OTHER SKILLS
        </h1>
      </section>
      <section
        className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6 "
        style={{ display: "flex", justifyContent: "space-evenly" }}
      > 
        <img src={vscode} title="Visual Studio Code" alt="" />
        <img src={git} title="Git" alt="Git" /> 
        <img src={github} title="Github" alt="Github" />
        <img src={npm} title="NPM" alt="NPM" />
        <img src={postman} title="Postman" alt="Postman" />
      </section>
    </main>
  );
}

export default Technologies;