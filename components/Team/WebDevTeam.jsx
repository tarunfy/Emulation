import { data } from "../../data/data";
import Card from "../Card";

const WebDevTeam = () => {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-3 gap-4">
        {data.web.map((member, index) => (
          <Card key={index} info={member} />
        ))}
      </div>
    </div>
  );
};

export default WebDevTeam;
