'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

const slides = [
  {
    image: "/image/b5.jpg",
    title: "Send Money Online",
    features: [
      "Fast and convenient",
      "Low fees and great exchange rates",
      "Safe and secure"
    ]
  },
  {
    image: "/image/b1.jpg",
    title: "Foreign Exchange",
    features: [
      "Best market rates",
      "RBI approved exchange",
      "Multiple currencies"
    ]
  },
  {
    image: "/image/b3.jpg",
    title: "Travel Services",
    features: [
      "International ticketing",
      "Travel insurance",
      "24/7 support"
    ]
  }
  
]

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3c72]/90 to-transparent">
                <div className="container mx-auto px-4 h-full flex items-center">
                  <div className="max-w-xl text-white">
                    <h2 className="text-5xl font-bold mb-6">{slide.title}</h2>
                    <ul className="space-y-4">
                      {slide.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-xl">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  )
}

