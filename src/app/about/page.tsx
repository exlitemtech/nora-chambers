'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { Mail, Linkedin, GraduationCap, Briefcase, Scale, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

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
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              About Nora Chambers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An award-winning boutique law firm based in New Delhi specialising in dispute resolution and general corporate advisory
            </p>
          </motion.div>
        </div>
      </section>

      {/* Firm Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Drawing inspiration from its name, meaning honour and light, Nora Chambers embodies these principles in every aspect of its practice. 
              The firm advises clients across sectors, with particular expertise in the aviation, pharmaceutical, construction and heavy engineering, finance, and SaaS sectors.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nora Chambers leverages its partners&apos; rich experience and legal expertise to deliver practical, commercially viable solutions. 
              The firm excels in addressing complex legal challenges and developing innovative strategies to resolve emerging legal issues.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With a focus on responsiveness and professionalism, Nora Chambers is privileged to be a trusted partner to a diverse set of clients ranging from innovative enterprises in frontier industries to storied multinational corporations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-bold text-center text-gray-900 mb-12"
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Knowledge', description: 'Deep expertise across diverse legal domains' },
              { title: 'Integrity', description: 'Unwavering commitment to ethical practice' },
              { title: 'Excellence', description: 'Delivering superior outcomes for every client' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scale className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the exceptional legal professionals who drive our success and deliver outstanding results for our clients
            </p>
          </motion.div>
      </div>

      {/* Partners Section */}
      <section id="partners" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
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
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
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
      </section>

      {/* Associates Section */}
      <section id="associates" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
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
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">
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
      </section>
      </section>
      <Footer />
    </div>
  )
}