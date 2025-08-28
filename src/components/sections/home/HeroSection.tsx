'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 flex items-center justify-center overflow-hidden">
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
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
            style={{ fontVariant: 'small-caps' }}
          >
            Nora Chambers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-700 mb-8"
          >
            Trusted relationships. Tailored legal strategy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto space-y-4"
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
  )
}