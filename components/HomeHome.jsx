"use client";
import { motion } from "framer-motion";
import LineAnimate from "./LineAnimate";
export default function HomeHome() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="z-10 w-full h-full flex relative justify-center items-center md:pl-[15%] md:pr-[15%] lg:pl-[5%] lg:pr-[5%]"
      >
        <div className="lg:text-[60px] md:text-[40px] sm:text-[25px] text-slate-200 font-bold text-center tracking-wider lg:leading-[80px]">
          Transform Your Digital Concepts Into Seamless{" "}
          <span className="text-blue-500">User Experiences</span>
        </div>
        <div className="lg:text-[20px] text-slate-300 text-center w-full tracking-wider absolute bottom-[5%]">
          Hi, I am Lawrence, a Next.js Web Developer.
        </div>
      </motion.div>
      <LineAnimate />
    </>
  );
}
