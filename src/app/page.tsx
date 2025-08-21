'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Scale, Shield, Users, Award, Building, Gavel, ChevronDown } from 'lucide-react'
import Disclaimer from '@/components/disclaimer'

export default function Home() {
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
    <div className="min-h-screen bg-white">      
      {/* Hero Section */}
      <section className="relative pt-24 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="/pictures/logos/Nora-Chambers-Final-Logo-Icon.png"
              alt="Nora Chambers"
              width={120}
              height={120}
              className="mx-auto mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6"
          >
            Honor. Light. Justice.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Award-winning boutique law firm specializing in dispute resolution and corporate advisory
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <Button size="lg" className="group">
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
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

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-lg">
                <blockquote className="text-2xl font-serif italic text-gray-800 mb-6">
                  &ldquo;Knowledge, Integrity, Excellence - These are not just words, but the foundation of our practice.&rdquo;
                </blockquote>
                <div className="h-1 w-24 bg-primary mb-6"></div>
                <p className="text-lg font-semibold text-gray-900">Our Philosophy</p>
                <p className="text-gray-600">Guiding every client interaction</p>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get in touch with our experienced legal team to discuss how we can help with your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/20">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Disclaimer />
    </div>
  )
}