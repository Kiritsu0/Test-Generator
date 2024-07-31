import { useState, useContext } from "react";
import Nav from "../navbar";
import { GlobalContext } from "../context";

function Test() {
  const { testTitle, testDescription, testQuestions, setUserAnswers } =
    useContext(GlobalContext);
  const [userAnswers, setUserAnswersLocal] = useState([]);
  const [result, setResult] = useState(false);

  const handleOptionChange = (qIndex, oIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = oIndex;
    setUserAnswersLocal(newAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserAnswers(userAnswers);
    setResult(true);
  };

  return (
    <div>
      <Nav />
      {result ? (
        <div></div>
      ) : (
        <div className="p-4 w-[50rem] mx-auto bg-emerald-500 mt-1 rounded-md">
          <h1 className="text-4xl font-bold mb-6 text-center">{testTitle}</h1>
          <p className="text-lg mb-6">{testDescription}</p>
          <form onSubmit={handleSubmit}>
            {testQuestions && testQuestions.length > 0 ? (
              <>
                {testQuestions.map((question, qIndex) => (
                  <div key={qIndex} className="mb-6 bg-gray-300 p-5 rounded-md">
                    <h2 className="text-xl font-semibold mb-2">
                      Question {qIndex + 1}: {question.question}
                    </h2>
                    <div className="pl-4">
                      {question.options.map((option, oIndex) => (
                        <div key={oIndex} className="mb-2">
                          <label className="flex items-center text-lg">
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              value={option}
                              required
                              checked={userAnswers[qIndex] === oIndex}
                              onChange={() =>
                                handleOptionChange(qIndex, oIndex)
                              }
                              className="mr-2 w-5 h-5 cursor-pointer accent-emerald-700"
                            />
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="mt-4 bg-emerald-700 text-white py-2 px-4 rounded-md"
                >
                  Submit
                </button>
              </>
            ) : (
              <p className="text-2xl text-center">
                No questions available for this test, please generate first.
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default Test;
