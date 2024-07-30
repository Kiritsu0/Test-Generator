import Nav from "../navbar";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();
  const index = location.state.from;
  const { testsTitle, testsDescription, testsQuestions, correctAnswers } =
    useContext(GlobalContext);

    console.log(correctAnswers)
  const currentTest = testsQuestions[index];

  return (
    <div>
      <Nav />
      <div className="p-4 w-[50rem] mx-auto bg-emerald-500 mt-1 rounded-md">
        <h1 className="text-4xl font-bold mb-6 text-center">{testsTitle[index]}</h1>
        <p className="text-lg mb-6">{testsDescription[index]}</p>
        {currentTest && currentTest.length > 0 ? (
          currentTest.map((question, qIndex) => (
            <div key={qIndex} className="mb-6 bg-gray-300 p-5 rounded-md">
              <h2 className="text-xl font-semibold mb-2">
                Question {qIndex + 1}: {question.question}
              </h2>
              <div className="pl-4">
                {question.options.map((option, oIndex) => (
                  <div key={oIndex} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={option}
                        className="mr-2 w-5 h-5 cursor-pointer accent-emerald-700"
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-2xl text-center">No questions available for this test, please generate first.</p>
        )}
      </div>
    </div>
  );
}

export default Test;
