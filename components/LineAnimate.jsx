import { motion } from "framer-motion";
export default function LineAnimate(){
    return (
        <div className="relative">
          <div className="absolute w-full h-[1px] bg-slate-800"></div>
          <motion.div
            animate={{ x: ["-100%", "1000%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
            }}
            className="bg-slate-600 h-[1px] w-[10%] absolute"
          />
        </div>
    );
}