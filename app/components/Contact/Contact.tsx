import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-black text-white py-12">
      <div className="px-5 space-y-3">
        <p className="text-white text-4xl md:text-5xl">Get In Touch</p>
        <p className="text-white text-lg mt-4 secondary-font">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className="flex">
          <span className="bg-purple-700">Email:</span>
          <p>mekdes.habte@gmail.com</p>
        </div>
        <div className="flex">
          <span className="bg-purple-700">Phone:</span>
          <p> +251 911 11 22 33</p>
        </div>
        <div className="flex">
          <span className="bg-purple-700">Location:</span>
          <p> Addis Ababa, Ethiopia</p>
        </div>
      </div>
      <div>
        <form className="w-3/4">
            <p>Name</p>
            <input className="w-full bg-gray-700 rounded-xl h-10 p-2" type="text" name="" id="" placeholder="Full Name" required/>
            <p>Email</p>
            <input className="w-full bg-gray-700 rounded-xl h-10 p-2" type="email" name="" id="" placeholder="example@gmail.com" required/>
            <p>Message</p>
            <textarea className="w-full bg-gray-700 rounded-xl p-2" name="" id="" cols={30} rows={10} placeholder="Message" required></textarea>

            <input type="submit" className="w-full bg-purple-700 rounded-xl h-10 p-2 text-center text-white" name="" id=""/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
