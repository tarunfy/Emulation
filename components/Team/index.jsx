import { useState } from "react";
import AndroidDevTeam from "./AndroidDevTeam";
import CoreTeam from "./CoreTeam";
import WebDevTeam from "./WebDevTeam";
import CompetitiveTeam from "./CompetitveTeam";

const Team = () => {
  const [team, setTeam] = useState("core");
  return (
    <div className="relative after:inset-0 after:z-0  after:bg-center after:bg-no-repeat after:bg-team-bg after:absolute py-32">
      <div className="relative z-20 max-w-5xl mx-auto space-y-10">
        <h1 className="text-white text-center text-6xl font-bold tracking-tight">
          “Meet the team of Emulation”
        </h1>

        <ul className="flex w-full items-center justify-between space-x-4 text-white/90 font-normal text-lg">
          <li
            className={`${
              team === "core" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white px-4 py-2 rounded-md font-medium"
            }`}
          >
            <button onClick={() => setTeam("core")}>Core</button>
          </li>
          <li
            className={`${
              team === "web" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white font-medium px-4 py-2 rounded-md"
            } `}
          >
            <button onClick={() => setTeam("web")}>Web Developement</button>
          </li>
          <li
            className={`${
              team === "android" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white px-4 py-2 font-medium rounded-md"
            }`}
          >
            <button onClick={() => setTeam("android")}>
              Android Development
            </button>
          </li>
          <li
            className={`${
              team === "competitive" &&
              "bg-gradient-to-r from-[#3b31b0] to-[#5c50e1] text-white px-4 py-2 rounded-md font-medium"
            }`}
          >
            <button onClick={() => setTeam("competitive")}>
              Competitive Programming
            </button>
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
