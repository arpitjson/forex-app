import Image from 'next/image'

export default function ForeignExchange() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#1e3c72] mb-8">Foreign Exchange</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <p className="mb-4">
              BSR Forex provides the high class customer service and best rates in the
              market for your any type of foreign exchange requirements.
            </p>
            <p className="mb-4">
              Foreign Exchange from all countries through of Western Union.
              We are one of the fastest growing, one stop Foreign Exchange Solutions Company in India
            </p>
            
            <h2 className="text-xl font-bold mb-4">We are providing Foreign Exchange services for</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Send Money Abroad</li>
              <li>Forex Sale</li>
              <li>Forex Purchase</li>
            </ul>
          </div>
          <div className="w-64">
            <Image
              src="/placeholder.svg"
              alt="Foreign Currencies"
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

