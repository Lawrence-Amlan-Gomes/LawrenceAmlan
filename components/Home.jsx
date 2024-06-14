"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center relative items-center pl-[200px] pr-[200px] pt-[40px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className="lg:text-6xl text-zinc-300 font-bold text-center tracking-wider lg:leading-[80px]">
          Transform Your Digital Concepts Into Seamless{" "}
          <span className="text-teal-500">User Experiences</span>
        </div>
        <div className="lg:text-2xl text-cyan-600 text-center mt-[50px] tracking-wider">
          Hi, I am Lawrence, a Next.js Web Developer.
        </div>
      </motion.div>
    </div>
  );
}
