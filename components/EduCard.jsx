"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function EduCard({ img, degree, uni, year }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", duration: 0.2 }}
      className="border-[1px] border-zinc-800 overflow-hidden p-[1%] bg-neutral-900 hover:bg-zinc-900 hover:border-zinc-700 h-full relative w-[31%] mr-[1%] ml-[1%] float-left rounded-2xl"
    >
      <div className="h-[40%] w-full float-left mt-[10%] relative">
        <Image
          src={img}
          alt="Descriptive alt text"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="h-[50%] w-full float-left  flex justify-center items-center">
        <div>
          <div className="tracking-wide text-zinc-200 text-center">
            {degree}
          </div>
          <div className="tracking-wide text-center mt-2 text-cyan-500 font-bold">
            {uni}
          </div>
          <div className="tracking-wide text-center mt-2 text-zinc-400">
            {year}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
