"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function HomeEduCard({ img, degree, uni, year }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", duration: 0.2 }}
      className="border-[1px] border-slate-700 overflow-hidden p-[1%] bg-slate-950 hover:border-blue-600 h-full relative w-[28.4%] mr-[2.5%] ml-[2.5%] float-left rounded-2xl"
    >
      <Link href="/project">
        <div className="h-[40%] w-full float-left mt-[10%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-[50%] w-full float-left  flex justify-center items-center">
          <div>
            <div className="tracking-wide text-slate-300 text-center">
              {degree}
            </div>
            <div className="tracking-wide text-center mt-2 text-sky-500 font-bold">
              {uni}
            </div>
            <div className="tracking-wide text-center mt-2 text-slate-400">
              {year}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
