import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Avatar, IconButton } from "@chakra-ui/react";

const Card = ({ info }) => {
  return (
    <div className="p-4 space-y-5 flex flex-col items-start justify-between rounded-lg shadow-custom2 bg-gray-800">
      <div className="flex items-center space-x-4">
        <Avatar name={info.name} src={info.avatar} />
        <div>
          <h1 className="text-lg text-white font-medium">{info.name}</h1>
          <p className="text-sm text-gray-300">{info.role}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{info.description}</p>
      <div className="flex items-center space-x-3">
        <a href={info.githubUrl} target="_blank" rel="noreferrer">
          <IconButton
            aria-label="github"
            icon={<AiOutlineGithub className="!h-6 !w-6" />}
          />
        </a>
        <a href={info.linkedinUrl} target="_blank" rel="noreferrer">
          <IconButton
            variant="solid"
            aria-label="linkedin"
            icon={<BsLinkedin className="!h-6 !w-6 !text-[#0B66C2]" />}
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
