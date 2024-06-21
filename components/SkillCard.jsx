"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function SkillCard({ img, title, des }) {
  return (
    <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.5, type: "spring" }}
      className="border-[1px] h-[40%] w-[45%] m-[2.5%] bg-slate-950 bg-opacity-70 border-slate-700 overflow-hidden hover:border-blue-600 relative float-left rounded-lg"
    >
      <div className="h-[100%] w-[40%] float-left relative flex justify-center items-center">
        <div className="w-[60%] h-[60%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <div className="h-[100%] w-[60%] float-left">
        <div className="h-[40%] w-[100%] float-left flex justify-center items-center text-center text-[20px] text-slate-200 font-bold">
          {title}
        </div>
        <div className="h-[60%] w-[100%] float-left flex justify-center items-start pr-[5%] text-center text-[14px] text-slate-400">
          {des}
        </div>
        {title}
      </div>
    </motion.div>
  );
}
