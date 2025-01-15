import EnquiryForm from "@/components/enquiry-form";
import { HeroCarousel } from "@/components/hero-carousel";
import Image from "next/image";

export default function ForeignExchange() {
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
                Foreign Exchange
              </h1>
              <div className="rounded-lg  mb-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <p className="mb-4">
                      BSR Forex provides the high class customer service and
                      best rates in the market for your any type of foreign
                      exchange requirements.
                    </p>
                    <p className="mb-4">
                      Foreign Exchange from all countries through of Western
                      Union. We are one of the fastest growing, one stop Foreign
                      Exchange Solutions Company in India
                    </p>

                    <h2 className="text-xl font-bold mb-4">
                      We are providing Foreign Exchange services for
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Send Money Abroad</li>
                      <li>Forex Sale</li>
                      <li>Forex Purchase</li>
                    </ul>
                  </div>
                  <div className="w-64 mt-12">
                  <Image
                    src="/foreign-exchange-img.jpg"
                    alt="About Us"
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
