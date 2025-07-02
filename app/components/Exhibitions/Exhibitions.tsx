import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';


const Exhibitions = () => {
  return (
    <div id="exhibitions" className="flex justify-center">
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-3/4"
    >
      <p className="font bold text-5xl mt-4 text-center">Exhibitions</p>
      <div className="grid grid-cols-1 justify-center">

      <div className="flex justify-center items-center flex-wrap gap-4 my-4 w-full">
      <Link
        href={"#"}
        className="flex w-[900px] flex-col items-center bg-white border border-gray-200 rounded-xl shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full roundedS h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/pictures/5.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Echoes of Silence
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold secondary-font">
          June 14 – July 20, 2025
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 secondary-font">
          A hauntingly intimate collection exploring the quiet resilience of solitude. Through abstract textures and muted tones, this exhibition invites viewers into a meditative space where silence speaks volumes.
          </p>
        </div>
      </Link>
      </div>



      
      <div className="flex justify-center items-center flex-wrap gap-4 my-4">
      <Link
        href={"#"}
        className="flex w-[900px] flex-col items-center bg-white border border-gray-200 rounded-xl shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full roundedS h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/pictures/6.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Fragments of Light
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold secondary-font">
          August 3 – September 1, 2025
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 secondary-font">
          An exploration of light as both subject and medium. This exhibit features a series of mixed-media installations that bend, reflect, and refract natural light, turning everyday materials into ethereal moments.
          </p>
        </div>
      </Link>
      </div>



      <div className="flex justify-center items-center flex-wrap gap-4 my-4">
      <Link
        href={"#"}
        className="flex w-[900px] flex-col items-center bg-white border border-gray-200 rounded-xl shadow-sm md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full roundedS h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/pictures/7.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Urban Mythologies
          </h5>
          <p className="mb-3 text-gray-700 dark:text-gray-400 font-bold secondary-font">
          September 15 – October 22, 2025
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 secondary-font">
          A bold and contemporary take on ancient narratives, reimagined through graffiti, collage, and digital print. This exhibition weaves modern city life with timeless myths to explore identity, culture, and chaos.
          </p>
        </div>
      </Link>
      </div>




    </div>
    </motion.div>
    </div>
  );
};

export default Exhibitions;
