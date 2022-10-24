const Join = () => {
  return (
    <div className="relative group  mx-auto w-[64rem]">
      <div className="absolute animate-xy group-hover:inset-1 p-36 transition-all duration-500 ease-in-out blur -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 max-w-5xl rounded-lg mx-auto"></div>
      <div className="relative bg-[#0b1121] p-36 max-w-5xl rounded-lg mx-auto my-28 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-white tracking-tighter text-5xl max-w-3xl text-center font-bold ">
          Want to be a part of the Emulation club?
        </h1>
        <button className="text-xl  transition text-transparentsn font-medium rounded px-6 py-3 bg-white hover:bg-white/90">
          Register now
        </button>
      </div>
    </div>
  );
};

export default Join;
