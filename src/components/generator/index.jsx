import Nav from "../navbar";
import Questions from "../questions";
import Footer from "../footer";
import { useState, useContext } from "react";
import { GlobalContext } from "../context";

function Generator() {
  // Destructure context values to set number of questions, title, and description
  const { setQuestionsTestNum, setTestTitle, setTestDescription } =
    useContext(GlobalContext);

  // State to control whether the test info form is shown or the questions component
  const [showInfoInput, setShowInfoInput] = useState(true);

  // State to store user input for number of questions, title, and description
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle the submission of test info form
  const handleTestInfo = (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    setQuestionsTestNum(number); // Set the number of questions in the context
    setTestTitle(title); // Set the test title in the context
    setTestDescription(description); // Set the test description in the context
    setShowInfoInput(false); // Hide form and show questions component
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-10 my-5 mb-24">
        {showInfoInput ? (
          <div>
            <div>
              <p className="text-lg font-semibold text-white max-w-96">
                Fill the test information below to generate your own test
                questions!
              </p>
            </div>

            {/* Form to input test information */}
            <div className="w-full max-w-96 p-4 rounded-md shadow-lg bg-slate-800">
              <form className="space-y-4" onSubmit={handleTestInfo}>
                {/* Input field for number of questions */}
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

                {/* Input field for test title */}
                <input
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />

                {/* Textarea for test description */}
                <textarea
                  name="description"
                  placeholder="Description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />

                {/* Submit button to move to the next step */}
                <input
                  type="submit"
                  value="Next"
                  className="w-full cursor-pointer text-xl bg-emerald-500 hover:bg-emerald-700 text-white rounded-md py-1"
                />
              </form>
            </div>
          </div>
        ) : (
          // Render Questions component after submitting test info
          <Questions />
        )}
      </div>

      {/* Render footer */}
      <Footer />
    </div>
  );
}

export default Generator;
