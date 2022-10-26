import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full p-10 mx-auto flex items-center justify-center flex-col bg-[#0b1121] border-t border-t-white/5 space-y-3">
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/Emulation-accurate"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className="sm:!h-8 sm:!w-8 !h-10 !w-10 !text-white" />
        </a>
        <a
          href="instagram.com/emulation_accurate/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="sm:!h-8 sm:!w-8 !h-10 !w-10 !text-white" />
        </a>
      </div>
      <p className="text-white/70 text-center text-lg sm:text-base">
        Made with ❤️ by{" "}
        <span className="underline text-white">
          <a
            href="https://www.github.com/tarunfy"
            target="_blank"
            rel="noreferrer"
          >
            @tarunfy
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
