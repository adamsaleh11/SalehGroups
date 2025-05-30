import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-4xl 
      md:text-4xl lg:text-6xl 
      font-semibold max-w-7xl 
      mx-auto text-center
      relative z-20 
      py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Build. Automate. Scale. Elevate
        <br />
        your business with <Cover>Saleh Software</Cover>
      </h1>
    </div>
  );
}
