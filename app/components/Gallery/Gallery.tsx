"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const images = [
  { src: "/pictures/2.jpg", alt: "Artwork 1", width: 400, height: 300 },
  { src: "/pictures/3.jpg", alt: "Artwork 2", width: 400, height: 400 },
  { src: "/pictures/4.jpg", alt: "Artwork 3", width: 400, height: 500 },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-12 px-32 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Featured Artworks</h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0 auto-rows-[50px]">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg"
            style={{ gridRowEnd: `span ${Math.ceil(image.height / 50)}` }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={image.height}
              width={image.width}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      {/* "See More" Link */}
      <div className="mt-8">
        <Link href="/gallery">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-lg text-blue-600 font-semibold underline"
          >
            See More
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
