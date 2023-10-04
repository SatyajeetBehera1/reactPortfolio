import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <div>
      <div className="flex justify-center items-center bg-transparent">
        <div className="container mx-auto my-4 px-4 lg:px-20">
      
          <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-40 lg:pr-60 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">Send me a <br /> message</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="First Name*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text" placeholder="Last Name*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email" placeholder="Email*" />
              <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number" placeholder="Phone*" />
              </div>
              <div className="my-4">
                <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                            focus:outline-none focus:shadow-outline">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        
      </div>
      
      </div>
  //   <section className="bg-transparent flex justify">
  //   <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
  //     <div className="py-6 md:py-0 md:px-6">
  //       <h1 className="text-4xl font-bold">Get in touch</h1>
  //       <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
  //       <div className="space-y-4">
  //         <p className="flex items-center">
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
  //             <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
  //           </svg>
  //           <span>Fake address, 9999 City</span>
  //         </p>
  //         <p className="flex items-center">
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
  //             <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
  //           </svg>
  //           <span>123456789</span>
  //         </p>
  //         <p className="flex items-center">
  //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
  //             <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
  //             <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
  //           </svg>
  //           <span>contact@business.com</span>
  //         </p>
  //       </div>
  //     </div>
  //        <div>
  //        <div className="flex justify-center items-center bg-transparent">
  //          <div className="container mx-auto my-4 px-4 lg:px-20">
      
  //            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
  //              <div className="flex">
  //                <h1 className="font-bold uppercase text-5xl">Send me a <br /> message</h1>
  //              </div>
  //              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
  //                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
  //                    type="text" placeholder="First Name*" />
  //                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
  //                    type="text" placeholder="Last Name*" />
  //                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
  //                    type="email" placeholder="Email*" />
  //                <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
  //                    type="number" placeholder="Phone*" />
  //                </div>
  //                <div className="my-4">
  //                  <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
  //                </div>
  //                <div className="my-2 w-1/2 lg:w-1/4">
  //                  <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
  //                              focus:outline-none focus:shadow-outline">
  //                    Send Message
  //                  </button>
  //                </div>
  //              </div>
  //            </div>
        
  //        </div>
      
  //        </div>
  //   </div>
  // </section>
  );
}

export default Contact;

  {/* <form novalidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
    <label className="block">
      <span className="mb-1">Full name</span>
      <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" />
    </label>
    <label className="block">
      <span className="mb-1">Email address</span>
      <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800" data-temp-mail-org="0" />
    </label>
    <label className="block">
      <span className="mb-1">Message</span>
      <textarea rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri dark:bg-gray-800"></textarea>
    </label>
    <button type="button" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri">Submit</button>
  </form> */}