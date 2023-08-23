'use client'
import { motion } from 'framer-motion';
import ServiceCard from '../../components/ServiceCard'

const ServicesPage = () => {
  const services = [
    {
      title: 'Network Security',
      description:
        'Protect your digital assets and sensitive information from cyber threats with our advanced network security solutions.',
    },
    {
      title: 'Penetration Testing',
      description:
        'Identify vulnerabilities in your systems and applications through thorough penetration testing and security assessments.',
    },
    {
      title: 'Incident Response',
      description:
        'Rapidly respond to and recover from cybersecurity incidents with our incident response strategies and support.',
    },
    // Add more services
  ];

  return (
     
      <motion.section
        className="container mx-auto p-8 md:p-16 my-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </motion.section>
   
  );
};

export default ServicesPage;
