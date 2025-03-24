"use client";

import { HyperText } from "@/components/magicui/hyper-text";
import ShowcaseNavbar from "@/components/ui/showcase-navbar";

export default function Products() {
  return (
    <div
      className="relative min-h-screen w-full overflow-clip bg-[#fafafa]
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
           linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
      bg-[size:6rem_4rem]"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)] z-0"></div>

      {/* Navbar */}
      <div className="relative z-50">
        <ShowcaseNavbar />
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <HyperText className="text-5xl md:text-6xl text-black dark:text-white">
          Coming Soon!
        </HyperText>
      </div>
    </div>
  );
}
