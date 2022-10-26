import { data } from "../../../data/data";
import Card from "../../Card";

const AndroidDevTeam = () => {
  return (
    <div className="mt-10">
      <div className="grid md:grid-cols-3 sm:grid-cols-2  grid-col-1 gap-4">
        {data.android.map((member, index) => (
          <Card key={index} info={member} />
        ))}
      </div>
    </div>
  );
};

export default AndroidDevTeam;
