import { useState } from "react";
import { AndroidDevTeam, CompetitiveTeam, CoreTeam, WebDevTeam } from "./Teams";

const Team = () => {
  const [team, setTeam] = useState("core");
  return (
    <div className="relative after:inset-0 after:z-0  after:bg-center after:bg-no-repeat after:bg-team-bg after:absolute py-32">
      <div className="relative z-20 max-w-5xl px-10 xl:px-0 mx-auto space-y-10">
        <h1 className="text-white text-center text-6xl font-bold tracking-tight">
          “Meet the team of Emulation”
        </h1>

        <ul className="grid w-full sm:grid-cols-4 grid-cols-2 sm:gap-4 gap-2 text-center text-white/90 font-normal sm:text-sm md:text-base lg:text-lg text-2xl">
          <li
            className={`${
              team === "core" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white  rounded-md font-medium"
            } px-4 py-2`}
          >
            <button onClick={() => setTeam("core")}>Core</button>
          </li>
          <li
            className={`${
              team === "web" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white font-medium rounded-md"
            } px-4 py-2 `}
          >
            <button onClick={() => setTeam("web")}>Web Dev</button>
          </li>
          <li
            className={`${
              team === "android" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white font-medium rounded-md"
            }  px-4 py-2`}
          >
            <button onClick={() => setTeam("android")}>Android Dev</button>
          </li>
          <li
            className={`${
              team === "competitive" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1]  text-white rounded-md font-medium"
            }  px-4 py-2`}
          >
            <button onClick={() => setTeam("competitive")}>Competitive</button>
          </li>
        </ul>

        <div>
          {team === "core" ? (
            <CoreTeam />
          ) : team === "web" ? (
            <WebDevTeam />
          ) : team === "android" ? (
            <AndroidDevTeam />
          ) : (
            <CompetitiveTeam />
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
