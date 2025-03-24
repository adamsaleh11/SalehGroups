import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";

const features = [
  {
    icon: "/icons/fast.svg",
    title: "Fast Delivery",
    description:
      "1-2 weeks delivery for most projects. Call us for more information.",
  },
  {
    icon: "/icons/design.svg",
    title: "Design & Development",
    description:
      "We design and develop your website with the latest technologies and trends.",
  },
  {
    icon: "/icons/scalable.svg",
    title: "Scalability + Maintenance ",
    description: "We offer maintenance and scalability for all websites.",
  },
  {
    icon: "/icons/team.svg",
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: "/icons/safe.svg",
    title: "Secure Building",
    description:
      "Safe and secure building practices. To ensure your data is safe.",
  },
  {
    icon: "/icons/analytics.svg",
    title: "Analytics Tracking",
    description: "Track your progress with our built in analytics",
  },

  {
    icon: "/icons/flexible.svg",
    title: "Dynamic Websites",
    description: "We build dynamic solutions that are easy to manage.",
  },
  {
    icon: "/icons/support.svg",
    title: "24/7 Support",
    description:
      "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: "/icons/money.svg",
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-sky-100 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="z-10 text-3xl md:text-5xl text-center tracking-tight font-semibold text-black">
        Our guarantees to you.
      </h2>
      <p className="text-center text-lg md:text-2xl text-neutral-400 mt-4 max-w-2xl z-10">
        We ensure the highest quality of work, with the fastest delivery times.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 z-10 w-full max-w-6xl px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-6 md:p-8 bg-neutral-800 rounded-2xl text-white shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-gradient-to-br from-neutral-700 to-neutral-800 mb-4">
              <Image
                src={feature.icon}
                width={32}
                height={32}
                alt={`${feature.title} icon`}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-neutral-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
