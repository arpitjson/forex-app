import Image from 'next/image'

export default function Ticketing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#1e3c72] mb-8">Ticketing</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <p className="mb-4">
              For conducting International Air Ticketing, BSR Forex is already an approved TRAVEL AGENT. 
              On International tours front, BSR Forex has obtained coveted membership of TAFI (Travel Agent Association of India).
              These tie ups have enabled BSR Forex to book Hotels anywhere in World and Air Ticketing online at very competitive prices.
            </p>
            
            <p className="mb-4">
              We provides the high class customer service and best rates in the market for all destinations.
            </p>
            
            <p>
              We provides Air Ticketing for all destinations, Domestic, International both
            </p>
          </div>
          <div className="w-64">
            <Image
              src="/placeholder.svg"
              alt="Airline Ticketing"
              width={256}
              height={256}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

