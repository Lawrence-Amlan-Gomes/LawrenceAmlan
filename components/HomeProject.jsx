"use client";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Image from "next/image";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from "react";
export default function HomeProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <>
      <div ref={ref} className="w-full h-[30%] relative">
        <div className="w-[10%] h-full float-left"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.98,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="z-10 w-[80%] float-left h-full flex relative justify-center items-center lg:text-[60px] text-blue-500 font-bold text-center tracking-wider lg:leading-[80px]"
        >
          PROJECTS
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 1 }}
          whileHover={{
            x: ["10%", 0],
            transition: { duration: 1, type: "spring" },
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 1 : 100,
            transition: { duration: 1, delay: 0.2 },
          }}
          className="w-[10%] h-full float-left flex justify-start items-center"
        >
          <Link href="/project">
            <FaArrowAltCircleRight className="text-blue-600 text-[70px]" />
          </Link>
        </motion.div>
      </div>
      <div
        ref={ref}
        className="w-full h-[70%] relative pb-[5%] pl-[2.5%] pr-[2.5%]"
      >
        <motion.div className="h-full w-[28.3%] mr-[2.5%] ml-[2.5%] bg-slate-950 hover:border-blue-600 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left">
          <div className="w-full h-[20%] flex items-center justify-center text-slate-300 text-[24px]">Cafeteria</div>
          <div className="w-full h-[60%] relative">
            <Image
              src={P1Pic}
              alt="Descriptive alt text"
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="w-full h-[20%] flex items-center justify-center text-slate-400 text-[20px]">2024</div>
        </motion.div>
        <motion.div className="h-full w-[28.3%] mr-[2.5%] ml-[2.5%] bg-slate-950 hover:border-blue-600 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left">
          <div className="w-full h-[20%] flex items-center justify-center text-slate-300 text-[24px]">Cafeteria</div>
          <div className="w-full h-[60%] relative">
            <Image
              src={P1Pic}
              alt="Descriptive alt text"
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="w-full h-[20%] flex items-center justify-center text-slate-400 text-[20px]">2024</div>
        </motion.div>
        <motion.div className="h-full w-[28.3%] mr-[2.5%] ml-[2.5%] bg-slate-950 hover:border-blue-600 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left">
          <div className="w-full h-[20%] flex items-center justify-center text-slate-300 text-[24px]">Cafeteria</div>
          <div className="w-full h-[60%] relative">
            <Image
              src={P1Pic}
              alt="Descriptive alt text"
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div className="w-full h-[20%] flex items-center justify-center text-slate-400 text-[20px]">2024</div>
        </motion.div>
      </div>
      <LineAnimate />
    </>
  );
}
