export default function Contact() {
  return (
    <div className="h-screen w-full flex justify-center relative items-center pl-[50px] pr-[50px] pb-[50px] pt-[100px]">
      <div className="w-full h-full relative ">
        <div className="w-[59%] float-left h-full relative mr-[1%]">
          <div className="w-full flex mb-[1.7%] justify-center items-center border-[1px] h-[28%]  hover:border-zinc-600  border-zinc-800 rounded-xl bg-zinc-950 lg:text-5xl font-bold tracking-wider text-teal-500">
            My Social
          </div>
          <div className="w-[49%] mr-[1%] flex justify-center items-center border-[1px] h-[70%] float-left  hover:border-zinc-600  border-zinc-800 rounded-xl bg-zinc-950 lg:text-5xl font-bold tracking-wider text-teal-500"></div>
          <div className="w-[49%] ml-[1%] flex justify-center items-center border-[1px] h-[70%] float-left  hover:border-zinc-600  border-zinc-800 rounded-xl bg-zinc-950 lg:text-5xl font-bold tracking-wider text-teal-500"></div>
        </div>
        <div className="w-[39%] ml-[1%] flex justify-center items-center border-[1px] h-[100%] float-left  hover:border-zinc-600  border-zinc-800 rounded-xl bg-zinc-950 lg:text-5xl font-bold tracking-wider text-teal-500"></div>
      </div>
    </div>
  );
}
