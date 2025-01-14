'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function EnquiryForm() {
  return (
    <div className="w-full">
      <div className="bg-[#1e3c72] text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Enquiry</h2>
      </div>
      <Card className="rounded-t-none">
        <CardContent className="p-6">
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Name*" className="border-gray-300" required />
            </div>
            <div>
              <Input type="email" placeholder="Email id*" className="border-gray-300" required />
            </div>
            <div>
              <Input type="tel" placeholder="Mobile No.*" className="border-gray-300" required />
            </div>
            <div>
              <Textarea placeholder="Message" className="border-gray-300 min-h-[100px]" />
            </div>
            <Button type="submit" className="w-full bg-[#1e3c72] hover:bg-[#2a5298]">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

