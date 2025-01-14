import Image from 'next/image'

export default function TravelInsurance() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#1e3c72] mb-8">Travel Insurance</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex gap-8">
          <div className="flex-1">
            <ul className="space-y-4">
              <li>• All types of Overseas Medical insurance policies are available</li>
              <li>• We offer insurance from leading and customer</li>
              <li>• Choose from different types of coverage as per your requirement.</li>
              <li>• Policies are available according to the requirement of client and we give them specific plans as per requirement.</li>
              <li>• Premium of policies is the minimum with higher coverage with the minimum terms and conditions.</li>
            </ul>
          </div>
          <div className="w-64">
            <Image
              src="/placeholder.svg"
              alt="Travel Insurance"
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

