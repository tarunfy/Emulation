import { data } from "../../data/data";
import Card from "../Card";

const WebDevTeam = () => {
  return (
    <div className="mt-10">
      <div className="grid  sm:grid-cols-3 grid-cols-2 gap-4">
        {data.web.map((member, index) => (
          <Card key={index} info={member} />
        ))}
      </div>
    </div>
  );
};

export default WebDevTeam;
