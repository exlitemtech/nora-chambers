'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Linkedin, GraduationCap, Briefcase, Scale, MoveDown, MoveUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getAllPartners } from '@/lib/partnersData'
import { useState } from 'react'

export default function PartnersSection() {
  const partners = getAllPartners()
  const [expandedBios, setExpandedBios] = useState<{[key: number]: boolean}>({})

  return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Partners
            </h2>
          </motion.div>

          <div className="space-y-32">
            {partners.map((partner, index) => (
              <div key={index} id={partner.slug}>
                {/* Top Section with Photo and Brief Info */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative">
                      <div className="aspect-square max-w-md mx-auto">
                        <Image
                          src={partner.image}
                          alt={partner.name}
                          width={400}
                          height={400}
                          className="rounded-lg shadow-xl object-cover object-bottom"
                        />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-lg text-primary font-medium mb-6">{partner.specialization}</p>
                    
                    {/* Brief intro - first paragraph or bio */}
                    <div className="text-gray-600 mb-8 leading-relaxed">
                      <p className={expandedBios[index] ? '' : 'line-clamp-4 md:line-clamp-none'}>
                        {partner.detailedBio ? partner.detailedBio[0] : partner.bio}
                      </p>
                      {(partner.detailedBio ? partner.detailedBio[0] : partner.bio).length > 200 && (
                        <button
                          onClick={() => setExpandedBios(prev => ({ ...prev, [index]: !prev[index] }))}
                          className="text-primary hover:text-primary/80 text-sm font-medium mt-2 flex items-center gap-1 md:hidden"
                        >
                          {expandedBios[index] ? 'Read less' : 'Read more'}
                          {expandedBios[index] ? 
                            <MoveUp className="w-3 h-3" /> : 
                            <MoveDown className="w-3 h-3" />
                          }
                        </button>
                      )}
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex gap-4">
                      <a href={`mailto:${partner.email}`}>
                        <Button variant="outline" size="sm" className="group hover:text-white shadow-lg">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      </a>
                      <a href={partner.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="group hover:text-white shadow-lg">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Full Bio and Credentials Section */}
                {partner.detailedBio && partner.detailedBio.length > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gray-50 rounded-xl p-8 mb-8"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Professional Background</h4>
                    <div className="space-y-4">
                      {partner.detailedBio.slice(1).map((paragraph, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Credentials Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {/* Education Section */}
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                      <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                      Educational Credentials
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {partner.education.map((edu, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bar Qualifications Section */}
                  {partner.barQualifications && (
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                        <Scale className="w-5 h-5 mr-2 text-primary" />
                        Bar Qualifications
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-2">
                        {partner.barQualifications.map((qual, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            {qual}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Experience Section */}
                  <div className={`bg-white rounded-lg shadow-sm p-6 border border-gray-100 ${!partner.barQualifications ? 'md:col-span-2' : ''}`}>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                      <Briefcase className="w-5 h-5 mr-2 text-primary" />
                      Past Professional Experience
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {partner.experience.map((exp, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          {exp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
  )
}