"use client"
import React from 'react'
import { motion } from 'framer-motion';
const page = () => {
  return (
    <div>
        <motion.section
        className="flex flex-col items-center justify-center h-screen text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Welcome to Semicolon</h1>
        <p className="text-gray-700 mb-8">
          Your Trusted Partner in Cybersecurity Solutions
        </p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </motion.button>
      </motion.section>

    </div>
  )
}

export default page