"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function SingleProject({ pic, title, text, livelink }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="border-[1px] w-[45%] h-[90%] bg-opacity-70 m-[2.5%] hover:border-blue-600 bg-slate-950 float-left relative border-slate-700 rounded-xl"
    >
      <div className="text-[25px] text-slate-200 w-full text-center tracking-wide font-bold h-[20%] flex justify-center items-center">
        {title}
      </div>
      <div className="bw-full rounded-lg relative overflow-hidden h-[50%]">
        <Image
          src={pic}
          alt="Descriptive alt text"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="text-[18px] pr-2 pl-2 text-slate-300 w-full h-[20%] flex justify-center items-center text-center">
        {text}
      </div>
      <Link legacyBehavior href={livelink} passHref>
        <a target="_blank">
          <div className="text-slate-400 text-[16px] hover:underline hover:text-blue-400 h-[10%] hover:cursor-pointer flex justify-center items-center text-center">
            Check Live Site
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
