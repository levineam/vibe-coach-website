'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d2d2d] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-brand">
            <span>VC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-sm font-medium text-gray-300 hover:text-brand transition">
              Services
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-gray-300 hover:text-brand transition">
              How It Works
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-brand transition">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-300 hover:text-brand transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-brand text-[#0a0a0a] font-medium hover:bg-[#ea580c] transition"
            >
              Book a Call
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-brand transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/services" className="block py-2 text-sm font-medium text-gray-300 hover:text-brand">
              Services
            </Link>
            <Link href="/how-it-works" className="block py-2 text-sm font-medium text-gray-300 hover:text-brand">
              How It Works
            </Link>
            <Link href="/about" className="block py-2 text-sm font-medium text-gray-300 hover:text-brand">
              About
            </Link>
            <Link href="/contact" className="block py-2 text-sm font-medium text-gray-300 hover:text-brand">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center px-6 py-2 rounded-lg bg-brand text-[#0a0a0a] font-medium hover:bg-[#ea580c] transition"
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
