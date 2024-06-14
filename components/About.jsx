"use client";
import Image from "next/image";
import Pic from "../public/2.jpg";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
export default function About() {
  return (
    <div className="h-screen w-full flex justify-center items-center pl-[100px] relative z-0 pr-[100px] pt-[100px] overflow-hidden pb-[80px]">
      <div className="w-full h-full ">
        <motion.div
          initial={{ scale: 1, x: -100 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5, type: "spring" }}
          animate={{ x: 1 }}
          className="h-full w-[35%] hover:border-zinc-600 border-zinc-700 relative border-[1px] overflow-hidden rounded-3xl float-left"
        >
          <Image
            src={Pic}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 1, x: 200 }}
          transition={{ duration: 0.5, type: "spring" }}
          animate={{ x: 1 }}
          className="h-full w-[60%] ml-[5%] overflow-y-auto overflow-x-hidden text-zinc-300 pr-[10px] float-left scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-neutral-950"
        >
          <div className="w-full flex justify-center items-center h-[23%] mb-[2%] border-[1px]  hover:border-zinc-600  border-zinc-800 rounded-xl bg-neutral-900 lg:text-5xl font-bold tracking-wider text-teal-500">
            About Me
          </div>
          <AboutCard
            text={
              "I am Lawrence Amlan Gomes, a full time Next JS full stack developer"
            }
          />
          <AboutCard
            text={
              "I have an experience of more than one year in Next JS full stack development"
            }
          />
          <AboutCard
            text={
              "I prioritize client collaboration, fostering open communication"
            }
          />
          <AboutCard text={"Tech enthusiast with a passion for development"} />
          <AboutCard
            text={"I am very flexible with time zone communications"}
          />
          <AboutCard text={"Currently working in a Next JS project"} />
        </motion.div>
      </div>
    </div>
  );
}
