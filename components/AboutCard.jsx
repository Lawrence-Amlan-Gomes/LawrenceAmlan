"use client";
import { motion } from "framer-motion";
export default function AboutCard({ text }) {
  return (
    <motion.div
      initial={{ x:1 }}
      whileHover={{ x:9 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="w-full h-[23%] mb-[2%] border-[1px] border-zinc-800 hover:border-zinc-700 flex justify-center items-center text-center pl-5 pr-5 rounded-xl bg-neutral-900 lg:text-2xl"
    >
      {text}
    </motion.div>
  );
}
