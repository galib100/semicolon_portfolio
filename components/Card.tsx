'use client'
import { motion } from 'framer-motion';

const Card = ({ title, description }:any) => {

    return (
      <div className='my-5'>
        <motion.section
        className="flex flex-col items-center justify-center  text-center"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

     
      <div className="bg-fuchsia-950 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
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
  