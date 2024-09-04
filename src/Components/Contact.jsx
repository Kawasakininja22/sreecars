

import React from 'react';
import './Contact.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdMessage } from "react-icons/md";

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7d447c7c-abd3-46f5-8ee3-5e375cffb756");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className= 'z-[1] ' id='contact'>
       <div className='container flex flex-wrap py-10 md:py-0 justify-center '>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 ml-0 md:ml-10 mt-10 md:mt-20 bg-whit  items-center'>
        
        {/* Form */}
        <form className='flex-1' id='form' onSubmit={onSubmit}>
          <div className='p-10 w-full md:w-3/4 ml-0 md:ml-44  '>
            <div className="relative mb-3">
              <span><FaUser /></span>
              <input 
                className="block w-full bg-gray-200 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white"
                type="text" 
                placeholder="Name"
                name='name' 
              />
            </div>

            <div className="relative mb-3">
              <span><FaPhoneAlt /></span>
              <input 
                className="block w-full bg-gray-200 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white"
                type="text" 
                name='contact'
                placeholder="Contact"  required
              /> 
            </div>

            <div className="relative mb-3">
              <span><IoMdMail /></span>
              <input 
                className="block w-full bg-gray-200 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white"
                type="text" 
                placeholder="Mail Id"
                name='Mailid'  required
              />
            </div>

            <div className="relative mb-3">
              <span><MdMessage /></span>
              <input 
                className="block    w-full first-letter:w-full bg-gray-200 text-gray-700 border  rounded py-5 px-11 leading-tight focus:outline-none focus:bg-white"
                type="text" 
                placeholder="Message"
                name='message'
                required
              />
            </div>

            <button className='w-full bg-black   text-white py-2 rounded mt-3' type='submit'>
              Submit
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className='flex-1 w-full md:w-72 h-60 bg-white p-6 -mt-10'>
          <h1 className='text-xl font-semibold mb-4 text-center'>Contact Information</h1>
          <div className='flex flex-col'>
            <div className='flex items-center mb-3'>
              <FaPhoneAlt className='text-red-500 mr-3' />
              <span>  +919842763438  +919943563438</span>
            </div>
            <div className='flex items-start'>
              <FaMapMarkerAlt className='text-red-500 mr-3 mt-1 text-2xl' />
              <span>
                41/1, Tamil Sangam Rd, opposite of Tamil sangam mandapam, Sankar Nagar, Salem, Tamil Nadu 636007
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Contact;
