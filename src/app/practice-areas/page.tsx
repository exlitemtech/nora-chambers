'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Scale, Building, Cpu, BookOpen, Lock, Calculator, Briefcase, ArrowRight, Truck, Users, Globe, Heart, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: 'Arbitration & Commercial Dispute Resolution',
      description: 'Comprehensive dispute resolution services including domestic and international arbitration, mediation, and commercial litigation before courts and tribunals.',
      icon: Scale,
      details: [
        'Domestic and international arbitration (SIAC, ICC, LCIA rules)',
        'Commercial litigation before High Courts and Supreme Court',
        'Alternative dispute resolution and mediation',
        'Enforcement of arbitral awards',
        'Construction and infrastructure disputes',
        'Joint venture and shareholder disputes'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Direct Tax and Economic Offences',
      description: 'Expert representation in direct tax matters, transfer pricing, international taxation, and economic offence proceedings.',
      icon: Calculator,
      details: [
        'Income tax litigation and advisory',
        'Transfer pricing and international taxation',
        'FEMA and foreign exchange matters',
        'Benami transactions and black money act',
        'Anti-money laundering (PMLA) proceedings',
        'Economic offences and white-collar crime defense',
        'Tax planning and compliance strategies'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'General Corporate Advisory',
      description: 'Strategic legal counsel for corporate transactions, governance, and regulatory compliance across various business sectors.',
      icon: Building,
      details: [
        'Mergers and acquisitions',
        'Corporate restructuring and reorganization',
        'Joint ventures and strategic partnerships',
        'Corporate governance and compliance',
        'Contract drafting and negotiation',
        'Regulatory approvals and licensing',
        'Foreign investment and FEMA compliance'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Intellectual Property',
      description: 'Comprehensive IP protection and enforcement services covering patents, trademarks, copyrights, and trade secrets.',
      icon: Cpu,
      details: [
        'Patent prosecution and portfolio management',
        'Trademark registration and enforcement',
        'Copyright protection and licensing',
        'Trade secret protection',
        'IP litigation and enforcement',
        'Technology transfer agreements',
        'Brand protection strategies'
      ],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Securities Law',
      description: 'Expert guidance on securities regulations, capital markets, and SEBI compliance for public and private companies.',
      icon: BookOpen,
      details: [
        'IPO and public offerings',
        'SEBI compliance and regulations',
        'Insider trading and market abuse',
        'Takeover regulations and tender offers',
        'Corporate disclosure requirements',
        'Mutual fund and AIF regulations',
        'Capital market intermediary licensing'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Data Privacy',
      description: 'Comprehensive data protection and privacy compliance services under Indian and international data protection laws.',
      icon: Lock,
      details: [
        'Data Protection Impact Assessments (DPIA)',
        'Privacy policy drafting and compliance',
        'Cross-border data transfer agreements',
        'Breach notification and incident response',
        'Vendor and third-party privacy assessments',
        'Employee privacy and workplace monitoring',
        'Regulatory compliance and audits'
      ],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Corporate Insolvency',
      description: 'Strategic insolvency and restructuring solutions under the Insolvency and Bankruptcy Code for corporate debtors and creditors.',
      icon: Briefcase,
      details: [
        'Corporate Insolvency Resolution Process (CIRP)',
        'Liquidation proceedings under IBC',
        'Pre-packaged insolvency resolution',
        'Creditor rights and recovery',
        'Resolution plan preparation and approval',
        'NCLT and NCLAT proceedings',
        'Stressed asset transactions'
      ],
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const sectoralFocus = [
    {
      title: 'Aviation',
      description: 'Comprehensive legal services for airlines, airports, and aviation industry stakeholders.',
      icon: Globe
    },
    {
      title: 'Finance',
      description: 'Expert counsel for banks, NBFCs, fintech companies, and financial institutions.',
      icon: Building
    },
    {
      title: 'Pharma & Health Care',
      description: 'Specialized legal services for pharmaceutical and healthcare companies.',
      icon: Heart
    },
    {
      title: 'Construction & Heavy Engineering',
      description: 'Legal solutions for construction, infrastructure, and engineering projects.',
      icon: Wrench
    },
    {
      title: 'SaaS & IT',
      description: 'Technology-focused legal services for software and IT companies.',
      icon: Cpu
    },
    {
      title: 'Mobility & Logistics',
      description: 'Serving the automotive, aviation, shipping, and transportation industries.',
      icon: Truck
    }
  ]

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 bg-gradient-to-br from-primary to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Practice Areas
            </h1>
            <p className="text-xl max-w-4xl mx-auto leading-relaxed">
              Nora Chambers provides comprehensive legal services across diverse practice areas, 
              delivering strategic counsel and expert representation to meet our clients' complex legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {practiceAreas.map((area, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <area.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {area.details.map((detail, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sectoral Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Sectoral Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our deep industry expertise enables us to provide specialized legal solutions 
              tailored to the unique challenges and opportunities in key sectors.
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {sectoralFocus.map((sector, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <sector.icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {sector.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {sector.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Need Legal Counsel?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our experienced legal team to discuss how we can assist with your 
              specific legal requirements and business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/team">
                <Button size="lg" variant="outline" className="group hover:text-white">
                  Meet Our Team
                  <Users className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}