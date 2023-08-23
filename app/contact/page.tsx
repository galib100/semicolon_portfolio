'use client'
import ContactForm from '@/components/ContactForm';
import ContactLocation from '@/components/ContactLocation';
import Loader from '@/components/Loader';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ContactPage = () => {

    return (
        <div>
            <div><ContactForm /> <ContactLocation /></div> 
        </div>

    );
};

export default ContactPage;
