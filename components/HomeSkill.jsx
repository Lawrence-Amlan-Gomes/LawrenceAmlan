"use client";
import Html from "../public/html.png";
import Css from "../public/css.png";
import Js from "../public/js.png";
import React from "../public/React.png";
import NextJS from "../public/NextJS.png";
import Firebase from "../public/Firebase.png";
import Mongodb from "../public/Mongodb.png";
import TailwindCss from "../public/TailwindCss.png";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
import HomeSkillCard from "./HomeSkillCard";

export default function HomeSkill() {
  const [speed, setSpeed] = useState(20);
  const [num, setNum] = useState("-700%")
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
          SKILLS
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
          <Link href="/skill">
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
        className="w-full h-[70%] relative overflow-hidden flex [&>div]:flex-shrink-0 pb-[5%] pl-[2.5%] pr-[2.5%]"
      >
        <HomeSkillCard speed={speed} num={num} img={Html} title={"HTML"} />
        <HomeSkillCard speed={speed} num={num} img={Css} title={"CSS"} />
        <HomeSkillCard
          speed={speed}
          num={num}
          img={Js}
          title={"Java Script"}
        />
        <HomeSkillCard
          speed={speed}
          num={num}
          img={React}
          title={"React JS"}
        />
        <HomeSkillCard
          speed={speed}
          num={num}
          img={TailwindCss}
          title={"Tailwind CSS"}
        />
        <HomeSkillCard
          speed={speed}
          num={num}
          img={NextJS}
          title={"Next JS"}
        />
        <HomeSkillCard
          speed={speed}
          num={num}
          img={Firebase}
          title={"Firebase"}
        />
        <HomeSkillCard
          speed={speed}
          num={num}
          img={Mongodb}
          title={"Mongo DB"}
        />
      </motion.div>
      <LineAnimate />
    </>
  );
}
