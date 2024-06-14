"use client"
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import P1Pic from "../public/p1pic.png";
export default function Project() {
  return (
    <div className="h-screen w-full flex justify-center items-center pl-[50px] pr-[50px] pt-[90px] pb-[20px]">
      <div className="w-full h-full overflow-y-auto scroll-smooth scrollbar-thin  scrollbar-thumb-teal-600 scrollbar-track-zinc-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="border-[1px] bg-neutral-900 border-zinc-800 rounded-lg ml-[1%] mr-[1%] mb-[1.5%] w-[98%] h-[16.5%] flex justify-center items-center text-teal-500 tracking-wider text-5xl font-bold"
        >
          My Projects
        </motion.div>
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
      </div>
    </div>
  );
}
