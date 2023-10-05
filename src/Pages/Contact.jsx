import React from "react";
import { contactDetails } from "../Details";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
function Contact() {
  const { email, phone } = contactDetails;
  return (
    <div className="flex w-full min-h-screen justify-center item-center ">
      <div className="flex flex-col space-y-6 bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg text-black mb-6">
        <div className="flex flex-col space-y-8 justify-between">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact us</h1>
            <p className="pt-2 text-black text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
              repellendus velit ipsum unde rerum adipisci necessitatibus. Nemo
              cum consequuntur distinctio. Officiis enim quia vero reiciendis,
              rem iusto ducimus possimus atque.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <div className="inline space-x-2 item-center">
              <BiSolidPhoneCall
                className="text-xl"
                style={{ display: "inline" }}
              />
              <span>+91 6372889063</span>
            </div>
            <div>
              <div className="inline space-x-2 item-center">
                <IoMdMail className="text-xl" style={{ display: "inline" }} />
                <span>jagajajpur3@gmail.com</span>
              </div>
            </div>
            <div>
              <div className="inline space-x-2 item-center">
                <FaLocationDot
                  className="text-xl"
                  style={{ display: "inline" }}
                />
                <span>Talcher, Angul, Odisha, India</span>
              </div>
            </div>
            <div className="flex space-x-4 text-3xl">
              <a href="https://www.instagram.com/satyajeet_behera_7/">
                <GrInstagram />
              </a>
              <a href="https://www.linkedin.com/in/satyajeet-behera/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/SatyajeetBehera1">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="bg-black rounded-xl shadow-lg p-8">
            <form action="">
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
