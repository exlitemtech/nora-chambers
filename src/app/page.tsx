import HeroSection from '@/components/sections/home/HeroSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import AboutSection from '@/components/sections/home/AboutSection'
import PartnersSection from '@/components/sections/home/PartnersSection'
import CTASection from '@/components/sections/home/CTASection'
import Disclaimer from '@/components/disclaimer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Partners Section with Circular Thumbnails */}
      <PartnersSection />

      {/* CTA Section */}
      <CTASection />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  )
}