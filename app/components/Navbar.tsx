'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SCHOOL_NAME } from '../constants';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#025464] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src="/images/logo.png" alt="Sankofa Academy Logo" width={40} height={40} className="rounded-none" priority />
            </Link>
            <Link href="/" className="text-white text-2xl font-bold">
              {SCHOOL_NAME}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-white hover:bg-[#E57C23] px-3 py-2 rounded-md transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:bg-[#E57C23] px-3 py-2 rounded-md transition-colors">
                About
              </Link>
              <Link href="/academics" className="text-white hover:bg-[#E57C23] px-3 py-2 rounded-md transition-colors">
                Academics
              </Link>
              <Link href="/admissions" className="text-white hover:bg-[#E57C23] px-3 py-2 rounded-md transition-colors">
                Admissions
              </Link>
              <Link href="/campus-life" className="text-white hover:bg-[#E57C23] px-3 py-2 rounded-md transition-colors">
                Campus Life
              </Link>
              <Link href="/contact" className="bg-[#E57C23] text-white hover:bg-[#E8AA42] px-4 py-2 rounded-md transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#E57C23] focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#025464]/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white block px-3 py-2 rounded-md hover:bg-[#E57C23] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white block px-3 py-2 rounded-md hover:bg-[#E57C23] transition-colors">
              About
            </Link>
            <Link href="/academics" className="text-white block px-3 py-2 rounded-md hover:bg-[#E57C23] transition-colors">
              Academics
            </Link>
            <Link href="/admissions" className="text-white block px-3 py-2 rounded-md hover:bg-[#E57C23] transition-colors">
              Admissions
            </Link>
            <Link href="/campus-life" className="text-white block px-3 py-2 rounded-md hover:bg-[#E57C23] transition-colors">
              Campus Life
            </Link>
            <Link href="/contact" className="bg-[#E57C23] text-white block px-3 py-2 rounded-md hover:bg-[#E8AA42] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 