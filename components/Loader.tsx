import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-1 flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="border-t-8 border-purple-700 rounded-full animate-spin h-16 w-16"></div>
    </motion.div>
  );
};

export default Loader;
