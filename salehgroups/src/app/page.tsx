"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";

export default function Home() {
  return (
    <div
      className="overflow-clip 
    inset-0 
    -z-10 h-full w-full bg-[#fafafa] 
    bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
    bg-[size:6rem_4rem]"
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-8 sticky md:mx-auto z-50 
  xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
  justify-between py-6 px-4 md:px-8 mx-6"
      >
        <div className="flex items-center">
          <Link href={"/"}>
            {/*}
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

        {/* Navbar Links */}
        <div className="hidden md:flex justify-center gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
          <Link href={"/showcase"} className="hover:text-blue-500">
            Testimonials
          </Link>
          <ScrollLink
            to="services"
            smooth={true}
            className="hover:text-blue-500"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="process"
            smooth={true}
            className="hover:text-blue-500"
          >
            Process
          </ScrollLink>
          <ScrollLink
            to="guarantees"
            smooth={true}
            className="hover:text-blue-500"
          >
            Guarantees
          </ScrollLink>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:613-784-0342" className="hidden lg:flex text-blue-500">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              613-784-0342
            </button>
          </a>
          <Link
            href={"/meeting"}
            className="px-8 py-0.5  
    border-2 border-black 
    dark:border-white '
    uppercase 
    hover:bg-[#abcbff] 
    text-black 
    transition duration-200 
    text-sm 
    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>
      <div
        className="absolute bottom-0 left-0 
      right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"
      ></div>
    </div>
  );
}
