import { AiOutlineGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { Avatar, IconButton } from "@chakra-ui/react";

const Card = ({ info }) => {
  return (
    <div className="p-4 space-y-5 flex flex-col items-start justify-between rounded-lg shadow-custom2 bg-gray-900 border border-white/5">
      <div className="flex items-center space-x-4">
        <Avatar
          name={info.name}
          src={info.avatar}
          className="!h-16 !w-16 sm:!h-12 sm:!w-12 !rounded-full"
        />
        <div>
          <h1 className="sm:text-lg text-2xl text-white font-medium">
            {info.name}
          </h1>
          <p className="sm:text-sm text-base text-gray-300">{info.role}</p>
        </div>
      </div>
      <p className="text-gray-300 sm:text-sm text-base">{info.description}</p>
      <div className="flex items-center space-x-3">
        <a href={info.githubUrl} target="_blank" rel="noreferrer">
          <IconButton
            className="!p-1 sm:!p-0"
            aria-label="github"
            icon={<AiOutlineGithub className="sm:!h-6 sm:!w-6 !h-10 !w-10" />}
          />
        </a>
        <a href={info.linkedinUrl} target="_blank" rel="noreferrer">
          <IconButton
            className="!p-2 sm:!p-0"
            variant="solid"
            aria-label="linkedin"
            icon={
              <BsLinkedin className="sm:!h-6 sm:!w-6 !h-7 !w-8 !text-[#0B66C2]" />
            }
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
