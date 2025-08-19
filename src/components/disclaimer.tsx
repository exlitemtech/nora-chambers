'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertTriangle, CheckCircle } from 'lucide-react'
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
            className="w-full max-w-2xl mx-auto"
          >
            <Card className="border-0 shadow-2xl bg-white relative">
              <CardHeader className="text-center pb-4 pt-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-serif font-bold text-gray-900">
                    Disclaimer
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 px-8 pb-8">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-base">
                    Welcome to Nora Chambers. Before you proceed, please read and acknowledge the following important information:
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        <strong>Legal Information Only:</strong> The content on this website is for informational purposes only and does not constitute legal advice.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        <strong>No Attorney-Client Relationship:</strong> Viewing this website does not create an attorney-client relationship between you and Nora Chambers.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        <strong>Consultation Required:</strong> For specific legal advice, please schedule a consultation with our legal professionals.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        <strong>Accuracy:</strong> While we strive for accuracy, legal information may change and should not be relied upon without professional consultation.
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p>
                        <strong>Confidentiality:</strong> Information shared through this website is not confidential and should not contain sensitive details.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-base font-medium text-gray-800">
                    By clicking "I Agree", you acknowledge that you have read and understood this disclaimer.
                  </p>

                  <p className="text-sm text-gray-600">
                  Please read and accept our website’s {''}
                    <Link 
                      href="/privacy-policy" 
                      className="text-primary hover:text-primary/80 font-medium"
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