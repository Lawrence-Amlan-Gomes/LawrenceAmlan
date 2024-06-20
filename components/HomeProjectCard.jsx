"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function HomeProjectCard({ img, num, title, year, speed }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{
        x: [0, num, 0],
        transition: {
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        },
      }}
      className="h-full w-[28.4%] mr-[2.5%] ml-[2.5%] bg-slate-950 hover:border-blue-600 bg-opacity-80 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left"
    >
      <Link href="/project">
        <div className="w-full h-[20%] flex items-center justify-center text-slate-300 text-[24px]">
          {title}
        </div>
        <div className="w-full h-[60%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="w-full h-[20%] flex items-center justify-center text-slate-400 text-[20px]">
          {year}
        </div>
      </Link>
    </motion.div>
  );
}
