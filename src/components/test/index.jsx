import Nav from "../navbar";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();
  const index = location.state.from;
  const { testsTitle, testsDescription, testsQuestions } =
    useContext(GlobalContext);

  const currentTest = testsQuestions[index];

  return (
    <div>
      <Nav />
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{testsTitle[index]}</h1>
        <p className="text-lg mb-6">{testsDescription[index]}</p>
        {currentTest && currentTest.length > 0 ? (
          currentTest.map((question, qIndex) => (
            <div key={qIndex} className="mb-6">
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
                        className="mr-2"
                      />
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No questions available for this test, please generate one first.</p>
        )}
      </div>
    </div>
  );
}

export default Test;
