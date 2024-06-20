"use client";
import Bracu from "../public/Bracu.png";
import Ndc from "../public/Ndc.png";
import HolyCross from "../public/HolyCross.png";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
import HomeSkillCard from "./HomeSkillCard";
import HomeEduCard from "./HomeEduCard";

export default function HomeEducation() {
  const [speed, setSpeed] = useState(15);
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
          EDUCATION
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
          <Link href="/education">
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
        <HomeEduCard
          img={Bracu}
          degree={"Bachelor Of Science In Computer Science"}
          uni={"BRAC UNIVERSITY"}
          year={"( 2022 - 2025 )"}
          title={"HTML"}
        />
        <HomeEduCard
          img={Ndc}
          degree={"Higher Secondary Certificate"}
          uni={"NOTRE DAME COLLEGE"}
          year={"( 2018 - 2020 )"}
          title={"HTML"}
        />
        <HomeEduCard
          img={HolyCross}
          degree={"Secondary School Certificate"}
          uni={"BANDURA HOLYCROSS SCHOOL AND COLLEGE"}
          year={"( 2014 - 2018 )"}
          title={"HTML"}
        />
      </motion.div>
      <LineAnimate />
    </>
  );
}
