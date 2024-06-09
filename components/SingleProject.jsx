import Image from "next/image";
import Link from "next/link";
export default function SingleProject({ pic, title, text, livelink }) {
  return (
    <div className="border-[1px] w-[48%] float-left h-[78%] bg-zinc-950 border-zinc-700 box-border m-[1%] rounded-xl">
      <div className="boder-2 border-zinc-500 w-[96%] m-[2%] rounded-lg relative overflow-hidden h-[60%]">
        <Image
          src={pic}
          alt="Descriptive alt text"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="text-3xl text-zinc-100 w-full text-center tracking-wide font-bold mt-[3%]">
        {title}
      </div>
      <div className="text-xl text-zinc-300 w-full mt-[2%] ml-[2%] mr-[2%]">
        {text}
      </div>
      <Link legacyBehavior href={livelink} passHref>
        <a target="_blank">
          <div className="text-blue-500 mt-[2%] ml-[2%] mr-[2%] text-center hover:text-blue-700 hover:cursor-pointer">
            Check Live Site
          </div>
        </a>
      </Link>
    </div>
  );
}
