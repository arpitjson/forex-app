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
                Ticketing
              </h1>
              <div className="rounded-lg  mb-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <p className="mb-4">
                      For conducting International Air Ticketing, BSR Forex is
                      already an approved TRAVEL AGENT. On International tours
                      front, BSR Forex has obtained coveted membership of TAFI
                      (Travel Agent Association of India). These tie ups have
                      enabled BSR Forex to book Hotels anywhere in World and Air
                      Ticketing online at very competitive prices.
                    </p>

                    <p className="mb-4">
                      We provides the high class customer service and best rates
                      in the market for all destinations.
                    </p>

                    <p>
                      We provides Air Ticketing for all destinations, Domestic,
                      International both
                    </p>
                  </div>
                  <div className="w-64 mt-12">
                    <Image
                      src="/traval_image.jpg"
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
