import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full p-10 mx-auto flex items-center justify-center flex-col bg-[#0b1121] border-t border-t-white/10 space-y-3">
      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/Emulation-accurate"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineGithub className="!h-8 !w-8 !text-white" />
        </a>
        <a
          href="instagram.com/emulation_accurate/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="!h-8 !w-8 !text-white" />
        </a>
      </div>
      <p className="text-white/70 text-center">
        Made with ❤️ by{" "}
        <span className="underline">
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
