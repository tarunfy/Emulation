const Join = () => {
  return (
    <div className="bg-join-bg relative bg-cover p-36 max-w-5xl rounded-lg mx-auto  flex flex-col items-center justify-center my-28 border">
      <h1 className="text-white tracking-tighter text-5xl max-w-3xl text-center font-bold mb-5">
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
