'use client'

import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import HeroSection from '@/components/sections/home/HeroSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import PartnersSection from '@/components/sections/home/PartnersSection'
import Disclaimer from '@/components/disclaimer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <HeroSection />

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Knowledge', description: 'Deep expertise across diverse legal domains' },
              { title: 'Integrity', description: 'Unwavering commitment to ethical practice' },
              { title: 'Excellence', description: 'Delivering superior outcomes for every client' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scale className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Partners Thumbnails Section */}
      <section id="partners">
        <PartnersSection />
      </section>

      {/* Disclaimer */}
      <Disclaimer />
    </div>
  )
}