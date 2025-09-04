'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Disclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)

  useEffect(() => {
    // Check if user has already agreed to the disclaimer
    const userConsent = localStorage.getItem('userConsent')
    if (userConsent !== 'true') {
      setShowDisclaimer(true)
    }
  }, [])

  const handleAgree = () => {
    localStorage.setItem('userConsent', 'true')
    setShowDisclaimer(false)
  }

  return (
    <AnimatePresence>
      {showDisclaimer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto overflow-y-auto"
            style={{ maxHeight: '95%' }}
          >
            <Card className="border-0 shadow-2xl bg-white relative rounded-none">
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-3xl font-bold text-gray-900">
                    Disclaimer
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-2 px-8">
                <div className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  <p>
                    The Bar Council of India does not permit advertisement or solicitation by advocates in any form or manner. By accessing this website, <a href="https://www.norachambers.in" target="_blank" className="text-primary hover:text-primary/80 font-medium">www.norachambers.in</a>, you acknowledge and confirm that you are seeking information relating to Nora Chambers of your own accord and that there has been no form of solicitation, advertisement or inducement by Nora Chambers or its members. The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Nora Chambers shall not be liable for consequences of any action taken by relying on the material/information provided on this website. The contents of this website are the intellectual property of Nora Chambers.
                  </p>

                  <p>
                    By clicking "I Agree", you acknowledge that you have read and understood this disclaimer.
                  </p>

                  <p>
                  Please read and accept our website’s
                  <Link 
                      href="/terms-conditions" 
                      className="text-primary mx-1 hover:text-primary/80 font-medium"
                      target="_blank"
                    >
                      Terms of Use
                    </Link>
                    and
                    <Link 
                      href="/privacy-policy" 
                      className="text-primary mx-1 hover:text-primary/80 font-medium"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>
                  </p>  
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button 
                    onClick={handleAgree}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    <CheckCircle className="w-5 h-5 mr-2" />
                    I Agree
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}