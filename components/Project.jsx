import SingleProject from "./SingleProject";
import P1Pic from "../public/p1pic.png"
export default function Project() {
  return (
    <div className="h-screen w-full flex justify-center items-center pl-[50px] pr-[50px] pt-[90px] pb-[10px]">
        <div className="w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-zinc-900">
          <div className="border-[1px] border-zinc-700 rounded-lg ml-[1%] mr-[1%] w-[98%] h-[18%] flex justify-center items-center text-blue-700 tracking-wider text-5xl font-bold">My Projects</div>
          <SingleProject pic={P1Pic} title={"Cafeteria"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."} livelink={"www.google.com"}/>
          <SingleProject pic={P1Pic} title={"Cafeteria"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."} livelink={"www.google.com"}/>
          <SingleProject pic={P1Pic} title={"Cafeteria"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."} livelink={"www.google.com"}/>
          <SingleProject pic={P1Pic} title={"Cafeteria"} text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi culpa molestias sit illum voluptas."} livelink={"www.google.com"}/>
        </div>
    </div>
  );
}
