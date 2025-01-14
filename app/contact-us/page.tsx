import { Card } from "@/components/ui/card";
import { HeroCarousel } from "@/components/hero-carousel";
import EnquiryForm from "@/components/enquiry-form";

export default function ContactUs() {
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
              <h2 className="text-2xl font-bold text-[#1e3c72] mb-6">
                Contact Us
              </h2>
              <div className="space-y-4">
                <h2 className="text-xl font-bold">BSR Forex Tours & Travels Pvt. Ltd.</h2>
                <div>
                  <strong>Address:</strong>
                  <p>S-4, 2nd Floor, Office No. 202, Tyagi Arcade School Block, Shakarpur</p>
                  <p>Delhi-110092</p>
                </div>
                <div>
                  <strong>Contact No:</strong>
                  <p>011-43057476</p>
                </div>
                <div>
                  <strong>Mobile No's.:</strong>
                  <p>8527909240, 9871016033, 9872362868</p>
                </div>
                <div>
                  <strong>Email Id:</strong>
                  <p>sumit.rawat@bsrforex.in</p>
                </div>
                <div>
                  <strong>Website:</strong>
                  <p>www.bsrforex.in</p>
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
