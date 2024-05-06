import { useParams } from "react-router-dom";
import { dataTodos, editTodo } from "../data/todos";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const { id } = useParams();
  const params = useParams();

  const dataTodoFilter = dataTodos.filter((value) => {
    return value.id === Number(params.id);
  });
  const dataSingle = dataTodoFilter[0];

  const [title, setTitle] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    setTitle(dataSingle.title);
    setIsDone(dataSingle.isDone);
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCanlcelEdit = () => {
    setIsEdit(false);
  };

  const handleSave = () => {
    editTodo(Number(id), {
      title: title,
      isDone: isDone,
    });
    setIsEdit(false);
  };

  return (
    <div>
      <div className="flex justify-between p-3 bg-black">
        <Link to={`/`} className="hover:opacity-75">
          <h1 className="text-3xl font-bold text-white">What To Do?</h1>
        </Link>
      </div>

      <div className=" bg-black mx-96 p-5 mt-4 rounded-lg ">
        {!isEdit && (
          <div>
            <div className=" mb-10 flex justify-between ">
              <h1 className=" text-2xl font-semibold text-white ">
                {dataSingle?.title}
              </h1>
              <div className="flex flex-row-reverse gap-2">
                <input
                  type="checkbox"
                  name="isDone"
                  id="isDone"
                  checked={dataSingle.isDone}
                  hidden
                />
                <span className="text-white font-semibold -mt-2 ">
                  {dataSingle.isDone ? "Done" : "Processing"}
                </span>
              </div>
            </div>

            <button
              onClick={handleEdit}
              className=" py-2 px-4 bg-white text-black rounded font-semibold hover:opacity-85 "
            >
              Edit
            </button>
          </div>
        )}

        {isEdit && (
          <div className=" flex flex-col ">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white rounded p-2 text-black focus:bg-black focus:text-white transition-all"
            />
            <div className=" flex text-white mt-4 mb-9 gap-2 ">
              <input
                type="checkbox"
                name="isDone"
                id="isDone"
                checked={isDone}
                onChange={(e) => setIsDone(e.target.checked)}
                className="w-5 h-5"
              />
              <span className="text-white font-semibold">
                {isDone ? "Done" : "Processing"}
              </span>
            </div>
            <div className="flex gap-5 justify-end">
              <button
                onClick={handleCanlcelEdit}
                className=" font-semibold bg-white p-2 rounded hover:opacity-85 "
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className=" bg-white font-semibold p-2 rounded hover:opacity-85 "
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
