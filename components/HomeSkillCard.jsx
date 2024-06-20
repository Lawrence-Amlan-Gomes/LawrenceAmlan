"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function HomeSkillCard({ img, num, title, speed }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.99 }}
      animate={{ x: [0, num, 0] }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
      className="border-[1px] bg-opacity-80 bg-slate-950 border-slate-700 overflow-hidden p-[1%] hover:border-blue-600 box-border relative w-[21%] mt-[2.5%] mb-[5%] mr-[5%] ml-[5%] float-left rounded-2xl"
    >
      <Link href="/skill">
        <div className="h-[50%] w-[50%] ml-[25%] float-left mt-[20%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-[30%] w-full float-left text-slate-300  flex justify-center items-center tracking-wide font-bold text-2xl">
          {title}
        </div>
      </Link>
    </motion.div>
  );
}
