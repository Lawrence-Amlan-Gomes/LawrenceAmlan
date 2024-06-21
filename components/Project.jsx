"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Pic from "../public/2.jpg";
import P1Pic from "../public/p1pic.png"
import Person from "../public/Person.png";
import Coder from "../public/Coder.png";
import TimeZone from "../public/TimeZone.png";
import Communication from "../public/Communication.png";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import SingleProject from "./SingleProject";
export default function Project() {
  return (
    <div className="h-screen w-full justify-center relative overflow-hidden">
      <Image
        src={Back}
        alt="Descriptive alt text"
        layout="fill"
        className="object-cover obsolute z-0"
      />
      <div className="absolute w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full h-[20%] lg:text-[50px] text-blue-500 tracking-wider flex justify-center items-end"
        >
          All Projects
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{
            opacity: 1,
            y : 0,
            transition: { duration: 0.5 },
          }}
          className="w-full h-[80%] relative overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-slate-900"
        >
          <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "This is a full stack Next JS website for a Cafeteria Management System built in June 2024."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "This is a full stack Next JS website for a Cafeteria Management System built in June 2024."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "This is a full stack Next JS website for a Cafeteria Management System built in June 2024."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "This is a full stack Next JS website for a Cafeteria Management System built in June 2024."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        </motion.div>
      </div>
    </div>
  );
}
