import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/icon1.png";
export default function Nav() {
  return (
    <div className="fixed hover:bg-black text-xl z-10 hover:text-zinc-300 text-[18px] w-full lg:h-[80px] justify-center flex items-center">
      <div className="w-[95%] relative h-full">
        <div className="float-left w-[10%] flex items-center justify-start h-full">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={0} />
          </Link>
        </div>
        <div className="flex items-center justify-center w-[80%] relative h-full">
          <Link href="/about">
            <div className="ml-5 mr-5 tracking-wider hover:text-white lg:text-[16px]">About</div>
          </Link>
          <Link href="/project">
            <div className="ml-5 mr-5 tracking-wider hover:text-white lg:text-[16px]">Project</div>
          </Link>
          <Link href="/skill">
            <div className="ml-5 mr-5 tracking-wider hover:text-white lg:text-[16px]">Skill</div>
          </Link>
          <Link href="/education">
            <div className="ml-5 mr-5 tracking-wider hover:text-white lg:text-[16px]">Education</div>
          </Link>
          <Link href="/contact">
            <div className="ml-5 mr-5 tracking-wider hover:text-white lg:text-[16px]">Contact</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
