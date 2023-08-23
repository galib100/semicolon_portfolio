'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader'


const inter = Inter({ subsets: ['latin'] })

  const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay for demonstration purposes
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimer);
    };
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>


        <AnimatePresence >
          {isLoading ? <Loader /> : <div>
            <Navbar />
            {children}
            <Footer />
          </div>
          }
        </AnimatePresence>




      </body>
    </html>
  )
}
