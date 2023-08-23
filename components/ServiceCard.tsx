import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="bg-purple-950  p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-xl font-bold mb-2">{service.title}</h2>
      <p className="text-lime-100">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
