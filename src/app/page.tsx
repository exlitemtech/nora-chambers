'use client'

import HeroSection from '@/components/sections/home/HeroSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import PartnersSection from '@/components/sections/home/PartnersSection'
import Disclaimer from '@/components/disclaimer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Partners Section with Circular Thumbnails */}
      <PartnersSection />

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  )
}