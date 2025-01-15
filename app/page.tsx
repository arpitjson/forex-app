import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { ServiceCard } from '@/components/service-card'
import { HeroCarousel } from '@/components/hero-carousel'
import EnquiryForm from '@/components/enquiry-form'

export default function Home() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />
      {/* Welcome Section */}
      {/* Welcome Section with Enquiry Side by Side */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Welcome Content */}
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold text-[#1e3c72] mb-6">Welcome To BSR Forex Pvt. Ltd.</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                BSR Forex Tours & Travels Pvt. Ltd. We are in Service Industry Since 2011 and our motto is to give the best and honest services to the
                  customer. We are RBI approved Full Flegeded Money Changer Since 2015, and located in the heart of India Delhi. We
                  not only Provide the Rates, but we also provide excellent services.
                </p>
              </div>
              
            </div>
            
            {/* Enquiry Form */}
            <div className="lg:w-1/2">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3c72] mt-8 mb-6 text-center">
                FULLY FLEDGE MONEY CHANGER
              </h2>
          <h2 className="text-2xl font-bold text-[#1e3c72] mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Foreign Exchange"
              icon={"/exchange-rate.png"}
              description="BSR Forex provides the high class customer service and best rates in the market for your any..."
              link="/foreign-exchange"
            />
            <ServiceCard
              title="Ticketing"
              icon="/flight-ticket.png"
              description="For conducting International Air Ticketing, BSR Forex is already an approved TRAVEL..."
              link="/ticketing"
            />
            <ServiceCard
              title="Travel Insurance"
              icon="/travel-insurance.png"
              description="All types of Overseas Medical insurance policies are available. We offer insurance from leading..."
              link="/travel-insurance"
            />
            <ServiceCard
              title="Money Transfer"
              icon="/money-transfer.png"
              description="BSR Forex is Limited is approved as a sub partner of Western Union.."
              link="/money-transfer"
            />
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3c72] text-center mb-8">OUR SUPPORTERS</h2>
          <div className="flex justify-center gap-8">
            {/* <Image
              src="/image/b2.jpg"
              alt="Western Union"
              width={200}
              height={100}
              className="object-contain"
            /> */}
            <Image
              src="/image/Western-Union.jpg"
              alt="Western Union"
              width={200}
              height={100}
              className="object-contain"
            />
            <Image
              src="/image/supporters-3.jpg"
              alt="Visa"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

