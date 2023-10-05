import React from "react";
import { contactDetails } from "../Details";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="antialiased">
      <div className="flex w-full min-h-[50%] justify-center item-center">
        <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-white w-full max-w-4xl p-8 rounded-xl shadow-lg text-black sm:p-12 mb-10">
          <div className="flex flex-col space-y-8 justify-between">
            {/* <div> */}
              <div>
                <h1 className="font-bold text-4xl tracking-wide">Contact us</h1>
                <p className="pt-2 text-black text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  repellendus velit ipsum unde rerum adipisci necessitatibus.
                  Nemo cum consequuntur distinctio. Officiis enim quia vero
                  reiciendis, rem iusto ducimus possimus atque.
                </p>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="inline-flex space-x-2 item-center">
                  <BiSolidPhoneCall
                    className="text-xl"
                    style={{ marginTop:"4px" }}
                  />
                  <span>{phone}</span>
                </div>
                <div>
                  <div className="inline-flex space-x-2 item-center">
                    <IoMdMail
                      className="text-xl"
                      style={{ marginTop:"4px" }}
                    />
                    <span>{email}</span>
                  </div>
                </div>
                <div>
                  <div className="inline-flex space-x-2 item-center">
                    <FaLocationDot
                      className="text-xl"
                      style={{ marginTop:"4px" }}
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
            {/* </div> */}
          </div>
          <div className="bg rounded-xl shadow-lg p-8 text-gray-600">
            <form
              action=""
              flex-col
              className="flex flex-col space-y-4 md:w-80"
            >
              <div>
                <label htmlFor="" className="text-sm ">
                  Your Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 px-2 mt-2 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm ">
                  Email Address
                </label>

                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email Address"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 px-2 mt-2 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm ">
                  Message
                </label>

                <textarea
                  rows={4}
                  name=""
                  id=""
                  placeholder="Type your meaage here"
                  className="ring-1 ring-gray-300 w-full rounded-md px-4 px-2 mt-2 outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              {/* <div></div> */}
              <button className="inline-block self-end bg-black text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
