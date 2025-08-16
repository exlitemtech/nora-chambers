'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ToggleLeft, ToggleRight } from 'lucide-react'

interface VersionSwitcherProps {
  onVersionChange: (version: 'original' | 'combined') => void
}

const VersionSwitcher = ({ onVersionChange }: VersionSwitcherProps) => {
  const [version, setVersion] = useState<'original' | 'combined'>('original')

  useEffect(() => {
    const savedVersion = localStorage.getItem('homepage-version') as 'original' | 'combined'
    if (savedVersion) {
      setVersion(savedVersion)
      onVersionChange(savedVersion)
    }
  }, [onVersionChange])

  const handleToggle = () => {
    const newVersion = version === 'original' ? 'combined' : 'original'
    setVersion(newVersion)
    localStorage.setItem('homepage-version', newVersion)
    onVersionChange(newVersion)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-16 md:top-20 right-2 md:right-4 z-40 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-2 md:p-3"
    >
      <div className="flex items-center space-x-2 md:space-x-3">
        <span className="text-xs md:text-sm font-medium text-gray-700 hidden md:block">
          {version === 'original' ? 'Multi-page' : 'Single-page'}
        </span>
        <button
          onClick={handleToggle}
          className="relative flex items-center transition-colors duration-200"
          aria-label="Toggle homepage version"
        >
          {version === 'original' ? (
            <ToggleLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-primary transition-colors" />
          ) : (
            <ToggleRight className="w-6 h-6 md:w-8 md:h-8 text-primary hover:text-accent transition-colors" />
          )}
        </button>
        <span className="text-xs md:text-sm font-medium text-gray-700 hidden md:block">
          {version === 'combined' ? 'Single-page' : 'Multi-page'}
        </span>
      </div>
      <div className="text-xs text-gray-500 mt-1 text-center">
        {version === 'original' ? 'Multi' : 'Single'}
      </div>
    </motion.div>
  )
}

export default VersionSwitcher