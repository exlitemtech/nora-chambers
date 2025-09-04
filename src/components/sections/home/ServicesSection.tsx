'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Scale, Shield, Users, Award, Building, Gavel, ChevronDown } from 'lucide-react'

export default function ServicesSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

    const services = [
    {
      title: 'Arbitration & Commercial Dispute Resolution',
      description: 'Award-winning practice in high-stakes arbitrations and commercial disputes.',
      icon: Scale,
    },
    {
      title: 'General Corporate Advisory',
      description: 'Trusted counsel for start-ups to multinationals in complex regulatory environments.',
      icon: Users,
    },
    {
      title: 'Direct Tax & Economic Offences',
      description: 'Comprehensive tax advisory with specialized expertise in international taxation.',
      icon: Shield,
    },
    {
      title: 'Securities Law',
      description: 'Regulatory expertise in SEBI proceedings and capital markets disputes.',
      icon: Award,
    },
    {
      title: 'Corporate Insolvency',
      description: 'Command over the dynamic legal framework under the Insolvency and Bankruptcy Code.',
      icon: Building,
    },
    {
      title: 'Technology & IP',
      description: 'Strategic solutions across the complete IP lifecycle and data governance.',
      icon: Gavel,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Areas of Practice
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver sophisticated legal solutions across diverse practice areas
          </motion.p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/services" className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}