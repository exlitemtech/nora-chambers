'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TermsOfUse() {
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
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <FileText className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Terms of Use
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Legal terms and conditions for using our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="prose prose-lg max-w-none"
          >
            {/* Back Button */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Link href="/">
                <Button variant="outline" className="group">
                  <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            {/* Terms of Use */}
             {/* General Section */}
             <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                Terms of Use
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                By access and use of this <a href="https://www.norachambers.in" target="_blank" className="text-primary hover:text-primary/80 font-medium">www.norachambers.in</a> (the "Website"), the User of the Website ("User" or grammatical variations thereof) accepts and agrees to be bound by and to comply with (i) these Terms, (ii) the Disclaimer, which the User has agreed to and accepted prior to accessing the Website, and (iii) the Privacy Policy available on this Website.
                </p>
                <p className="text-gray-700 leading-relaxed">
                By using this Website, the User expressly represents that he/she has read and understood these Terms and agrees to be bound by these Terms. Furthermore, by using this Website, the User expressly represents that (a) he/she has the capacity to be bound by these Terms; (b) if he/she is acting on behalf of a company or other entity, then he/she has the relevant authority to bind such company or entity; (c) he/she will not violate any rights of NORA CHAMBERS ("NORA CHAMBERS"), including intellectual property rights such as copyright or trademark rights; and (d) he/she has not been or is not suspended or removed from the Website by NORA CHAMBERS for any reason.
                </p>
              </div>
            </motion.div>
            
            {/* General Section */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                General
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The information, material and content provided in the pages of the Website (the "Information") may be changed at any time without prior notice.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Information provided on the Website is believed to be reliable when posted, but there is no guarantee that it is accurate or complete or current at all times. The Website is a resource for informational purposes only and is intended, but not promised or guaranteed, to be correct, complete, and up-to-date. NORA CHAMBERS does not warrant that the information contained on this Website is accurate or complete, and hereby disclaims any and all liability to the User or any other person for any loss or damage caused by errors or omissions, regardless of whether such errors or omissions result from negligence, accident or any other cause. Further, NORA CHAMBERS assumes no liability for the interpretation and/or use of the information contained on this Website, nor does it offer a warranty of any kind, either expressly or impliedly.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS does not intend that the links from this Website to other internet websites, be considered referrals to, endorsements of, or affiliations with the linked entities. NORA CHAMBERS is not responsible for, and makes no representations or warranties (i) the contents of the websites to which links may be provided from this Website, or (ii) other such websites or links may be active or always available.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  No material may be modified, edited or taken out of context such that its use creates a false or misleading statement or impression as to the position, statements or actions of NORA CHAMBERS.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS reserves the right at any time, without previous notice, to add, alter, modify, change or vary all or any of these Terms.
                </p>
              </div>
            </motion.div>

            {/* Conditions For Use */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                Conditions For Use
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The use of this Website does not amount to the creation of an attorney-client relationship. Any transmission, receipt or use of this Website and information and materials contained therein, or sending an e-mail to our offices, will not create or constitute an attorney-client relationship.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Users should make themselves aware of the laws of their respective country or those applicable to them in relation to any of the matters described in these pages. If the User chooses to access the Website then it shall be deemed to be done on his/ her own initiative and he/she shall be held responsible for compliance with applicable local, national or international laws.
                </p>
              </div>
            </motion.div>

            {/* Confidentiality */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                Confidentiality
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS will treat all information provided by User(s) including but not limited to information regarding User's name, address, telephone number, date of birth, gender, e-mail address, organization, etc. ("Personal Information") confidential. NORA CHAMBERS will not in the ordinary course disclose any Personal Information to any third parties except in the following circumstances:
                </p>
                <div className="ml-6 space-y-2">
                  <p className="text-gray-700 leading-relaxed">
                    • Where NORA CHAMBERS is compelled to do so under applicable law/ judicial process/ governmental authorities; or
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • Where User has provided his/her prior written authorization to do so; or
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    • Where it is in the public interest to do so.
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  User(s) may not use or export or re-export any information or any copy or adaptation thereof available on this Website in violation of any applicable laws or regulations, including export laws and regulations in force from time to time.
                </p>
              </div>
            </motion.div>

            {/* No Warranties */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                No Warranties
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS and its members, affiliates, employees and authorized representatives provide the Website and the information on an "as is" basis and do not make any express or implied warranties, representations, endorsements or conditions with respect to the Website or the information, including without limitation, warranties as to non-infringement, usefulness, completeness, accuracy, correctness, reliability and fitness for a particular purpose.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Further, NORA CHAMBERS does not represent or warrant that the Website will be available or will meet the User(s) requirements, that access will be uninterrupted, that there will be no delays, failures, errors or omissions or loss of transmitted information, that no viruses or other contaminating or destructive properties will be transmitted or that no damage will occur to User's computer system. The User has the sole responsibility for adequate protection and backup of data and/or equipment and to take reasonable and appropriate precautions to scan for computer viruses or other destructive properties.
                </p>
              </div>
            </motion.div>

            {/* No Liability */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                No Liability
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS is not responsible for and will not be liable to the User or anyone else for any damages or other amounts whatsoever (including but not limited to direct, indirect, incidental, special, consequential, exemplary or punitive damages) arising out of or in connection with User's use of or inability to use the Website or the information contained therein, or any action or decision made by User in reliance on the Website or the information contained therein, or any unauthorized use or reproduction of the Website or the information therein, even if NORA CHAMBERS has been advised of the possibility of these damages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The User understands that the Website is used by him/her solely at his/her own risk, cost and liability.
                </p>
              </div>
            </motion.div>

            {/* Termination */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                {/* <Handcuffs className="w-8 h-8 mr-3 text-primary" /> */}
                Termination
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  The User agrees that NORA CHAMBERS with or without any reason, may immediately terminate his/her access to the Website without prior notice. Without limiting the foregoing, NORA CHAMBERS may terminate or temporarily suspend his/her access to the Website if he/she (a) breaches or violates these Terms, (b) there is a request by law enforcement or other government agencies, or (c) in case of unexpected technical issues or problems.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Users agree that all terminations of access to the Website shall be made at the sole discretion of NORA CHAMBERS, and that NORA CHAMBERS shall not be liable in any manner whatsoever to either him/ her or any third-party for any termination of access to this Website.
                </p>
              </div>
            </motion.div>

            {/* Jurisdiction */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                Jurisdiction
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS causes the control and maintenance of this Website from India. NORA CHAMBERS makes no representations that the information and material contained in this Website are appropriate or permitted for use in jurisdictions outside India.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Terms are governed by the laws of India without giving effect to any principles of conflicts of laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The usage of the Website by the User is subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra without prejudice to the right of NORA CHAMBERS to take action in any jurisdiction whatsoever.
                </p>
              </div>
            </motion.div>

            {/* Investigations */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                Investigations
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS reserves the right to investigate complaints or reported violations of these Terms and to take any action we deem necessary and appropriate. Such action may include but not be limited to reporting any suspected unlawful activity to law enforcement officials, regulators, or other third parties. In addition, we may take action to disclose any information necessary or appropriate to such persons or entities relating to User's profiles, e-mail addresses, usage history, IP addresses and traffic information.
                </p>
              </div>
            </motion.div>

            {/* Legal Remedies */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                Legal Remedies
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  NORA CHAMBERS reserves the right to seek all remedies available at law and in equity for violations of these Terms by the User.
                </p>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Questions about our Terms of Use?</h2>
              <p className="mb-6 opacity-90">
                If you have any questions or concerns about these terms, please don't hesitate to contact us.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}