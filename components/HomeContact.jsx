"use client";
import Gmail from "../public/Gmail.png";
import GitHub from "../public/GitHub.png";
import LinkedIn from "../public/LinkedIn.png";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
import HomeSkillCard from "./HomeSkillCard";
import HomeEduCard from "./HomeEduCard";
import HomeContactCard from "./HomeContactCard";

export default function HomeContact() {
  const [speed, setSpeed] = useState(15);
  const [index, setIndex] = useState(true)
  const [num, setNum] = useState("-500%");
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
          CONTACT
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
          <Link href="/contact">
            <FaArrowAltCircleRight className="text-blue-600 text-[70px]" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.98,
        }}
        transition={{ duration: 1, type: "spring" }}
        ref={ref}
        className="w-full h-[70%] relative overflow-hidden"
      >
        <div className="w-full h-[80%] flex justify-center items-center">
          <HomeContactCard index={index} setIndex={setIndex} ownIdx={1} img={Gmail} text={"amlan@gmail.com"} livelink={"https://mail.google.com/mail/u/0/#inbox?compose=new"}/>
          <HomeContactCard index={index} setIndex={setIndex} ownIdx={2} img={GitHub} text={"Lawrence-Amlan-Gomes"} livelink={"https://github.com/Lawrence-Amlan-Gomes"} />
          <HomeContactCard index={index} setIndex={setIndex} ownIdx={3} img={LinkedIn} text={"Lawrence Amlan Gomes"} livelink={"https://www.linkedin.com/in/lawrence-amlan-gomes-13847426b/"}/>
        </div>
        <div className="w-full h-[20%] bg-slate-950 flex justify-center items-center text-slate-200 text-[20px] text-center">
          Copyright 2024 Lawrence
        </div>
      </motion.div>
    </>
  );
}
