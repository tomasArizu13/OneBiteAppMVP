import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OneBite</h3>
            <p className="text-neutral-400 mb-4">
              Exclusive access to premium dining experiences for discerning food enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/restaurants" className="text-neutral-400 hover:text-white transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-neutral-400 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-neutral-400 hover:text-white transition-colors">
                  Rewards Program
                </Link>
              </li>
              <li>
                <Link href="/premium" className="text-neutral-400 hover:text-white transition-colors">
                  Premium Membership
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-neutral-400 hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-neutral-400 hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-neutral-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} OneBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
