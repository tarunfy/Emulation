const Join = () => {
  return (
    <div className="bg-join-bg relative bg-cover px-8 py-32 lg:p-36 xl:px-24 xl:py-32 md:px-20 md:py-32 sm:py-32 sm:px-16 xl:max-w-5xl max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-lg mx-auto  flex flex-col items-center justify-center my-28 border border-white/20">
      <h1 className="text-white tracking-tighter text-4xl lg:text-5xl xl:text-6xl md:text-4xl sm:text-4xl lg:max-w-3xl text-center font-bold mb-5">
        Want to be an emulationist?
      </h1>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSddmkA485zSTuB5ihh3e-Tg755NNrjntyWGkxzhmCeci5l1Lg/viewform"
        target="_blank"
        rel="noreferrer"
        className="bg-[#0070F3] shadow-[#0070F3]/50  shadow-custom  border-0 text-white font-medium transition duration-300 hover:shadow-custom2 hover:shadow-[#0070F3]/50  text-xl rounded-md px-7 py-3"
      >
        Register now
      </a>
    </div>
  );
};

export default Join;
