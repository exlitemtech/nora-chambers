'use client'

import { useState, useEffect } from 'react'

export default function FontSwitcher() {
  const [isGaramond, setIsGaramond] = useState(false)

  useEffect(() => {
    // Load saved font theme from localStorage
    const savedTheme = localStorage.getItem('fontTheme')
    const useGaramond = savedTheme === 'garamond'
    setIsGaramond(useGaramond)
    applyFontTheme(useGaramond)
  }, [])

  const applyFontTheme = (useGaramond: boolean) => {
    // Remove all font theme classes
    document.body.classList.remove('font-theme-inter', 'font-theme-garamond')
    
    // Add the selected font theme class
    if (useGaramond) {
      document.body.classList.add('font-theme-garamond')
    } else {
      document.body.classList.add('font-theme-inter')
    }
  }

  const toggleFont = () => {
    const newValue = !isGaramond
    setIsGaramond(newValue)
    localStorage.setItem('fontTheme', newValue ? 'garamond' : 'inter')
    applyFontTheme(newValue)
  }

  return (
    <div className="flex items-center space-x-2">
      <span className={`text-xs font-medium transition-colors ${
        !isGaramond ? 'text-primary' : 'text-gray-500'
      }`}>
        Inter
      </span>
      <button
        onClick={toggleFont}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
          isGaramond ? 'bg-primary' : 'bg-gray-300'
        }`}
        role="switch"
        aria-checked={isGaramond}
        aria-label="Toggle between Inter and Garamond fonts"
        title="Font Switcher"
      >
        <span className="sr-only">Toggle font theme</span>
        <span
          className={`${
            isGaramond ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform`}
        />
      </button>
      <span className={`text-xs font-medium transition-colors ${
        isGaramond ? 'text-primary' : 'text-gray-500'
      }`}>
        Garamond
      </span>
    </div>
  )
}