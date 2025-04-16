"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="w-full px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
          <img
         src="/images/onebite-logo.png" // O la ruta que uses
         alt="OneBite Logo" 
         className="h-12 w-auto"
        />
        </Link>

        
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12 md:font-bold">
            <Link href="/restaurants" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Restaurants
            </Link>
            <Link href="/experiences" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Experiences
            </Link>
            <Link href="/rewards" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Rewards
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-amber-600 transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-neutral-700 hover:text-amber-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link href="/login">
              <Button variant="ghost" className="text-neutral-700 hover:text-amber-600">
                <User className="h-5 w-5 mr-2" />
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <span className="font-bold text-xl">OneBite</span>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col space-y-4 py-6">
                    <Link href="/restaurants" className="text-lg font-medium">
                      Restaurants
                    </Link>
                    <Link href="/experiences" className="text-lg font-medium">
                      Experiences
                    </Link>
                    <Link href="/rewards" className="text-lg font-medium">
                      Rewards
                    </Link>
                    <Link href="/about" className="text-lg font-medium">
                      About
                    </Link>
                  </nav>
                  <div className="mt-auto space-y-4 py-6 border-t">
                    <Link href="/login" className="block">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/signup" className="block">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">Sign Up</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-neutral-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <Input placeholder="Search restaurants, cuisines, or experiences..." className="pl-10 w-full" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
