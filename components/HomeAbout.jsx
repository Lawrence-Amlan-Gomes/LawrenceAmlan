"use client";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Image from "next/image";
import Link from "next/link";
import Pic from "../public/2.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef } from "react";
export default function HomeAbout() {
  const aboutRef = useRef(null);
  const aboutIsInView = useInView(aboutRef, { once: false });
  return (
    <>
      <div ref={aboutRef} className="w-full h-[25%] relative">
        <div className="w-[10%] h-full float-left"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: aboutIsInView ? 1 : 0,
            scale: aboutIsInView ? 1 : 0.98,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="z-10 w-[80%] float-left h-full flex relative justify-center items-center lg:text-[60px] text-blue-500 font-bold text-center tracking-wider lg:leading-[80px]"
        >
          ABOUT ME
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 1 }}
          whileHover={{
            x: ["10%", 0],
            transition: { duration: 1, type: "spring" },
          }}
          animate={{
            opacity: aboutIsInView ? 1 : 0,
            x: aboutIsInView ? 1 : 100,
            transition: { duration: 1, delay: 0.2 },
          }}
          className="w-[10%] h-full float-left flex justify-start items-center"
        >
          <Link href="/about">
            <FaArrowAltCircleRight className="text-blue-600 text-[70px]" />
          </Link>
        </motion.div>
      </div>
      <div
        ref={aboutRef}
        className="w-full h-[75%] relative pb-[5%] pl-[5%] pr-[5%]"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1, x: -100 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.5, type: "spring" },
          }}
          animate={{
            opacity: aboutIsInView ? 1 : 0,
            x: aboutIsInView ? 1 : -100,
            transition: { duration: 1, delay: 0.2 },
          }}
          className="h-full w-[32.5%] mr-[2.5%] bg-slate-950 hover:border-blue-600 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left"
        >
          <Link href="/about">
            <Image
              src={Pic}
              alt="Descriptive alt text"
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1, x: 100 }}
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.5, type: "spring" },
          }}
          animate={{
            opacity: aboutIsInView ? 1 : 0,
            x: aboutIsInView ? 1 : 100,
            transition: { duration: 1, delay: 0.5 },
          }}
          className="text-slate-500 p-[5%] overflow-y-auto lg:text-[20px] scrollbar-none h-full w-[62.5%] ml-[2.5%] hover:border-blue-600 bg-slate-950 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left"
        >
          <div>
            <samp className="text-white">&lt;body&gt;</samp>
          </div>
          <div>
            <samp className="text-blue-200 ml-[5%]">&lt;div&gt;</samp>
          </div>
          <div className="text-slate-400 ml-[10%]">
            I am Lawrence Amlan Gomes, a full time Next JS full stack developer
          </div>
          <div className="text-slate-400 ml-[10%]">
            Have an experience of more than one year in Next JS full stack
            development
          </div>
          <div className="text-slate-400 ml-[10%]">
            Always prioritize client collaboration, fostering open communication
          </div>
          <div className="text-slate-400 ml-[10%]">
            Tech enthusiast with a passion for developmentr
          </div>
          <div className="text-slate-400 ml-[10%]">
            Very flexible with time zone communications
          </div>
          <div>
            <samp className="text-blue-200 ml-[5%]">&lt;/div&gt;</samp>
          </div>

          <div>
            <samp className="text-white">&lt;/body&gt;</samp>
          </div>
        </motion.div>
      </div>
      <LineAnimate />
    </>
  );
}
