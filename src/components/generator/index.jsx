import Nav from "../navbar";
import { useState, useContext } from "react";
import { GlobalContext } from "../context";
import Questions from "../questions";

function Generator() {
  const { setQuestionsTestNum, setTestTitle, setTestDescription } =
    useContext(GlobalContext);
  const [showInfoInput, setShowInfoInput] = useState(true);
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTestInfo = (e) => {
    e.preventDefault();
    setQuestionsTestNum(number);
    setTestTitle(title);
    setTestDescription(description);
    setShowInfoInput(false);
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center mx-10 my-5">
        {showInfoInput ? (
          <div>
            <div>
              <p className="text-lg font-semibold text-white max-w-96">
                Fill the test information below to generate your own test questions!
              </p>
            </div>
            <div className="w-full max-w-96 p-4 rounded-md shadow-lg bg-slate-800">
              <form className="space-y-4" onSubmit={handleTestInfo}>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter the number of questions"
                  required
                  max="15"
                  min="1"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="submit"
                  value="Next"
                  className="w-full cursor-pointer text-xl bg-emerald-500 text-white rounded-md py-1"
                />
              </form>
            </div>
          </div>
        ) : (
          <Questions />
        )}
      </div>
    </div>
  );
}

export default Generator;
