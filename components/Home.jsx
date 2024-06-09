"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
    >
      <div className="lg:text-6xl text-zinc-100 font-bold text-center tracking-wider lg:leading-[80px]">
        Transform your Digital Concepts into Seamless{" "}
        <span className="text-blue-600">User Experiences</span>
      </div>
      <div className="lg:text-2xl text-zinc-200 text-center mt-[50px] tracking-wider">
        Hi, I am Lawrence, a Next.js Web Developer.
      </div>
    </motion.div>
  );
}
