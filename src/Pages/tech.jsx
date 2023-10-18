import React from "react";
import { techStackDetails } from "../Details";
import "./descriptions.css";

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

  const lang = [
    {
      id: 1,
      icon: html,
      name: "html",
    },
    {
      id: 2,
      icon: css,
      name: "css",
    },
    {
      id: 3,
      icon: js,
      name: "JavaScript",
    },
    {
      id: 4,
      icon: cplus,
      name: "c++",
    },
    {
      id: 5,
      icon: java,
      name: "java",
    },
  ];

  const lib = [
    {
      id: 1,
      icon: bootstrap,
      name: "bootstrap",
    },
    {
      id: 2,
      icon: react,
      name: "React",
    },
    {
      id: 3,
      icon: nodejs,
      name: "nodejs",
    },
    {
      id: 4,
      icon: express,
      name: "express",
    },
    {
      id: 5,
      icon: tailwind,
      name: "Tailwind",
    },
  ];

  const db = [
    {
      id: 1,
      icon: mongodb,
      name: "MongoDB",
    },
    {
      id: 2,
      icon: sql,
      name: "SQL",
    },
  ];

  const other = [
    {
      id: 1,
      icon: vscode,
      name: "VS code",
    },
    {
      id: 2,
      icon: git,
      name: "git",
    },
    {
      id: 3,
      icon: github,
      name: "Github",
    },
    {
      id: 4,
      icon: npm,
      name: "NPM",
    },
    {
      id: 5,
      icon: postman,
      name: "Postman",
    },
  ];
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          LANGUAGES
        </h1>
      </section>
      <div className="section section__descriptions">
        {lang.map(({ id, icon, name }) => (
          <div key={id} className="card">
            <div className="description__card-icon">
              <img src={icon} title={name} alt={name} />
            </div>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          LIBRARIES & FRAMEWORKS
        </h1>
      </section>
      <div className="section section__descriptions">
        {lib.map(({ id, icon, name }) => (
          <div key={id} className="card">
            <div className="description__card-icon">
              <img src={icon} title={name} alt={name} />
            </div>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          DataBase
        </h1>
      </section>
      <div className="section section__descriptions">
        {db.map(({ id, icon, name }) => (
          <div key={id} className="card">
            <div className="description__card-icon">
              <img src={icon} title={name} alt={name} />
            </div>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold flex justify-center ">
          OTHER
        </h1>
      </section>
      <div className="section section__descriptions">
        {other.map(({ id, icon, name }) => (
          <div key={id} className="card">
            <div className="description__card-icon">
              <img src={icon} title={name} alt={name} />
            </div>
            <h1>{name}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Technologies;
