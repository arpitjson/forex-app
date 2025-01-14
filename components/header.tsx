import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white py-2 border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
        <div>
            <Image
              src="BSR-forex.png"
              alt="BSR Forex Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <div className="text-sm font-semibold text-[#1e3c72]">(Authorised by Reserve Bank of India)</div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <a href="#" className="bg-[#3b5998] p-1.5 rounded">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-[#1DA1F2] p-1.5 rounded">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-[#0077b5] p-1.5 rounded">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-[#FF0000] p-1.5 rounded">
                <Youtube className="h-4 w-4 text-white" />
              </a>
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4 text-[#1e3c72]" />
                <span>+91-8527909240</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-4 w-4 text-[#1e3c72]" />
                <span>sumit.rawat@bsrforex.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

