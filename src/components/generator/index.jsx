import Nav from "../navbar";
import { useState, useContext } from "react";
import { GlobalContext } from "../context";
import Questions from '../questions';

function Generator() {
  // Variables
  const { setQuestionsTestsNum, setTestsTitle, setTestsDescription } =
    useContext(GlobalContext);
  const [showInfoInput, setShowInfoInput] = useState(true);
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Functions
  const handleTestInfo = (e) => {
    e.preventDefault();
    setQuestionsTestsNum((previous) => [...previous, number]);
    setTestsTitle((previous) => [...previous, title]);
    setTestsDescription((previous) => [...previous, description]);
    setShowInfoInput(false)
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center mt-10">
        {showInfoInput ? (
          <div>
            <div className="mb-4">
              <p className="text-lg font-semibold">
                Fill the test information below!
              </p>
            </div>
            <div className="w-full max-w-96 border-black p-4 border rounded-md shadow-lg bg-white">
              <form className="space-y-4" onSubmit={handleTestInfo}>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter number"
                  required
                  max="15"
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
                  className="w-full cursor-pointer text-xl bg-cyan-600 rounded-md"
                />
              </form>
            </div>
          </div>
        )
        : <Questions />
      }
      </div>
    </div>
  );
}

export default Generator;
