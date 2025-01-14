import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Facebook, href: '#', color: '#3b5998' },
  { icon: Twitter, href: '#', color: '#1DA1F2' },
  { icon: Linkedin, href: '#', color: '#0077b5' },
  { icon: Youtube, href: '#', color: '#FF0000' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Services', href: '/services' },
  { name: 'Foreign Exchange', href: '/foreign-exchange' },
  { name: 'Ticketing', href: '/ticketing' },
  { name: 'Travel Insurance', href: '/travel-insurance' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer className="bg-[#1e3c72] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BSR%20forex-xNl5MyuY95KvvNbktSxWjzOa35HEZ0.png"
              alt="BSR Forex Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-sm">
              BSR Forex Tours & Travels Pvt. Ltd. Ltd. is a leading provider of foreign exchange and international money transfer services. RBI approved and committed to excellence since 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-blue-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">S-4, 2nd Floor, Office No. 202, Tyagi Arcade School Block, Shakarpur

Delhi-110092</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91-8527909240</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">sumit.rawat@bsrforex.in</span>
              </li>
            </ul>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`bg-white p-2 rounded-full hover:opacity-80 transition-opacity`}
                  style={{ color: social.color }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BSR Forex Tours & Travels Pvt. Ltd. Ltd. All rights reserved.</p>
          <p className="mt-2">Powered by Chandan & Team</p>
        </div>
      </div>
    </footer>
  )
}

