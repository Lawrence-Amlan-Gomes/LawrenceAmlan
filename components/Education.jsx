"use client";
import Bracu from "../public/Bracu.png";
import Ndc from "../public/Ndc.png";
import HolyCross from "../public/HolyCross.png";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import EduCard from "./EduCard";
export default function Education() {
  return (
    <div className="h-screen w-full flex justify-center items-center pl-[100px] pr-[100px] pt-[100px] pb-[50px] mx-auto">
      <div className="text-white w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="border-[1px]  border-zinc-800 bg-neutral-900 rounded-lg m-[1.5%] w-[96%] h-[21%] flex justify-center items-center text-teal-500 tracking-wider text-5xl font-bold"
        >
          My Education
        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, type: "spring" }}
          className="flex overflow-x-auto [&>div]:flex-shrink-0 scrollbar scrollbar-thumb-teal-600 scrollbar-track-zinc-900 relative rounded-lg m-[1%] pt-[2%] pb-[2%] h-[70%]"
        >
            <EduCard img={Bracu} degree={"Bachelor Of Science In Computer Science"} uni={"BRAC UNIVERSITY"} year={"( 2022 - 2025 )"} title={"HTML"}/>
            <EduCard img={Ndc} degree={"Higher Secondary Certificate"} uni={"NOTRE DAME COLLEGE"} year={"( 2018 - 2020 )"} title={"HTML"}/>
            <EduCard img={HolyCross} degree={"Secondary School Certificate"} uni={"BANDURA HOLYCROSS SCHOOL AND COLLEGE"} year={"( 2014 - 2018 )"} title={"HTML"}/>
        </motion.div>
      </div>
    </div>
  );
}