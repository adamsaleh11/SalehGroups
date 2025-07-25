import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/YOSU.png",
    title: "Youth Ontario Sports Universe",
    link: "https://yuso.vercel.app",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/QUARANCLASS.png",
    title: "Barrhaven Quaran Teachings",
    link: "https://syed-quaran-class.vercel.app",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/fernandezperformance.png",
    title: "Fernandez Fitness",
    link: "https://www.fernandezfitness.com",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/falconecarpentry.png",
    title: "Falcone Carpentry",
    link: "https://falconecarpentry.vercel.app",
  },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
