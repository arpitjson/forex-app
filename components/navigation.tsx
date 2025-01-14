'use client'

import Link from 'next/link'
import { useState } from 'react'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about-us",
  },
  {
    title: "Our Services",
    href: "/services",
    children: [
      {
        title: "Foreign Exchange",
        href: "/foreign-exchange",
        description: "Best rates for foreign currency exchange services",
      },
      {
        title: "Money Transfer",
        href: "/money-transfer",
        description: "Fast and secure international money transfers",
      },
      {
        title: "Travel Insurance",
        href: "/travel-insurance",
        description: "Comprehensive travel insurance coverage",
      },
      {
        title: "Ticketing",
        href: "/ticketing",
        description: "International and domestic flight bookings",
      },
    ],
  },
  // {
  //   title: "Foreign Exchange",
  //   href: "/foreign-exchange",
  // },
  // {
  //   title: "Ticketing",
  //   href: "/ticketing",
  // },
  // {
  //   title: "Travel Insurance",
  //   href: "/travel-insurance",
  // },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#1e3c72] sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:block py-4">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="gap-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.children.map((child) => (
                            <li key={child.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{child.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent text-white hover:bg-white/10 hover:text-white py-3"
                      )}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between py-6">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-[#1e3c72] text-white">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                      <div className="space-y-4">
                        <div className="font-medium text-lg">{item.title}</div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-2 hover:text-white/80 transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 font-medium text-lg hover:text-white/80 transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-white font-medium">Menu</span>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
      </div>
    </nav>
  )
}

