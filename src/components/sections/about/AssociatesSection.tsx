'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, User } from 'lucide-react'

export default function AssociatesSection() {
  const associates = [
    {
      name: 'Vatsala Poddar',
      title: 'Associate',
      linkedin: 'https://www.linkedin.com/in/vatsala-poddar-653b05194/',
      image: '/pictures/associates/vatsala_poddar.webp'
    },
    {
      name: 'Istela Jameel',
      title: 'Associate',
      linkedin: 'https://www.linkedin.com/in/istela-jameel-058865172/',
      image: '/pictures/associates/istela_jameel.webp'
    },
    {
      name: 'Yashendra Singhwal',
      title: 'Associate',
      linkedin: 'https://www.linkedin.com/in/yashendra-singhwal-8418a41a5/',
      image: '/pictures/associates/yashendra.webp'
    },
    {
      name: 'Rishabh Agarwal',
      title: 'Associate',
      linkedin: 'https://www.linkedin.com/in/rishabh-agarwal-35384318a/',
      image: '/pictures/associates/rishabh.webp'
    },
    {
      name: 'Bhavesh Jain',
      title: 'Tax Counsel',
      linkedin: 'https://www.linkedin.com/in/bhavwesh-jain/',
      image: null
    },
    {
      name: 'Vishav Singh',
      title: 'Clerk and Administrative in-charge',
      linkedin: '#',
      image: null
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
          Associates
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A dedicated team of legal professionals bringing expertise and innovation to every case
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {associates.map((associate, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group h-full"
          >
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
              {/* Profile Image Section */}
              <div className="relative p-6 pb-0">
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden border-4 border-white shadow-xl">
                    {associate.image ? (
                      <Image
                        src={associate.image}
                        alt={associate.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <User className="w-20 h-20 text-primary/60" />
                    )}
                  </div>
                  
                </div>
              </div>

              {/* Content Section */}
              <div className="relative px-6 pb-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {associate.name}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium mb-3 h-5">
                    {associate.title}
                  </p>
                </div>
                
                {/* LinkedIn Button */}
                <div className="mt-4">
                  {associate.linkedin ? (
                    <a
                      href={associate.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#0077b5] text-white rounded-full hover:bg-[#0066a2] transition-colors duration-300 group/linkedin"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">LinkedIn</span>
                    </a>
                  ) : (
                    <div className="h-9"></div>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}