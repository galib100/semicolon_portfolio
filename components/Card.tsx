'use client'
import { motion } from 'framer-motion';

const Card = ({ title, description }:any) => {

    return (
      <div className='my-5'>
        <motion.section
        className="bg-purple-950  p-6 rounded-lg shadow-md hover:shadow-lg transition duration-500"
        whileHover={{ scale: 1.20}}
      >
      <div className="p-6 rounded-lg">
        <div className="flex items-center mb-4">
          <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
            
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <p>{description}</p>
      </div>
      </motion.section>
      </div>
    );
  };
  
  export default Card;
  