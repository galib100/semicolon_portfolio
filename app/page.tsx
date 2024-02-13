import Card from '@/components/Card'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/NavBar'

export default function Home() {
  return (
    <main >
      <HeroSection />
      <div className="container mx-auto grid gap-6 md:grid-cols-3 px-7">
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
        <Card
          title="Digital Forensics"
          description="Protect your network from cyber threats with our advanced security solutions."

        />
        <Card
          title="Incident Response"
          description="Protect your network from cyber threats with our advanced security solutions."

        />
        <Card
          title="Cloud Security"
          description="Protect your network from cyber threats with our advanced security solutions."

        />
      </div>
    </main>
  )
}
