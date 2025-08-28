'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Full Width Header Section */}
          <div className="text-center mb-16">
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
                className="mx-auto mb-6"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              style={{ fontVariant: 'small-caps' }}
            >
              Nora Chambers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-700"
            >
              Trusted relationships. Tailored legal strategy.
            </motion.p>
          </div>

          {/* Two Column Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Detailed Text Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg text-gray-600 mb-8 space-y-4"
              >
                <p>
                  Leveraging multi-sectoral legal expertise, Nora Chambers delivers comprehensive legal representation and tailored counsel across dispute resolution, corporate advisory, insolvency, intellectual property, securities law, direct tax, and related practice areas.
                </p>
                <p>
                  The firm has earned client recognition for its commitment to delivering clear, actionable legal guidance and its attorneys' innovative problem-solving approach to complex legal challenges.
                </p>
                <p>
                  Comprising seasoned partners and accomplished associates, Nora Chambers serves as trusted legal counsel to prominent corporations, handling both high-stakes business disputes and day-to-day legal requirements with equal proficiency.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/practice-areas">
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

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/pictures/conference-room.jpg"
                  alt="Nora Chambers Conference Room"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover opacity-80"
                  priority
                />
                <div className="absolute inset-0 bg-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-48 h-48 bg-accent/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
  )
}