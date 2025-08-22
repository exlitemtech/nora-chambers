'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AssociatesSection() {

  const associates = [
    {
      name: 'Senior Associate',
      title: 'Senior Associate',
      specialization: 'Corporate Law & Litigation',
      bio: 'Experienced legal professional with expertise in corporate advisory and commercial litigation matters.',
      icon: Users,
      description: 'Senior associates bring extensive experience and specialized knowledge to complex legal matters.'
    },
    {
      name: 'Associate',
      title: 'Associate',
      specialization: 'Regulatory & Compliance',
      bio: 'Skilled legal practitioner focused on regulatory compliance and advisory services.',
      icon: Users,
      description: 'Associates handle a wide range of legal matters with precision and attention to detail.'
    },
    {
      name: 'Junior Associate',
      title: 'Junior Associate',
      specialization: 'Research & Documentation',
      bio: 'Emerging legal talent contributing to research, documentation, and client support.',
      icon: Users,
      description: 'Junior associates provide valuable support in legal research and case preparation.'
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
              Our Associates
            </h2>
            <p className="text-xl text-gray-600">
              Talented legal professionals supporting our practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {associates.map((associate, index) => {
              const IconComponent = associate.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                    <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-12 h-12 text-primary" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {associate.name}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-3">
                        {associate.specialization}
                      </p>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {associate.bio}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        {associate.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our associates bring diverse expertise and fresh perspectives to every case. 
              Together with our partners, they form a cohesive team dedicated to delivering 
              exceptional legal services to our clients.
            </p>
          </motion.div>
        </div>
  )
}