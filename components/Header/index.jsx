const Header = () => {
  return (
    <div className="lg:p-32 md:px-16 md:py-24 sm:px-14 sm:py-32 px-6 py-56 relative after:inset-0 after:z-0 after:bg-cover after:bg-bottom after:bg-no-repeat after:bg-hero-bg after:absolute mb-16  max-w-full mx-auto text-center transition-all duration-500">
      <div className="space-y-8 relative z-20 max-w-2xl sm:max-w-full">
        <h1 className="lg:text-8xl md:text-6xl md:max-w-5xl sm:text-5xl sm:max-w-3xl max-w-xl text-6xl mx-auto tracking-tighter text-white font-black text-center">
          Technical Club for Programmers of AIMT.
        </h1>
        <p className="text-center max-w-lg sm:max-w-3xl mx-auto text-base text-slate-400 sm:text-sm md:text-base lg:text-lg">
          Emulation is being successfully operated by the students of btech
          computer science. We also hire skillful programmers to our club and
          give them proper mentorship.
        </p>
        <div className="space-x-6">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSddmkA485zSTuB5ihh3e-Tg755NNrjntyWGkxzhmCeci5l1Lg/viewform"
            target="_blank"
            rel="noreferrer"
            className="bg-[#0070F3] shadow-[#0070F3]/50  shadow-custom  border-0 text-white font-medium transition duration-300 hover:shadow-custom2 hover:shadow-[#0070F3]/50 sm:text-lg rounded-lg sm:px-16 sm:py-2 text-2xl py-4 px-14"
          >
            Join now
          </a>
          <a
            href="mailto:emualtionclub@gmail.com"
            className="bg-white text-gray-900 shadow-custom sm:text-lg rounded-lg sm:px-16 sm:py-2 text-2xl py-4 px-14 border-0 font-medium transition duration-300 hover:shadow-custom2 hover:shadow-white/40"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
