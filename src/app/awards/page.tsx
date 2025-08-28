'use client'

import { Award, Trophy, Star } from 'lucide-react'
import Image from 'next/image'

export default function AwardsPage() {
  const awards = [
    {
      year: "2023",
      achievements: [
        "Shouryendu Ray, a partner at the firm, included in the prestigious list of 40-under-40 Indian lawyers by BusinessWorld Legal."
      ]
    },
    {
      year: "2024",
      achievements: [
        "The firm has been recognised as a leading disputes boutique by Thomson Reuters  Asian Legal Business.",
        "The firm has been recognised as a leading Aviation Law practice by India Business Law Journal."
      ]
    },
    {
      year: "2025",
      achievements: [
        "The firm has been recognised as a leading Aviation Law practice by India Business Law Journal for the second consecutive year.",
        "The firm was a finalist in the category of Rising Law Firm of the Year in Thomson Reuters  Asian Legal Business' India Law Awards.",
        "The firm has been recognised as amongst the Top 10 Legal Consultants in the Pharma & Life Science Industry by India Pharma Outlook.",
        "APAC Insider has recognised the firm in 2 categories, Leading Litigation Firm  India and Client Service Excellence Award."
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

      {/* Awards Images Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {awards_pics.map((award, index) => (
              <div key={award} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-200 group-hover:border-primary/40">
                  <div className="relative p-8 h-64">
                    <Image
                      src={award}
                      alt={`Award_${index + 1}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      priority
                    />
                  </div>
                </div>
              </div>
            ))}
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