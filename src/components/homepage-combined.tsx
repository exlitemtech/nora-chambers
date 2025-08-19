'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Scale, Shield, Users, Award, Building, Gavel, ChevronDown, Mail, Linkedin, GraduationCap, Briefcase } from 'lucide-react'

export default function HomepageCombined() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const services = [
    {
      title: 'Arbitration & Commercial Dispute Resolution',
      description: 'Award-winning practice in high-stakes arbitrations and commercial disputes across diverse judicial fora.',
      icon: Scale,
      details: [
        'High-stakes arbitrations before domestic and international tribunals',
        'Construction and engineering disputes',
        'Complex shareholder disputes',
        'Institutional arbitrations (LCIA, SIAC, ICC frameworks)'
      ]
    },
    {
      title: 'General Corporate Advisory',
      description: 'Trusted counsel for start-ups to multinationals in complex regulatory environments.',
      icon: Users,
      details: [
        'Regulatory compliance and strategic guidance',
        'Start-up to multinational corporation advisory',
        'Complex regulatory environment navigation',
        'Emerging industry legal frameworks'
      ]
    },
    {
      title: 'Direct Tax & Economic Offences',
      description: 'Comprehensive tax advisory with specialized expertise in international taxation.',
      icon: Shield,
      details: [
        'Supreme Court and High Court tax controversies',
        'International taxation and transfer pricing',
        'Prevention of Money Laundering Act proceedings',
        'Foreign Exchange Management Act compliance'
      ]
    },
    {
      title: 'Securities Law',
      description: 'Regulatory expertise in SEBI proceedings and capital markets disputes.',
      icon: Award,
      details: [
        'SEBI proceedings and regulatory compliance',
        'Securities Appellate Tribunal appeals',
        'Fraud prevention and insider trading matters',
        'Capital markets dispute resolution'
      ]
    },
    {
      title: 'Corporate Insolvency',
      description: 'Command over the dynamic legal framework under the Insolvency and Bankruptcy Code.',
      icon: Building,
      details: [
        'Resolution applicant representation',
        'Financial and operational creditor advisory',
        'Resolution plan negotiations',
        'Liquidation proceedings and compliance'
      ]
    },
    {
      title: 'Technology & IP',
      description: 'Strategic solutions across the complete IP lifecycle and data governance.',
      icon: Gavel,
      details: [
        'IP enforcement and prosecution',
        'R&D collaborations and partnerships',
        'Data privacy framework development',
        'Technology contract negotiations'
      ]
    }
  ]

  const partners = [
    {
      name: 'Shouryendu Ray',
      title: 'Partner',
      image: '/pictures/partners/sray.webp',
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
      image: '/pictures/partners/nm.webp',
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
      image: '/pictures/partners/msray.webp',
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30"></div>
          <Image
            src="/pictures/lighthouse-soft.jpg"
            alt="Lighthouse background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-full">
          <div className="w-full lg:w-1/2">
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
              className="mb-8"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6"
          >
            Honor. Light. Justice.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl"
          >
            Award-winning boutique law firm specializing in dispute resolution and corporate advisory
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get in Touch
            </Button>
          </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              About Nora Chambers
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              An award-winning boutique law firm based in New Delhi specialising in dispute resolution and general corporate advisory
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-lg">
                <blockquote className="text-2xl font-serif italic text-gray-800 mb-6">
                  &ldquo;Knowledge, Integrity, Excellence - These are not just words, but the foundation of our practice.&rdquo;
                </blockquote>
                <div className="h-1 w-24 bg-primary mb-6"></div>
                <p className="text-lg font-semibold text-gray-900">Our Philosophy</p>
                <p className="text-gray-600">Guiding every client interaction</p>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

          {/* Core Values */}
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Our Areas of Practice
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver sophisticated legal solutions across diverse practice areas
            </motion.p>
          </motion.div>
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.details.slice(0, 2).map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="text-primary font-medium hover:text-accent transition-colors inline-flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative overflow-hidden h-96 bg-accent">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="absolute bottom-0"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-primary font-medium mb-3">{partner.title}</p>
                    <p className="text-sm text-gray-600">{partner.specialization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/about#partners">
              <Button size="lg" variant="outline">
                Learn More About Our Partners
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Associates Section */}
      <section id="associates" className="py-24 bg-gradient-to-br from-primary/10 to-accent/10">
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
                    <div className="relative h-64 bg-accent flex items-center justify-center">
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
            <Link href="/about#associates">
              <Button size="lg" variant="outline">
                Learn More About Our Associates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get in touch with our experienced legal team to discuss how we can help with your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/20">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}