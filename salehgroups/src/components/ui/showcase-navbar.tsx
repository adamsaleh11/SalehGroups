"use client";
import Link from "next/link";
import { useState } from "react";
import { PiList as PiMenuBold, PiX as PiXBold } from "react-icons/pi";

const ShowcaseNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="sticky top-0 z-50 
      bg-white flex items-center justify-between 
      py-6 px-4 md:px-8 mx-auto w-full 
      border-b border-gray-200 shadow-sm"
    >
      {/* Left Side (Logo placeholder) */}
      <div className="flex items-center">
        <Link href={"/"}>
          {/* 
          <Image
            src={"/logo/logo.png"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-28"
          /> 
          */}
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? <PiXBold /> : <PiMenuBold />}
        </button>
      </div>

      {/* Desktop Center Links */}
      <div className="hidden md:flex justify-center gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
        <Link href={"/showcase"} className="hover:text-blue-500">
          Testimonials
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Services
        </Link>
        <Link href="/" className="hover:text-blue-500">
          Guarantees
        </Link>
        <Link href={"/products"} className="hover:text-blue-500">
          Products
        </Link>
      </div>

      {/* Right Side CTA Buttons */}
      <div className="flex items-center gap-x-4">
        <a href="tel:613-784-0342" className="hidden lg:flex text-blue-500">
          <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
            (613)-784-0342
          </button>
        </a>
        <Link
          href={"/meeting"}
          className="px-8 py-0.5  
            border-2 border-black 
            dark:border-white 
            uppercase 
            hover:bg-[#abcbff] 
            text-black 
            transition duration-200 
            text-sm 
            hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
            dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book a call
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <Link
              href={"/showcase"}
              className="hover:text-blue-500"
              onClick={toggleMobileMenu}
            >
              Testimonials
            </Link>
            <Link
              href="/"
              className="hover:text-blue-500"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              href="/"
              className="hover:text-blue-500"
              onClick={toggleMobileMenu}
            >
              Guarantees
            </Link>
            <Link
              href={"/products"}
              className="hover:text-blue-500"
              onClick={toggleMobileMenu}
            >
              Products
            </Link>
            <a
              href="tel:613-784-0342"
              className="text-blue-500"
              onClick={toggleMobileMenu}
            >
              (613)-784-0342
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowcaseNavbar;
