import React from "react";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
      <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
        <h1 className="text-3xl md:text-5xl font-medium "></h1>
        <p className="text-left  text-xl  text-gray-500">(613) 784 0342</p>
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
  );
}
