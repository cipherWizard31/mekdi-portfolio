"use client";

import React from 'react'
import { motion } from "framer-motion";

const gallery = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className=""
    >
        gallery
    </motion.div>
  )
}

export default gallery