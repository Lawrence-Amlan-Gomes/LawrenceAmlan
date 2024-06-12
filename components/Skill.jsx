"use client";
import Html from "../public/html.png";
import Css from "../public/css.png";
import Js from "../public/js.png";
import React from "../public/React.png";
import NextJS from "../public/NextJS.png";
import Firebase from "../public/Firebase.png";
import Mongodb from "../public/Mongodb.png";
import TailwindCss from "../public/TailwindCss.png";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
export default function Skill() {
  return (
    <div className="h-screen w-full flex justify-center items-center pl-[50px] pr-[50px] pt-[90px] pb-[50px] mx-auto">
      <div className="text-white w-full h-full relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="border-[1px]  border-zinc-300 rounded-lg m-[2%] w-[96%] h-[21%] flex justify-center items-center text-white tracking-wider text-5xl font-bold"
        >
          My Skills
        </motion.div>
        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, type: "spring" }}
          className="flex overflow-x-auto [&>div]:flex-shrink-0 scrollbar scrollbar-thumb-zinc-700 scrollbar-track-zinc-900 relative rounded-lg m-[1%] pt-[2%] pb-[2%] h-[70%]"
        >
         <SkillCard num={"-400%"} img={Html} title={"HTML"}/>
         <SkillCard num={"-400%"} img={Css} title={"CSS"}/>
         <SkillCard num={"-400%"} img={Js} title={"Java Script"}/>
         <SkillCard num={"-400%"} img={React} title={"React JS"}/>
         <SkillCard num={"-400%"} img={TailwindCss} title={"Tailwind CSS"}/>
         <SkillCard num={"-400%"} img={NextJS} title={"Next JS"}/>
         <SkillCard num={"-400%"} img={Firebase} title={"Firebase"}/>
         <SkillCard num={"-400%"} img={Mongodb} title={"Mongo DB"}/>
        </motion.div>
      </div>
    </div>
  );
}
