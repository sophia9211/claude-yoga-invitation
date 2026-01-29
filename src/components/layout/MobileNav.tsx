'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-[#FAF8F5] shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <span className="text-lg font-semibold text-[#5B7C6C]">Menu</span>
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[#5B7C6C]"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-gray-100 py-3 text-gray-700 transition-colors hover:text-[#5B7C6C]"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}

          {/* Book Now Button */}
          <Link
            href="/book"
            className="mt-6 rounded-full bg-[#5B7C6C] px-6 py-3 text-center font-medium text-white transition-colors hover:bg-[#4a6659]"
            onClick={onClose}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
