"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50  bg-neutral-/10 border-b border-gray-50/10  backdrop-blur-md  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/">
            <div className="text-2xl md:text-3xl font-bold text-amber-300   ">
              Uniweb IT Solutions
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-foreground hover:text-yellow-300  text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-yellow-300   text-sm font-medium"
            >
              Company
            </Link>
            <Link
              href="#"
              className="text-foreground hover:text-yellow-300   text-sm font-medium"
            >
              Works
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              //   variant="default"
              className="bg-yellow-300 p-2 rounded hover:bg-yellow-500/90 text-black"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t  border-gray-50/10">
            <div className="px-2 pt-2 pb-3 flex flex-col  items-center  space-y-1">
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                Enterprise
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="block px-3 py-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                FAQ
              </Link>
              <button className="w-full mt-4 rounded max-w-max px-2 py-1 bg-yellow-300 hover:bg-accent/90 text-black  ">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
