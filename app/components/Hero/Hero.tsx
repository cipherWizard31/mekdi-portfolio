import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'  
import Link from 'next/link'
import "../../globals.css"

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="md:w-1/2 text-center md:text-left"
    >
      <p className='text-gray-800 text-lg'>Hello,</p>
      <p className="lg:text-7xl text-4xl font-bold text-purple-700">
        I'm Mekdes Habte
      </p>
      <h1 className='text-3xl secondary-font py-2'>Artist/Designer</h1>
      <p className="mt-4 text-gray-600 text-lg secondary-font">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, rem
        voluptatum. Fugiat sint quisquam, molestiae cum et, dolores veniam
        saepe consequuntur labore, ipsa nam voluptates iure eius nostrum
        explicabo sequi.
      </p>
      {/* <div className="social-media flex space-x-6 pt-2">
        <FaTelegram className='text-3xl hover:text-blue-400 duration-300' />
        <FaFacebook className='text-3xl hover:text-blue-500 duration-300' />
        <FaWhatsapp className='text-3xl hover:text-green-500 duration-300' />
      </div> */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg"
      >
        <Link href={"/about"} className='rounded-lg'>
        Learn More
        </Link>
      </motion.button>
    </motion.div>

    {/* Right Image */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
    >
      <Image
        src="/pictures/1.jpg" // Replace with your actual image path
        alt="Landing Image"
        width={500}
        height={500}
        className="rounded-xl shadow-lg"
      />
    </motion.div>
  </section>
  )
}

export default Hero