import { motion } from 'framer-motion';
import React from 'react'

const ContactLocation = () => {
  return (
    <div>
         <motion.section
        className="container mx-auto p-8 md:p-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Reach Out to Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions or inquiries, please feel free to contact us.
            </p>
            <p className="text-gray-700 mb-2">
              Email: <a href="mailto:info@semicolon-cyber.com">info@semicolon-cyber.com</a>
            </p>
            <p className="text-gray-700">
              Phone: <a href="tel:+1234567890">(123) 456-7890</a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Visit Our Office</h2>
            <p className="text-gray-700 mb-6">
              Feel free to drop by our office to discuss your cybersecurity needs in person.
            </p>
            <p className="text-gray-700">
              Address: 123 Cyber Street, Secure City, SC 12345
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default ContactLocation