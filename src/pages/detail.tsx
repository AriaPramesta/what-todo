import { useParams } from "react-router-dom";
import { dataTodos } from "../data/todos";
import { Link } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const dataTodoFilter = dataTodos.filter((value) => {
    return value.id === Number(params.id);
  });
  const dataSingle = dataTodoFilter[0];
  return (
    <div>
      <div className="flex justify-between p-3 bg-black">
        <Link to={`/`} className="hover:opacity-75">
          <h1 className="text-3xl font-bold text-white">What To Do?</h1>
        </Link>
      </div>
      <div>
        <h1 className=" text-2xl font-semibold ">{dataSingle.title}</h1>
      </div>
    </div>
  );
}
