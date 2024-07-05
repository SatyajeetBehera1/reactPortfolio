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
    <main className="container mx-auto max-w-screen-xl pt-10 pb-20">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100">
          LANGUAGES
        </h1>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="flex items-center justify-center">
          <img
            src={html}
            title="HTML"
            alt="HTML"
            className="w-32 h-32 border-4 rounded-lg border-gray-300 p-2 transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={css}
            title="CSS"
            alt="CSS"
            className="w-32 h-32 border-4 rounded-lg border-purple-300 p-2 transition duration-300 ease-in-out transform hover:border-purple-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={js}
            title="JavaScript"
            alt="JavaScript"
            className="w-32 h-32 border-4 rounded-lg border-yellow-300 p-2 transition duration-300 ease-in-out transform hover:border-yellow-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={java}
            title="Java"
            alt="Java"
            className="w-32 h-32 border-4 rounded-lg border-red-300 p-2 transition duration-300 ease-in-out transform hover:border-red-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={cplus}
            title="C++"
            alt="C++"
            className="w-32 h-32 border-4 rounded-lg border-green-300 p-2 transition duration-300 ease-in-out transform hover:border-green-500 hover:scale-105"
          />
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center">
          LIBRARIES & FRAMEWORKS
        </h1>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="flex items-center justify-center">
          <img
            src={bootstrap}
            title="Bootstrap"
            alt="Bootstrap"
            className="w-32 h-32 border-4 rounded-lg border-blue-300 p-2 transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={react}
            title="React"
            alt="React"
            className="w-32 h-32 border-4 rounded-lg border-indigo-300 p-2 transition duration-300 ease-in-out transform hover:border-indigo-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={nodejs}
            title="Node.js"
            alt="Node.js"
            className="w-32 h-32 border-4 rounded-lg border-teal-300 p-2 transition duration-300 ease-in-out transform hover:border-teal-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={express}
            title="Express.js"
            alt="Express.js"
            className="w-32 h-32 border-4 rounded-lg border-pink-300 p-2 transition duration-300 ease-in-out transform hover:border-pink-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={tailwind}
            title="Tailwind CSS"
            alt="Tailwind CSS"
            className="w-32 h-32 border-4 rounded-lg border-gray-400 p-2 transition duration-300 ease-in-out transform hover:border-gray-600 hover:scale-105"
          />
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center">
          DATABASE
        </h1>
      </section>
      <section className="grid grid-cols-2 gap-8 mt-8">
        <div className="flex items-center justify-center">
          <img
            src={mongodb}
            title="MongoDB"
            alt="MongoDB"
            className="w-32 h-32 border-4 rounded-lg border-yellow-300 p-2 transition duration-300 ease-in-out transform hover:border-yellow-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={sql}
            title="SQL"
            alt="SQL"
            className="w-32 h-32 border-4 rounded-lg border-orange-300 p-2 transition duration-300 ease-in-out transform hover:border-orange-500 hover:scale-105"
          />
        </div>
      </section>
      <section className="mt-12">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center">
          OTHER SKILLS
        </h1>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        <div className="flex items-center justify-center">
          <img
            src={vscode}
            title="Visual Studio Code"
            alt="Visual Studio Code"
            className="w-32 h-32 border-4 rounded-lg border-purple-300 p-2 transition duration-300 ease-in-out transform hover:border-purple-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={git}
            title="Git"
            alt="Git"
            className="w-32 h-32 border-4 rounded-lg border-green-300 p-2 transition duration-300 ease-in-out transform hover:border-green-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={github}
            title="GitHub"
            alt="GitHub"
            className="w-32 h-32 border-4 rounded-lg border-gray-300 p-2 transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={npm}
            title="NPM"
            alt="NPM"
            className="w-32 h-32 border-4 rounded-lg border-red-300 p-2 transition duration-300 ease-in-out transform hover:border-red-500 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src={postman}
            title="Postman"
            alt="Postman"
            className="w-32 h-32 border-4 rounded-lg border-blue-300 p-2 transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105"
          />
        </div>
      </section>
    </main>
  );
}

export default Technologies;
