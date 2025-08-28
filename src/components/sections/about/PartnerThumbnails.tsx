'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PartnerThumbnails() {
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

    const partners = [
        {
            name: 'Shouryendu Ray',
            title: 'Partner',
            image: '/pictures/partners/sray.webp',
            specialization: 'Corporate Advisory & Aviation Law',
        },
        {
            name: 'Neelu Mohan',
            title: 'Partner',
            image: '/pictures/partners/nm.webp',
            specialization: 'Commercial Litigation & Arbitration'
        },
        {
            name: 'Dr. Manas S. Ray',
            title: 'Partner',
            image: '/pictures/partners/msray.webp',
            specialization: 'Direct Tax, Securities Law & Financial Regulation'
        }
    ]

    return (
        <section className="py-24 bg-gradient-to-br from-primary to-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Partners
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="text-xl text-white/90 max-w-3xl mx-auto">
                        Meet the legal minds behind Nora Chambers
                    </motion.p>
                </motion.div>

                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={stagger}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
                >
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex flex-col items-center"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="mb-6 relative"
                            >
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-accent">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        width={192}
                                        height={192}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>
                            </motion.div>
                            <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                            <p className="text-sm text-white/70 mb-2">{partner.title}</p>
                            <p className="text-white/80 text-center max-w-xs">{partner.specialization}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <Link href="/about#partners">
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white text-primary hover:bg-gray-100 border-white"
                        >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}