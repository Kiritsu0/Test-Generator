import Nav from "../navbar";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context";

function Generator() {
  // Variables
  const { setQuestionsNum, setTestTitle, setTestDescription } =
    useContext(GlobalContext);
  const [number, setNumber] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Functions
  const handleTestInfo = (e) => {
    e.preventDefault();
    setQuestionsNum(number);
    setTestTitle(title);
    setTestDescription(description);
  };

  return (
    <div>
      <Nav />
      <div className="flex flex-col justify-center items-center mt-10">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="description"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="submit"
              value="Next"
              disabled={""}
              className="w-full cursor-pointer text-xl bg-cyan-600 rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Generator;
