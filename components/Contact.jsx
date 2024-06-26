"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Gmail from "../public/Gmail.png";
import GitHub from "../public/GitHub.png";
import LinkedIn from "../public/LinkedIn.png";
import { motion } from "framer-motion";
import HomeEduCard from "./HomeEduCard";
import ContactCard from "./ContactCard";
export default function Contact() {
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
          Get In Touch
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
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: [1.01, 1] }}
            transition={{ duration: 2, type: "spring" }}
            className="h-[90%] m-[2%] w-[37%] float-left border-[1px] bg-opacity-70 hover:border-blue-600 bg-slate-950 relative border-slate-700 rounded-xl"
          >
            <div className="w-full tracking-wider text-slate-300 h-[20%] flex justify-center items-center text-center font-bold lg:text-[20px]">
              Single Click To Visit
            </div>
            <div className="w-[80%] ml-[10%] h-[80%]">
              <ContactCard img={Gmail} livelink={"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftLmbMDDfmnMzMrFdjCZjvzPgpPhCSkXwkJSljNbNGzttgqJKwpZQqHGFrWBqzlXxjTNV"}/>
              <ContactCard img={GitHub} livelink={"https://github.com/Lawrence-Amlan-Gomes"}/>
              <ContactCard img={LinkedIn} livelink={"https://www.linkedin.com/in/lawrence-amlan-gomes-13847426b/"}/>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: [1.01, 1] }}
            transition={{ duration: 2, type: "spring" }}
            className="h-[90%] m-[2%] w-[55%] float-left border-[1px] bg-opacity-70 hover:border-blue-600 bg-slate-950 relative border-slate-700 rounded-xl"
          >
            <div className="w-full tracking-wider text-slate-300 h-[20%] flex justify-center items-center text-center font-bold lg:text-[20px]">
              Send Me Direct Mail
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
