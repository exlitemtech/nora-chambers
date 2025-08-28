'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

   // Handle click outside to close dropdowns
   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHoveredItem(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navItems = [
    { href: '/', label: 'About' },
    { href: '/team', label: 'Team', 
      children:[
        { href: '/team#partners', label: 'Partners' },
        { href: '/team#associates', label: 'Associates' },
      ]
    },
    { href: '/practice-areas', label: 'Practice Areas' },
    { href: '/awards', label: 'Awards & Recognition' },
    // { href: '/news', label: 'News' },
    // { href: '/blog', label: 'Blog' },
    // { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ]

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }  

  const closeMobileMenu = () => {
    setIsOpen(false)
    setExpandedItems([])
  }

  const handleMouseEnter = (label: string) => {
    setHoveredItem(label)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-accent shadow-lg py-2' : 'bg-accent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
              <Image
                src="/pictures/logos/Nora-Chambers-Final-Logo-Icon.png"
                alt="Nora Chambers"
                width={48}
                height={48}
                className={`transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-12 w-12'}`}
              />
              <div className="hidden md:flex items-center space-x-3">
                <div className="w-px h-8 bg-gray-400"></div>
                <h3 className="text-xl font-bold text-white">
                  Nora Chambers
                </h3>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block" ref={dropdownRef}>
            <ul className="flex space-x-8 items-baseline">
              {navItems.map((item, index) => (
                <li key={index} className="relative">
                  {item.children ? (
                    <div
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                      className="relative"
                    >
                      <button className="text-gray-300 hover:text-white px-3 py-1 text-sm font-medium transition-all duration-200 relative group flex items-center space-x-1">
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </button>
                      
                      {/* Dropdown Content */}
                      <AnimatePresence>
                        {hoveredItem === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                          >
                            <div className="py-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                                  onClick={()=> setHoveredItem(null)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 bg-accent border-t border-gray-700 mt-2">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className="w-full"
                    >
                      {item.children ? (
                        <div>
                          <button
                            onClick={() => toggleExpanded(item.label)}
                            className="w-full flex items-center justify-between text-gray-300 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md text-base font-medium transition-all text-left bg-transparent"
                          >
                            {item.label}
                            <ChevronDown 
                              className={`w-4 h-4 transition-transform duration-200 ${
                                expandedItems.includes(item.label) ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {expandedItems.includes(item.label) && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-1 space-y-1"
                              >
                                {item.children.map((child) => (
                                  <motion.li
                                    key={child.href}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                  >
                                    <Link
                                      href={child.href}
                                      className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200"
                                      onClick={closeMobileMenu}
                                    >
                                      {child.label}
                                    </Link>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium transition-all w-full text-left"
                          onClick={closeMobileMenu}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation