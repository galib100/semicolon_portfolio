import Card from '@/components/Card'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/NavBar'
import { FiShield, FiLock, FiAnalytics } from 'react-icons/fi';

export default function Home() {
  return (
    <main >
     <HeroSection/>
     {/* <TinySlider/> */}
     <div className="container mx-auto grid gap-6 md:grid-cols-3">
          <Card
            title="Network Security"
            description="Protect your network from cyber threats with our advanced security solutions."
             
          />
          <Card
            title="Data Encryption"
            description="Ensure the confidentiality of your sensitive data through state-of-the-art encryption techniques."
             
          />
          <Card
            title="Cyber Analytics"
            description="Gain insights into your cybersecurity posture with our powerful analytics tools."
            
          />
        </div>
    </main>
  )
}
