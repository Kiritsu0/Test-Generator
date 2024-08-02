import "./style.css";
import Nav from "../navbar";
import { GlobalContext } from "../context";
import { useContext } from "react";
import { CiFileOff } from "react-icons/ci";

function Home() {
  const {
    handleSubmit,
    category,
    setCategory,
    setDefficulty,
    limit,
    setLimit,
    data,
  } = useContext(GlobalContext);
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="container-height">
        <div className="mt-10 mx-auto max-w-96 p-4 rounded-md shadow-lg bg-slate-800">
          <p className="text-white text-lg mb-5">
            To let us generate your quiz fill the below info
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              className="rounded-xl px-2 py-2 text-xl shadow-md shadow-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter the Test Title you want"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <input
              type="text"
              className="rounded-xl px-2 py-2 text-xl shadow-md shadow-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter the number of questions"
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
            <select
              onChange={(e) => setDefficulty(e.target.value)}
              className="rounded-xl px-2 py-2 text-xl shadow-md shadow-emerald-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <input
              type="submit"
              value="Generate Quiz"
              className="w-full cursor-pointer text-xl bg-emerald-500 text-white rounded-md"
            />
          </form>
        </div>
        <div className="bg-slate-800 min-h-52 mt-10 pt-10">
          {
            data ? 
              <div></div> 
            : 
              <div className="flex flex-col items-center gap-5 text-4xl text-white">
                No Generated Test
                <CiFileOff />
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
