"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Bracu from "../public/Bracu.png";
import Ndc from "../public/Ndc.png";
import HolyCross from "../public/HolyCross.png";
import { motion } from "framer-motion";
import EduCard from "./EduCard";
export default function Education() {
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
          Academic Degrees
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          className="w-full h-[80%] relative overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-slate-900"
        >
          <EduCard
            img={Bracu}
            des={"I have completed my Bachelor Of Science In Computer Science In Computer Science from Brac University. I was also a member of Chess Club, Science Club, Math Club, Computer Club and Cultural Club as well. "}
            degree={"Bachelor Of Science In Computer Science"}
            uni={"Brac University"}
            year={"( 2022 - 2025 )"}
            title={"HTML"}
            livelink={"https://www.bracu.ac.bd/"}
          />
          <EduCard
            img={Ndc}
            des={"I have completed my Higher Secondary Certificate from Notre Dame College. I was also a member of Chess Club, Science Club, Math Club, Computer Club and Cultural Club as well. "}
            degree={"Higher Secondary Certificate"}
            uni={"Notre Dame College"}
            year={"( 2022 - 2025 )"}
            title={"HTML"}
            livelink={"https://ndc.edu.bd/"}
          />
          <EduCard
            img={HolyCross}
            des={"I have completed my Secondary School Certificate from Bandura Holycross Scholl And College. I was also a member of Chess Club, Science Club, Math Club, Computer Club and Cultural Club as well. "}
            degree={"Secondary School Certificate"}
            uni={"Bandura Holycross School And College"}
            year={"( 2022 - 2025 )"}
            title={"HTML"}
            livelink={"https://www.facebook.com/BHCSC1912/"}
          />
        </motion.div>
      </div>
    </div>
  );
}
