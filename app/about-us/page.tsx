import EnquiryForm from "@/components/enquiry-form";
import { HeroCarousel } from "@/components/hero-carousel";
import Image from "next/image";

export default function AboutUs() {
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
                Contact Us
              </h1>
              <div className="rounded-lg  mb-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Company Profile</h2>
                    <p className="mb-4 text-justify">
                      <strong>BSR Forex Tours & Travels Pvt. Ltd.</strong> We are in Service Industry Since 2011
                      and our motto is to give the best and honest services to
                      the customer. We are RBI approved Full Flegeded Money
                      Changer Since 2011, and located in the heart of India
                      Delhi. We not only Provide the Rates, but we also provide
                      excellent services.
                    </p>
                    <p className="mb-4 text-justify">
                      <strong>BSR Forex Tours & Travels Pvt. Ltd.</strong> is one of the fastest growing, one
                      stop Forex, Travel Solutions Company catering to every
                      form of travel related needs. We provide the best value to
                      our customers by providing more control, more choice and
                      more savings in their travel planning. We work closely
                      with each client, customizing a portfolio of invaluable
                      insider information.
                    </p>
                  </div>
                  <div className="w-64 mt-12">
                    <Image
                      src="/image/about_us.jpg"
                      alt="About Us"
                      width={256}
                      height={256}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="rounded-lg">
                  <p className="mb-4"><strong>BSR Forex Tours & Travels Pvt. Ltd.</strong> has begun from a lifelong passion for world exploration and firsthand experience of different clusters,   a fascination of traditions, and appreciation for ways of life. It is through this heartfelt world appreciation that we are able to pass on in-depth knowledge, specially travel passion and enthusiasm to my friends. You have the convenience to order your forex exchange, requirements online by click the enquiry link below and we will be pleased to deliver it to your doorstep. Make BSR Forex Tours & Travels Pvt. Ltd. first choice for all forex needs and other travel products.</p>
                  
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
