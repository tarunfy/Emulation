import { data } from "../../data/data";
import Card from "../Card";

const Team = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-white text-center text-5xl tracking-tight font-bold">
        Meet the team of Emulation
      </h1>

      {/* Core */}
      <div className="mt-10 space-y-4">
        <h1 className="text-white/90 text-3xl font-medium">Core Team</h1>
        <div className="grid grid-cols-3 gap-4">
          {data.core.map((member, index) => (
            <Card key={index} info={member} />
          ))}
        </div>
      </div>

      {/* Web */}
      <div className="mt-10 space-y-4">
        <h1 className="text-white/90 text-3xl font-medium">
          Web Development Team
        </h1>
        <div className="grid grid-cols-3 gap-4">
          {data.web.map((member, index) => (
            <Card key={index} info={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
