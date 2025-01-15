import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#1e3c72] mb-8">Our Services</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg"
                alt="Foreign Exchange"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-[#1e3c72] mb-2">Foreign Exchange</h1>
                <p className="text-gray-600 mb-2">
                  BSR Forex provides the high class customer service and best rates in the market for your any type of foreign exchange requirements.
                  Foreign Exchange from all countries through of Western Union.
                </p>
                <Link href="/foreign-exchange">
                  <Button variant="link" className="text-[#1e3c72] p-0 hover:text-blue-700">
                    READ MORE...
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg"
                alt="Ticketing"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-[#1e3c72] mb-2">Ticketing</h3>
                <p className="text-gray-600 mb-2">
                  For conducting International Air Ticketing, BSR Forex is already an approved TRAVEL AGENT.
                  We provide services for both domestic and international flights.
                </p>
                <Link href="/ticketing">
                  <Button variant="link" className="text-[#1e3c72] p-0 hover:text-blue-700">
                    READ MORE...
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg"
                alt="Travel Insurance"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-[#1e3c72] mb-2">Travel Insurance</h3>
                <p className="text-gray-600 mb-2">
                  All types of Overseas Medical insurance policies are available. We offer insurance from leading providers
                  with comprehensive coverage options.
                </p>
                <Link href="/travel-insurance">
                  <Button variant="link" className="text-[#1e3c72] p-0 hover:text-blue-700">
                    READ MORE...
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg"
                alt="Money Transfer"
                width={80}
                height={80}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-[#1e3c72] mb-2">Money Transfer</h3>
                <p className="text-gray-600 mb-2">
                  BSR Forex is Limited is approved as a sub partner of Western Union. Safe, Very Fast and So Easy to Money Transfer with any country.
                </p>
                <Button variant="link" className="text-[#1e3c72] p-0 hover:text-blue-700">
                  READ MORE...
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

