"use client";
import { motion } from "framer-motion";
import Back from "../public/Back.jpg";
import Image from "next/image";
import LineAnimate from "./LineAnimate";
export default function Home() {
  return (
    <div className="h-screen w-full justify-center relative overflow-hidden">
      <Image
        src={Back}
        alt="Descriptive alt text"
        layout="fill"
        className="object-cover obsolute z-0"
      />
      <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-slate-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="z-10 w-full h-full flex relative justify-center items-center"
        >
          <div className="lg:text-[70px] w-[1000px] text-slate-200 font-bold text-center tracking-wider lg:leading-[80px]">
            Transform Your Digital Concepts Into Seamless{" "}
            <span className="text-blue-400">User Experiences</span>
          </div>
          <div className="lg:text-[25px] text-slate-300 text-center w-full tracking-wider absolute bottom-[10%]">
            Hi, I am Lawrence, a Next.js Web Developer.
          </div>
        </motion.div>

        <LineAnimate />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="z-10 w-full h-full flex relative justify-center items-center"
        >
          <div className="lg:text-[70px] w-[1000px] text-slate-200 font-bold text-center tracking-wider lg:leading-[80px]">
            Transform Your Digital Concepts Into Seamless{" "}
            <span className="text-blue-500">User Experiences</span>
          </div>
        </motion.div>

        <LineAnimate />
      </div>
    </div>
  );
}
