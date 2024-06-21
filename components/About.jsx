"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Pic from "../public/2.jpg";
import Person from "../public/Person.png";
import Coder from "../public/Coder.png";
import TimeZone from "../public/TimeZone.png";
import Communication from "../public/Communication.png";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
export default function About() {
  return (
    <div className="h-screen w-full justify-center relative overflow-hidden">
      <Image
        src={Back}
        alt="Descriptive alt text"
        layout="fill"
        className="object-cover obsolute z-0"
      />
      <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full h-[20%] lg:text-[50px] text-blue-500 tracking-wider flex justify-center items-end"
        >
          Know Me More
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full h-[80%]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 1, x: -100 }}
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.5, type: "spring" },
            }}
            animate={{
              opacity: 1,
              x: 1,
              transition: { duration: 0.5 },
            }}
            className="h-[90%] m-[2.5%] w-[30%] bg-slate-950 hover:border-blue-600 border-slate-700 relative border-[1px] overflow-hidden rounded-3xl float-left"
          >
              <Image
                src={Pic}
                alt="Descriptive alt text"
                layout="fill"
                className="object-cover"
                objectFit="cover"
                objectPosition="top"
              />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1, x: 100 }}
            animate={{
              opacity: 1,
              x: 1,
              transition: { duration: 0.5 },
            }}
            className="h-[100%] w-[65%] relative overflow-y-auto float-left scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-slate-900"
          >
            <AboutCard img={Person} text={"Hi, I am Lawrence Amlan Gomes, a full time full stack Next JS Web Developer having an experience of more than one year."}/>
            <AboutCard img={Communication} text={"I Always prioritize client collaboration and fostering open communication so that my clients can get maximun benefit."}/>
            <AboutCard img={TimeZone} text={"I am very flexible with time zone communications so that my clients can communicate with me at any time and from anywhere."}/>
            <AboutCard img={Coder} text={"I am a tech enthusiast with a passion for web development, and I always enjoy the journey of learning new technology."}/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
