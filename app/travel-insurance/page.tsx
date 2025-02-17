import EnquiryForm from "@/components/enquiry-form";
import { HeroCarousel } from "@/components/hero-carousel";
import Image from "next/image";

export default function TravelInsurance() {
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
                Travel Insurance
              </h1>
              <div className="rounded-lg  mb-8">
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <ul className="space-y-4">
                      <li>
                        • All types of Overseas Medical insurance policies are
                        available
                      </li>
                      <li>• We offer insurance from leading and customer</li>
                      <li>
                        • Choose from different types of coverage as per your
                        requirement.
                      </li>
                      <li>
                        • Policies are available according to the requirement of
                        client and we give them specific plans as per
                        requirement.
                      </li>
                      <li>
                        • Premium of policies is the minimum with higher
                        coverage with the minimum terms and conditions.
                      </li>
                    </ul>
                  </div>
                  <div className="w-64 mt-12">
                    <Image
                      src="/travel-insurance.png"
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
