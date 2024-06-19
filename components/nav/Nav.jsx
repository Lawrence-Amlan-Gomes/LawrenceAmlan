import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/icon.png";
export default function Nav() {
  return (
      <div className="fixed z-20 hover:text-slate-400 hover:bg-slate-950 text-transparent text-[14px] w-full lg:h-[60px] justify-center flex items-center">
        <div className="w-[95%] relative h-full">
          <div className="float-left w-[10%] flex items-center justify-start h-full">
            <Link href="/">
              <Image src={Logo} alt="Logo" width={50} height={0} />
            </Link>
          </div>

          <div className="flex items-center justify-center w-[80%] relative h-full">
            <Link href="/about">
              <div className="ml-5 mr-5 tracking-wider hover:text-blue-500">
                About
              </div>
            </Link>
            <Link href="/project">
              <div className="ml-5 mr-5 tracking-wider hover:text-blue-500">
                Project
              </div>
            </Link>
            <Link href="/skill">
              <div className="ml-5 mr-5 tracking-wider hover:text-blue-500">
                Skill
              </div>
            </Link>
            <Link href="/education">
              <div className="ml-5 mr-5 tracking-wider hover:text-blue-500">
                Education
              </div>
            </Link>
            <Link href="/contact">
              <div className="ml-5 mr-5 tracking-wider hover:text-blue-500">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
}
