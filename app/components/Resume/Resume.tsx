import React from "react";
import "../../globals.css";
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <div className="flex justify-center lg:justify-normal lg:text-left text-center lg:block w-screen lg:px-32 text-white bg-black pb-5">
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-4 w-[90%] lg:w-full"
    >
      <h1 className="text-5xl text-center pt-3">Resume</h1>
      <h4 className="text-2xl py-3"> Education</h4>
      <div className="border-y border-black py-3 my-2">
        <h5 className="text-xl bg-purple-700 w-max">Education 1</h5>
        <p className="secondary-font px-2 text-xl font-bold">
          August 3 – September 7, 2024
        </p>
        <p className="secondary-font px-2">
          Explore the fusion of traditional and digital mediums in this hands-on
          course. From ink and watercolor to digital overlays, you’ll learn how
          to build complex, layered compositions that tell powerful visual
          stories.
        </p>
      </div>

      <div className="border-y border-black py-3 my-2">
        <h5 className="text-xl bg-purple-700 w-max">Education 2</h5>
        <p className="secondary-font px-2 text-xl font-bold">
          August 3 – September 7, 2024
        </p>
        <p className="secondary-font px-2">
          Explore the fusion of traditional and digital mediums in this hands-on
          course. From ink and watercolor to digital overlays, you’ll learn how
          to build complex, layered compositions that tell powerful visual
          stories.
        </p>
      </div>

      <div className="border-y border-black py-3 my-2">
        <h5 className="text-xl bg-purple-700 w-max">Education 3</h5>
        <p className="secondary-font px-2 text-xl font-bold">
          August 3 – September 7, 2024
        </p>
        <p className="secondary-font px-2">
          Explore the fusion of traditional and digital mediums in this hands-on
          course. From ink and watercolor to digital overlays, you’ll learn how
          to build complex, layered compositions that tell powerful visual
          stories.
        </p>
      </div>
    </motion.div>
    </div>
  );
};

export default Resume;
