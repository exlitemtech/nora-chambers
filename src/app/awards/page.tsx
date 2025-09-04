'use client'

import { Award, Trophy, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AwardsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const awards = [
    {
      year: "2025",
      achievements: [
        "The firm has been recognised as a leading Aviation Law practice by India Business Law Journal for the second consecutive year.",
        "The firm was a finalist in the category of Rising Law Firm of the Year in Thomson Reuters  Asian Legal Business' India Law Awards.",
        "The firm has been recognised as amongst the Top 10 Legal Consultants in the Pharma & Life Science Industry by India Pharma Outlook.",
        "APAC Insider has recognised the firm in 2 categories, Leading Litigation Firm  India and Client Service Excellence Award."
      ]
    },
    {
      year: "2024",
      achievements: [
        "The firm has been recognised as a leading disputes boutique by Thomson Reuters  Asian Legal Business.",
        "The firm has been recognised as a leading Aviation Law practice by India Business Law Journal."
      ]
    },
    {
      year: "2023",
      achievements: [
        "Shouryendu Ray, a partner at the firm, included in the prestigious list of 40-under-40 Indian lawyers by BusinessWorld Legal."
      ]
    }
  ]

  const awards_pics = [
    '/pictures/awards/award_1.webp',
    '/pictures/awards/award_2.webp',
    '/pictures/awards/award_3.webp',
    '/pictures/awards/award_4.webp',
    '/pictures/awards/award_5.webp',
  ]

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % awards_pics.length)
      }, 3000) // Change every 3 seconds

      return () => clearInterval(interval)
    }
  }, [isPaused, awards_pics.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-20 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Trophy className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-5xl font-georgia font-bold mb-4">
              Awards & Recognition
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90 mb-6">
              Excellence recognized, trust earned, legacy built
            </p>
          </div>
        </div>
      </section>

      {/* Awards Images Carousel Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="relative lg:mx-16"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel Container */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 p-8">
              <div className="relative h-48">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    {/* Mobile: Show 1 image */}
                    <div className="block sm:hidden relative h-full">
                      <Image
                        src={awards_pics[currentImageIndex]}
                        alt={`Award_${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    
                    {/* Tablet: Show 2 images */}
                    <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden h-full">
                      {[...Array(2)].map((_, i) => {
                        const imageIndex = (currentImageIndex + i) % awards_pics.length
                        return (
                          <div key={i} className="relative h-full">
                            <Image
                              src={awards_pics[imageIndex]}
                              alt={`Award_${imageIndex + 1}`}
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* Desktop: Show 4 images */}
                    <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8 h-full">
                      {[...Array(4)].map((_, i) => {
                        const imageIndex = (currentImageIndex + i) % awards_pics.length
                        return (
                          <div key={i} className="relative h-full">
                            <Image
                              src={awards_pics[imageIndex]}
                              alt={`Award_${imageIndex + 1}`}
                              fill
                              className="object-contain"
                              priority
                            />
                          </div>
                        )
                      })}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => {
                setIsPaused(true)
                setCurrentImageIndex((prev) => (prev - 1 + awards_pics.length) % awards_pics.length)
                setTimeout(() => setIsPaused(false), 5000)
              }}
              className="absolute left-2 lg:-left-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Previous awards"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
            </button>
            <button
              onClick={() => {
                setIsPaused(true)
                setCurrentImageIndex((prev) => (prev + 1) % awards_pics.length)
                setTimeout(() => setIsPaused(false), 5000)
              }}
              className="absolute right-2 lg:-right-12 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Next awards"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-700" />
            </button>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              <div className="flex items-center space-x-2">
                <div className="h-1 w-32 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: isPaused ? `${(currentImageIndex / awards_pics.length) * 100}%` : '100%' }}
                    transition={{
                      duration: isPaused ? 0 : 3,
                      ease: 'linear',
                      repeat: isPaused ? 0 : Infinity,
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600">
                  {currentImageIndex + 1} / {awards_pics.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Content Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {awards.map((yearData) => (
              <div key={yearData.year} className="relative">
                {/* Year Header */}
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-primary to-accent text-white rounded-full w-16 h-16 flex items-center justify-center mr-6 shadow-lg">
                    <span className="text-xl font-bold font-georgia">{yearData.year}</span>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>

                {/* Awards List with Bullet Points */}
                <div className="ml-22">
                  <ul className="space-y-6">
                    {yearData.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="flex-shrink-0 mr-4 mt-1">
                          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                            <Star className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-primary/20">
                            <p className="text-gray-800 leading-relaxed font-garamond text-lg">
                              {achievement}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}