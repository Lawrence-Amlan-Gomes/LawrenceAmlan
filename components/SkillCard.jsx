"use client"
import { motion } from "framer-motion";
import Image from "next/image";
export default function SkillCard({img, title, num}){
    return (
        <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 0.99 }}
        animate={{ x: [0, num, 0] }}      
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
        
        className="border-[1px] border-zinc-700 overflow-hidden p-[1%] hover:border-zinc-500 h-full relative w-[23%] mr-[1%] ml-[1%] float-left rounded-2xl"
      >
        <div className="h-[50%] w-full float-left mt-[20%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-[30%] w-full float-left  flex justify-center items-center tracking-wide font-bold text-2xl">
          {title}
        </div>
      </motion.div>
    );
}