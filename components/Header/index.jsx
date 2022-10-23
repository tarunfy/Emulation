const Header = () => {
  return (
    <div
      id="header"
      className="p-32 bg-[#0A2135] h-screen max-w-9xl mx-auto text-center transition-all duration-500  bg-contain bg-no-repeat"
    >
      <div className="space-y-8">
        <h1 className="text-8xl max-w-5xl mx-auto tracking-tighter text-white font-black text-center">
          Technical Club for Programmers of AIMT
        </h1>
        <p className="text-center max-w-4xl mx-auto text-lg text-slate-400">
          Emulation is being successfully operated by the students of btech
          computer science. We also hire skillful programmers to our club and
          give them proper mentorship.
        </p>
        <div className="space-x-6">
          <button className="bg-[#0070F3] shadow-[#0070F3]/50 text-lg shadow-custom rounded-lg px-16 py-2 border-0 text-white font-medium transition duration-300 hover:shadow-custom2 hover:shadow-[#0070F3]/50">
            Join Now
          </button>
          <button className="bg-white text-gray-900 shadow-custom text-lg rounded-lg px-16 py-2 border-0 font-medium transition duration-300 hover:shadow-custom2 hover:shadow-white/40">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
