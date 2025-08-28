'use client'

import { motion } from 'framer-motion'
import PartnersSection from '@/components/sections/about/PartnersSection'
import AssociatesSection from '@/components/sections/about/AssociatesSection'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Partners Section */}
      <section id="partners" className="py-20">
        <PartnersSection />
      </section>

      {/* Associates Section */}
      <section id="associates" className="py-20 bg-gray-50">
        <AssociatesSection />
      </section>
    </div>
  )
}