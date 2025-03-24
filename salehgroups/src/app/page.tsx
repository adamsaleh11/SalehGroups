"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { CoverDemo } from "@/components/demos/cover-demo";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { PiCheckBold } from "react-icons/pi";
import { AnimatedBeamDemo } from "@/components/demos/animated-beam-demo";
import { BoxRevealDemo } from "@/components/demos/box-reveal-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "AI & Automation Solutions",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "SaaS & Cloud Solutions",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Digital Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_2.png",
    title: "Business Intelligence & Analytics",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

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
        className="sticky top-0 z-50 
    bg-white flex items-center justify-between 
    py-6 px-4 md:px-8 mx-auto w-full 
    border-b border-gray-200 shadow-sm"
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
              (613)-784-0342
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
      <main className="md:pb-10">
        <div
          className="absolute bottom-0 left-0 
        right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"
        ></div>

        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-68% md:mx-auto mt-14">
          <h1>
            <CoverDemo />
          </h1>

          <div className="flex flex-col justify-center items-center mt-6">
            <p className="text-center text-xl md:text-2xl text-gray-500 max-w-2xl">
              We help businesses grow their technical infrastructure by
              providing them with the tools they need to succeed.
            </p>
          </div>

          <div className="flex justify-center items-center gap-x-4 mt-8 relative z-10">
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
                hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a call
            </Link>
            <Link
              href={"/showcase"}
              className="px-8 py-0.5  
                border-2 border-black 
                dark:border-white '
                uppercase 
                hover:bg-[#abcbff] 
                text-black 
                transition duration-200 
                text-sm 
                hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Testimonials
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design & Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                AI & Automation Solutions
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                SaaS & Cloud Solutions
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Digital & Email Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Business Intelligence & Analytics
              </p>
            </BoxReveal>
          </div>
        </div>
      </main>
      <Element name="services">
        <div className="w-full px-6 md:px-0 mx-auto max-w-7xl">
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business grow and
            succeed. We offer a wide range of services to help you achieve your
            goals.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center text-center bg-gray-100 rounded-xl p-6 hover:scale-[1.02] transition-transform"
              >
                <Image
                  src={service.icon}
                  width={80}
                  height={80}
                  alt={service.title}
                  className="mb-4 object-contain"
                />
                <h2 className="text-lg font-semibold text-black">
                  {service.title}
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
      <Element name="guarantees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>
      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium "></h1>
          <p className="text-left  text-xl  text-gray-500">(613) 784 0343</p>
          <p className="text-left  text-xl  text-gray-500">
            adamsaleh0824@gmail.com
          </p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-x-2 mt-10 text-center text-gray-500 text-sm">
          © 2025 Saleh Groups. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
