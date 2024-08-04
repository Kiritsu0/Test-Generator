import { useState, useContext, useEffect } from "react";
import Nav from "../navbar";
import { GlobalContext } from "../context";
import { useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();
  const { test, testIndex } = location.state;
  const {
    testTitle,
    testDescription,
    testQuestions,
    setUserAnswers,
    correctAnswers,
    manualTest,
  } = useContext(GlobalContext);
  const [userAnswers, setUserAnswersLocal] = useState([]);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [questionsWithOptions, setQuestionsWithOptions] = useState([]);
  const [correctAnswerIndices, setCorrectAnswerIndices] = useState([]);

  useEffect(() => {
    if (test && test.length > 0) {
      const processedQuestions = test.map((question) => {
        const { incorrect_answers, correct_answer } = question;
        const randomIndex = Math.floor(
          Math.random() * (incorrect_answers.length + 1)
        );
        const options = [...incorrect_answers];
        options.splice(randomIndex, 0, correct_answer);
        return { ...question, options };
      });

      setQuestionsWithOptions(processedQuestions);

      const indices = processedQuestions.map((question) =>
        question.options.indexOf(question.correct_answer)
      );

      setCorrectAnswerIndices(indices);
    }
  }, [test]);

  const handleOptionChange = (qIndex, oIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = oIndex;
    setUserAnswersLocal(newAnswers);
  };

  const calculateScore = () => {
    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (manualTest) {
        if (answer === correctAnswers[index]) {
          correctCount++;
        }
      } else {
        if (answer === correctAnswerIndices[index]) {
          correctCount++;
        }
      }
    });
    setScore(correctCount);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserAnswers(userAnswers);
    calculateScore();
    setResult(true);
  };

  const handleTryAgain = () => {
    setUserAnswersLocal([]);
    setResult(false);
    setScore(0);
  };

  return (
    <div>
      <Nav />
      {result ? (
        <div className="p-4 max-w-[50rem] mx-5 md:mx-auto bg-slate-800 mt-20 rounded-md shadow-md">
          <h1 className="text-4xl text-white font-bold mb-6 text-center">
            Test Result
          </h1>
          <p className="text-2xl text-white mb-6 text-center">
            {manualTest
              ? `You scored ${score} out of ${testQuestions.length}`
              : `You scored ${score} out of ${test.length}`}
          </p>
          <button
            onClick={handleTryAgain}
            className="mt-4 bg-emerald-500 text-white py-2 px-4 rounded-md block mx-auto"
          >
            Try Again
          </button>
        </div>
      ) : manualTest ? (
        <div className="p-4 max-w-[50rem] mx-5 mb-5 md:mx-auto bg-slate-800 mt-1 rounded-md">
          <h1 className="text-4xl text-white font-bold mb-6 text-center">
            {testTitle}
          </h1>
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
                  className="mt-4 bg-emerald-700 text-white py-2 px-4 rounded-md block mx-auto"
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
      ) : (
        <div className="p-4 max-w-[50rem] mx-5 mb-5 md:mx-auto bg-slate-800 mt-1 rounded-md">
          <h1 className="text-4xl text-white font-bold mb-6 text-center">{`Test ${
            testIndex + 1
          }`}</h1>
          {/* <p className="text-lg mb-6">{testDescription}</p> */}
          <form onSubmit={handleSubmit}>
            {questionsWithOptions && questionsWithOptions.length > 0 ? (
              <>
                {questionsWithOptions.map((question, qIndex) => (
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
                  className="mt-4 bg-emerald-700 text-white py-2 px-4 rounded-md block mx-auto"
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
