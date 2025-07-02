"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPaintbrush } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section id="about" ref={ref} className="justify-center my-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full justify-center"
        >
          <h1 className="lg:text-5xl text-4xl text-center">About Me</h1>
          <h1 className="text-2xl text-center secondary-font py-3 mb-3">
            I'm <b className="secondary-font">Mekdes</b> an artist based in
            Ethiopia
          </h1>

          <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-[90%]">
            <div className="secondary-font lg:justify-center lg:iems-center text-center">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              nobis tenetur, dignissimos voluptatibus veniam ea provident ullam
              laborum deleniti aliquam quos architecto omnis nisi harum labore
              praesentium vel repellendus quisquam! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Facere nobis tenetur, dignissimos
              voluptatibus veniam ea provident ullam laborum deleniti aliquam
              quos architecto omnis nisi harum labore praesentium vel
               repellendus quisquam!</p>

             {/* <Image className="imageTag" src={"/pictures/3.jpg"}/> */}
            </div>
            <div className="px-6">
              <div className="bg-black border-b border-white py-4 text-center">
                <span className="text-3xl text-purple-700">100+</span>
                <p className="secondary-font text-white">
                  projects done for clients
                </p>
              </div>
              <div className="bg-black border-t border-white py-4 text-center">
                <span className="text-3xl text-purple-700">50+</span>
                <p className="secondary-font text-white">Exhibitions shown</p>
              </div>
              <p className="text-2xl pt-4 text-center">What I Do?</p>
              <div className="grid grid-cols-[1fr_3fr] h-32 py-3">
                <div className="flex items-center justify-center">
                  <MdDesignServices className="text-8xl" />
                </div>
                <div className=" px-3">
                  <p className="text-xl">Designer</p>
                  <p className="secondary-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit in possimus.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-[1fr_3fr] h-32 py-3">
                <div className="flex items-center justify-center">
                  <FaPaintbrush className="text-8xl" />
                </div>
                <div className=" px-3">
                  <span className="text-xl">Artist</span>
                  <p className="secondary-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugit in possimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
