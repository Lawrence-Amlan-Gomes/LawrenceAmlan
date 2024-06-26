"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function EduCard({ img, degree, uni, year, des, livelink }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", duration: 0.2 }}
      className="bg-opacity-70 border-[1px] h-[80%] w-[90%] ml-[5%] mr-[5%] mt-[4%] mb-[4%] border-slate-700 overflow-hidden bg-slate-950 hover:border-blue-600 relative float-left rounded-2xl"
    >
      <div className="h-[100%] w-[40%] float-left flex justify-center items-center">
        <div className="h-[50%] w-[50%] overflow-hidden rounded-lg relative">
          <Link legacyBehavior href={livelink} passHref>
            <a target="_blank">
              <Image
                src={img}
                alt="Descriptive alt text"
                layout="fill"
                className="object-contain"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="h-[100%] w-[60%] float-left flex justify-center items-center">
        <div className="w-[90%] mr-[10%] overflow-hidden relative">
          <div className="tracking-wide text-center text-blue-400 font-bold lg:text-[20px]">
            {degree}
          </div>
          <div className="tracking-wide text-center mt-2 font-bold text-slate-200 lg:text-[18px]">
            {uni}
          </div>
          <div className="tracking-wide text-center mt-2  text-blue-300 lg:text-[17px]">
            {year}
          </div>
          <div className="tracking-wide text-justify mt-2 text-slate-400 lg:text-[16px]">
            {des}
          </div>
          <Link legacyBehavior href={livelink} passHref>
            <a target="_blank">
              <div className="text-slate-500 text-[15px] hover:underline text-right hover:text-blue-400 hover:cursor-pointer mt-[5%]">
                Check Website
              </div>
            </a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
