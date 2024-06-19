import Back from "../public/Back.jpg";
import Image from "next/image";
import HomeHome from "./HomeHome";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";
export default function Home() {
  return (
    <div className="h-screen w-full justify-center relative overflow-hidden">
      <Image
        src={Back}
        alt="Descriptive alt text"
        layout="fill"
        className="object-cover obsolute z-0"
      />
      <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-slate-900">
        {/* Landing Part */}
        <HomeHome />
        {/* About Me */}
        <HomeAbout />
        {/* Projects */}
        <HomeProject/>
      </div>
    </div>
  );
}
