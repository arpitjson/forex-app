import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  icon: string
  description: string
  link: string
}

export function ServiceCard({ title, icon, description, link }: ServiceCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <Image
            src={icon}
            alt={title}
            width={60}
            height={60}
            className="object-contain"
          />
          <div>
            <h3 className="text-xl font-bold text-[#1e3c72] mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{description}</p>
            <Link href={link}>
              <Button variant="link" className="text-[#1e3c72] p-0 hover:text-blue-700">
                READ MORE...
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

