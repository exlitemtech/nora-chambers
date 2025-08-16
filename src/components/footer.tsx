import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const practiceAreas = [
    { name: 'Arbitration & Dispute Resolution', href: '/services' },
    { name: 'Corporate Advisory', href: '/services' },
    { name: 'Tax & Economic Offences', href: '/services' },
    { name: 'Securities Law', href: '/services' },
    { name: 'Corporate Insolvency', href: '/services' },
    { name: 'Technology & IP', href: '/services' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Partners', href: '/about#partners' },
    { name: 'Careers', href: '/careers' },
    { name: 'News & Insights', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/pictures/logos/Nora-Chambers-Final-Logo-Icon.png"
                alt="Nora Chambers"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <div className="w-px h-8 bg-gray-400"></div>
              <div className="text-xl font-serif font-bold text-white">
                Nora Chambers
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Award-winning boutique law firm based in New Delhi specialising in dispute resolution and general corporate advisory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="mailto:info@norachambers.com" className="text-gray-300 hover:text-white transition-colors">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link 
                    href={area.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="text-gray-300 space-y-3 text-sm">
              <p className="flex items-start">
                <span className="font-medium mr-2">Address:</span>
                <span>New Delhi, India</span>
              </p>
              <p className="flex items-start">
                <span className="font-medium mr-2">Email:</span>
                <a href="mailto:info@norachambers.com" className="hover:text-white transition-colors">
                  info@norachambers.com
                </a>
              </p>
              <p className="flex items-start">
                <span className="font-medium mr-2">Phone:</span>
                <a href="tel:+911100000000" className="hover:text-white transition-colors">
                  +91 11 XXXX XXXX
                </a>
              </p>
              <p className="flex items-start">
                <span className="font-medium mr-2">Hours:</span>
                <span>Mon-Fri 9AM-6PM</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Nora Chambers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer