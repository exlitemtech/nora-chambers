'use client'

import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import AssociatesSection from '@/components/sections/about/AssociatesSection'
import PartnersSection from '@/components/sections/about/PartnersSection'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Nora Chambers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An award-winning boutique law firm based in New Delhi specialising in dispute resolution and general corporate advisory
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firm Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Drawing inspiration from its name, meaning honour and light, Nora Chambers embodies these principles in every aspect of its practice. 
              The firm advises clients across sectors, with particular expertise in the aviation, pharmaceutical, construction and heavy engineering, finance, and SaaS sectors.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nora Chambers leverages its partners&apos; rich experience and legal expertise to deliver practical, commercially viable solutions. 
              The firm excels in addressing complex legal challenges and developing innovative strategies to resolve emerging legal issues.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With a focus on responsiveness and professionalism, Nora Chambers is privileged to be a trusted partner to a diverse set of clients ranging from innovative enterprises in frontier industries to storied multinational corporations.
            </p>
          </motion.div>
        </div>
      </section>

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

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the exceptional legal professionals who drive our success and deliver outstanding results for our clients
              </p>
            </motion.div>
        </div>

        {/* Partners Section */}
        <section id="partners" className="py-20">
          <PartnersSection />
        </section>

        {/* Associates Section */}
        <section id="associates" className="py-20 bg-gray-50">
          <AssociatesSection />
        </section>
      </section>
    </div>
  )
}