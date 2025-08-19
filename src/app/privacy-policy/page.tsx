'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Users, Cookie, Server, ExternalLink, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
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
                <Shield className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              How we protect and handle your personal information
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

            {/* Introduction */}
            <motion.div variants={fadeInUp} className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nora Chambers ("NORA CHAMBERS") is committed to safeguarding the privacy of any person who accesses and uses the website ("User") (www.nora-chambers.com) ("Website") that is owned and operated by NORA CHAMBERS. In this privacy policy, use of the terms "we", "us" and "our" refers to NORA CHAMBERS.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This privacy policy applies to any person or entity that accesses the Website or has shared any information or data concerning an identified or identifiable natural person ("Personal Data") with Nora Chambers. You hereby agree not to provide the Personal Data of any other person. Personal Data includes any data or information that relates to a natural person, which, either directly or indirectly, in combination with other information, is capable of identifying such person; and includes name, address, telephone number, date of birth, gender, e-mail address, organization name etc.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                This privacy policy governs the access, collection, usage, handling, storage and disclosure of such Personal Data during the course of your use of the Website. It also describes the choices available to you regarding our use of your Personal Data and how you can access and update this Personal Data.
              </p>
            </motion.div>

            {/* Agreement Section */}
            <motion.div variants={fadeInUp} className="bg-gray-50 p-6 rounded-lg mb-12">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">Agreement to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using the Website, you accept the terms of, and be bound by this privacy policy. This privacy policy may be updated from time to time at its sole discretion or on account of changes in law. Unless otherwise specified, such revisions shall take effect from the day and date they are posted on the Website. Nora Chambers shall be under no obligation to notify the User about the changes. You are advised to consult this privacy policy regularly for any changes, as your continued access and use of the Website shall be deemed to be your approval and acceptance of all changes to this privacy policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This privacy policy should be at all times read along with the terms and conditions of use of the Website. By accessing and using this Website, you accept and agree to be bound by and comply with this privacy policy and the Terms of Use.
              </p>
            </motion.div>

            {/* How we use Personal Data */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                1. How we use your Personal Data
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">(a) Subscriber provided information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collect and process the Personal Data provided by you when you enter information through the online form published on our Website, accept the terms of use of the Website, subscribe to a newsletter, contact us for help or submit any enquiry, apply for a job posting made available on the Website, or otherwise enter information on the Website before or during its use. When entering information on the Website, as appropriate, you may be asked to enter your name, email address, mailing address, phone number, age, or other details as required, for us to improve the Website, to contact you and respond to your information requests, managing our relationships with you, clients etc.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">(b) Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may also process certain other data, such as device ID, device make/model, IP address, browser type, operating system, page views, website navigation, timing and frequency of use of the Website, marketing preferences etc. when you use the Website. We use this information purely for analytics and research purposes, in order to improve our Website, and to ensure the security of the Website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">(c) Newsletters</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may also process certain Personal Data to periodically send you emails containing news and updates about us, legal and regulatory updates, legal news etc. You hereby consent to allow us to use your e-mail address for this purpose.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Access to Information */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                2. Access to Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As per the terms and conditions of use, NORA CHAMBERS has the right to restrict access of any User from the Website and the services offered therein ("Restricted User"). With respect to a Restricted User, NORA CHAMBERS will delete any or all User Information given by the Restricted User. If NORA CHAMBERS, by its sole discretion or due to a legal requirement, decides to retain the User Information for its records, then NORA CHAMBERS will be responsible to safeguard that User Information to such extent as required under applicable law.
              </p>
            </motion.div>

            {/* Retention */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                3. Retention of your Personal Data
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  (a) Your Personal Data shall not be retained for longer than is necessary for the purposes for which we collect or process them, unless otherwise required for the purposes of fulfilling any legal obligation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (b) You also have right to request us to update, amend, correct, complete or delete your Personal Data retained by us through email.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (c) We may also retain your Personal Data where necessary for compliance with a legal obligation applicable to NORA CHAMBERS, or in order to protect your interests.
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                4. Cookies
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small files transferred to the hard drive of your device that enable us to recognize your browser and capture and remember certain information. They are also used to help us understand your preferences based on previous or current activity on the Website, which allows us to improve our Website. We also use cookies to help us compile aggregated and anonymized data about the traffic on the Website so that we can offer better experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.
              </p>
            </motion.div>

            {/* Security */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                5. How do we protect your information
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  (a) We take the safety of your Personal Data and its confidentiality very seriously and we provide reasonable security safeguards commensurate to the sensitivity of the Personal Data being handled and have implemented security practices including but not limited to technical, operational and physical safeguards to protect your information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (b) The Website is scanned on a regular basis for any known vulnerabilities in order to make your use as safe as possible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (c) Your Personal Data is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                </p>
              </div>
            </motion.div>

            {/* Third Party Disclosures */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                6. Disclosures to third parties
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  (a) We do not sell, trade, publish or otherwise transfer your Personal Data to outside parties, unless we provide you with advance notice and obtain your prior consent to do so.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (b) This does not include our trusted service providers, including without limitation, our hosting partners, who assist us in operating the Website, conducting our business, or serving our clients.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (c) We may also release certain limited information when its release is required to comply with the law, enforce our policies, or protect ours or others' rights, property or safety.
                </p>
              </div>
            </motion.div>

            {/* Your Rights */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-8 h-8 text-primary mr-3" />
                7. Your Rights
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  (a) You may request us to confirm whether or not certain Personal Data belonging to you is being processed by NORA CHAMBERS, and if yes, seek access to such Personal Data.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (b) You also have the right to ensure that the Personal Data shared with us is accurate and complete.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (c) You also have the right to erase your Personal Data, subject to legal obligations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  (d) You may exercise your rights under this section in relation to your Personal Data by writing to us at our contact information below.
                </p>
              </div>
            </motion.div>

            {/* Links to other websites */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                8. Links to other websites
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The Website may include links to other Websites whose privacy practices may differ from ours. NORA CHAMBERS does not provide any Personal Data to such third party websites. If you submit your Personal Data to any of those sites, your information will be governed by their privacy statements. We encourage you to read the privacy statement of any website you visit.
              </p>
            </motion.div>

            {/* Grievance Officer */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 flex items-center">
                9. Who is the Grievance Officer?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you wish to report a security breach, have a problem that you are unable to resolve or otherwise require any other assistance in respect of the Website and this privacy policy, you may contact our Grievance Officer whose details are provided below:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-gray-900">Email:</p>
                      <p className="text-gray-700">contact@nora-chambers.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold text-gray-900">Telephone:</p>
                      <p className="text-gray-700">+91-11-XXXX-XXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-primary to-accent text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">Questions about our Privacy Policy?</h2>
              <p className="mb-6 opacity-90">
                If you have any questions or concerns about this privacy policy, please don't hesitate to contact us.
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