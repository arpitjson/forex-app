import EnquiryForm from "@/components/enquiry-form";
import { HeroCarousel } from "@/components/hero-carousel";
import Image from "next/image";

export default function Ticketing() {
  return (
    <div>
      {/* Hero Carousel */}
      <HeroCarousel />
      {/* Welcome Section with Enquiry Side by Side */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Us */}
            <div className="lg:w-2/3">
              <h1 className="text-2xl font-bold text-[#1e3c72] mb-6">
                Money Transfer
              </h1>
              <div className="rounded-lg  mb-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <h2>
                      BSR Forex Tours & Travels Limited is an Authorized
                      Sub-Agent of Western Union
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        • We are an RBI-approved Full-Fledged Money Changer
                        (FFMC)
                      </li>
                      <li>
                        • Secure, swift, and convenient international money
                        transfer services
                      </li>
                      <li>
                        • No service charges for receiving money transfers
                      </li>
                      <li>
                        • No bank account required for receiving money transfers
                      </li>
                      <li>
                        • Facilitate worldwide money transfers to and from any
                        country
                      </li>
                    </ul>
                  </div>
                  <div className="w-64 mt-12">
                    <Image
                      src="/money-transfer.png"
                      alt="Travel Insurance"
                      width={256}
                      height={256}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:w-1/2">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
