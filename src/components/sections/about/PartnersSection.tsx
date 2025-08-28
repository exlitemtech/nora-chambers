'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Linkedin, GraduationCap, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PartnersSection() {
  const partners = [
    {
      name: 'Shouryendu Ray',
      title: 'Partner',
      image: '/pictures/partners/3.webp',
      email: 'shouryendu.ray@norachambers.com',
      linkedin: '#',
      specialization: 'Corporate Advisory & Aviation Law',
      bio: 'Dual-qualified attorney (New York and India) with expertise in corporate advisory and commercial litigation, recognized in Business World Legal\'s "40 under 40" list.',
      education: [
        'LLM - University of Pennsylvania (Dean\'s Scholar)',
        'Certificate in Business & Law - Wharton',
        'BA, LLB - NUJS'
      ],
      experience: [
        'Head of Dispute Resolution, AsiaWise',
        'Associate, Pepper Hamilton, Philadelphia/New York',
        'Chambers of Solicitor General of India',
        'Associate, Amarchand Mangaldas'
      ]
    },
    {
      name: 'Neelu Mohan',
      title: 'Partner',
      image: '/pictures/partners/2.webp',
      email: 'neelu.mohan@norachambers.com',
      linkedin: '#',
      specialization: 'Commercial Litigation & Arbitration',
      bio: 'Advocate-on-Record with the Supreme Court of India, specializing in commercial litigation, arbitration, and regulatory advisory matters with expertise in infrastructure and oil & gas disputes.',
      education: [
        'LLM - Columbia University',
        'BSL, LLB - ILS Law College, University of Pune'
      ],
      experience: [
        'Advocate-on-Record, Supreme Court of India',
        'Chambers of Mr. Nakul Dewan, Senior Advocate',
        'Senior Associate, Luthra & Luthra Law Offices',
        'Associate, Argus Partners'
      ]
    },
    {
      name: 'Dr. Manas S. Ray',
      title: 'Partner',
      image: '/pictures/partners/1.webp',
      email: 'manas.ray@norachambers.com',
      linkedin: '#',
      specialization: 'Direct Tax, Securities Law & Financial Regulation',
      bio: 'Former Chief Commissioner of Income Tax (IRS) and Executive Director of SEBI, specializing in direct tax, international taxation, transfer pricing, securities law, and financial regulation matters.',
      education: [
        'PhD - IGNOU & University of Delhi',
        'MA - University of Delhi',
        'LLB - University Law College, Utkal University',
        'PG Diploma in Securities Law - Govt. Law College, Mumbai'
      ],
      experience: [
        'Chief Commissioner of Income Tax',
        'Executive Director, SEBI',
        'Director of International Taxation',
        'Indian Revenue Service (1985 batch)'
      ]
    }
  ]

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
              Our Partners
            </h2>
            <p className="text-xl text-gray-600">
              Meet the legal minds behind Nora Chambers
            </p>
          </motion.div>

          <div className="space-y-24">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
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
                  <p className="text-lg text-primary font-medium mb-4">{partner.specialization}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {partner.bio}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                        Education
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {partner.education.map((edu, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2 text-primary" />
                        Experience
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {partner.experience.slice(0, 4).map((exp, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="group">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm" className="group">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
  )
}