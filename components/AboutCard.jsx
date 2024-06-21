"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function AboutCard({ text, img }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        x: -10,
        transition: { duration: 0.5, type: "spring" },
      }}
      className="border-[1px] bg-slate-950 bg-opacity-70 border-slate-700 relative hover:border-blue-600 rounded-xl w-[90%] h-[40%] m-[5%]"
    >
      <div className=" h-[100%] w-[70%] float-left flex justify-center items-center">
        <div className="rounded-lg w-[80%] relative overflow-hidden text-center lg:text-[20px] text-slate-300">
            {text}
        </div>
      </div>
      <div className="h-full w-[30%] flex justify-center items-center float-left rounded-lg overflow-hidden">
        <div className="rounded-lg h-[70%] w-[70%] relative overflow-hidden">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </motion.div>
  );
}
