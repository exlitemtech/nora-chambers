'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence in Legal Practice
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Drawing inspiration from its name, meaning honour and light, Nora Chambers embodies these principles in every aspect of its practice. We advise clients across sectors, with particular expertise in aviation, pharmaceutical, construction, finance, and SaaS sectors.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our firm leverages rich experience and legal expertise to deliver practical, commercially viable solutions. We excel in addressing complex legal challenges and developing innovative strategies for emerging legal issues.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">Award</h3>
                <p className="text-gray-600">Winning Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">Expert</h3>
                <p className="text-gray-600">Legal Counsel</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">Global</h3>
                <p className="text-gray-600">Client Base</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary mb-2">Innovative</h3>
                <p className="text-gray-600">Legal Solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-lg">
              <blockquote className="text-2xl font-serif italic text-gray-800 mb-6">
                &ldquo;Knowledge, Integrity, Excellence - These are not just words, but the foundation of our practice.&rdquo;
              </blockquote>
              <div className="h-1 w-24 bg-primary mb-6" />
              <p className="text-lg font-semibold text-gray-900">Our Philosophy</p>
              <p className="text-gray-600">Guiding every client interaction</p>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}