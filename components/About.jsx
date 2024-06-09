"use client";
import Image from "next/image";
import Pic from "../public/2.jpg";
import { motion } from "framer-motion";
export default function About() {
  return (
    <div className="h-screen w-full flex justify-center items-center pl-[50px] relative z-0 pr-[50px] pt-[100px] overflow-hidden pb-[20px]">
      <div className="w-full h-full ">
        <motion.div
          initial={{ scale: 1, x: -100 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5, type: "spring" }}
          animate={{ x: 1 }}
          className="h-full w-[35%] hover:border-blue-800 border-zinc-700 relative border-[1px] overflow-hidden rounded-3xl float-left"
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
          className="h-full w-[60%] ml-[5%] overflow-y-auto text-zinc-300 pr-[10px] float-left scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-zinc-900"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center items-center p-6 mb-[20px] border-[1px] border-zinc-700 rounded-xl bg-zinc-950 lg:text-5xl font-bold tracking-wider text-blue-700"
          >
            About Me
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full p-10 mb-[20px] border-[1px] border-zinc-700 hover:border-blue-800 rounded-xl bg-zinc-950 lg:text-3xl"
          >
            I am Lawrence Amlan Gomes, a full time Next JS full stack developer
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full p-10 mb-[20px] border-[1px] border-zinc-700 hover:border-blue-800 rounded-xl bg-zinc-950 lg:text-3xl"
          >
            I prioritize client collaboration, fostering open communication
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full p-10 mb-[20px] border-[1px] border-zinc-700 hover:border-blue-800 rounded-xl bg-zinc-950 lg:text-3xl"
          >
            Tech enthusiast with a passion for development
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full p-10 mb-[20px] border-[1px] border-zinc-700 hover:border-blue-800 rounded-xl bg-zinc-950 lg:text-3xl"
          >
            I am very flexible with time zone communications
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full p-10 mb-[20px] border-[1px] border-zinc-700 hover:border-blue-800 rounded-xl bg-zinc-950 lg:text-3xl"
          >
            Currently working in a Next JS project
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
