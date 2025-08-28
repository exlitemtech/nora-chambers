'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Linkedin, GraduationCap, Briefcase, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface Partner {
  slug: string
  name: string
  title: string
  image: string
  email: string
  linkedin: string
  specialization: string
  bio: string
  education: string[]
  experience: string[]
}

interface PartnerDetailProps {
  partner: Partner
}

export default function PartnerDetail({ partner }: PartnerDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/about#partners">
          <Button variant="ghost" className="mb-8 hover:bg-primary/10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Partners
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto lg:mx-0">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl object-cover object-bottom"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {partner.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">{partner.specialization}</p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {partner.bio}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                  Education
                </h2>
                <ul className="text-gray-600 space-y-2">
                  {partner.education.map((edu, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-bold text-xl text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 mr-2 text-primary" />
                  Experience
                </h2>
                <ul className="text-gray-600 space-y-2">
                  {partner.experience.map((exp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href={`mailto:${partner.email}`}>
                <Button size="lg" className="group shadow-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </Button>
              </a>
              <a href={partner.linkedin} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group hover:text-white shadow-lg">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}