import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context";

function Questions() {
  const { questionsTestsNum } = useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const lastValue = parseInt(questionsTestsNum[questionsTestsNum.length - 1]);
    setQuestions(Array(lastValue).fill({ question: "", options: ["", "", ""] }));
  }, [questionsTestsNum]);

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <form className="w-full max-w-xl p-4 rounded-md shadow-lg bg-white">
        {questions.map((q, qIndex) => (
          <div key={qIndex}>
            <input
              type="text"
              required
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder={`Question ${qIndex + 1}`}
            />
            <div className="flex gap-5">
              {q.options.map((option, oIndex) => (
                <input
                  key={oIndex}
                  type="text"
                  required
                  value={option}
                  onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)}
                  className="w-full px-3 py-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder={`Option ${oIndex + 1}`}
                />
              ))}
            </div>
            <hr className="my-5 bg-emerald-500 h-1" />
          </div>
        ))}
        <input
          type="submit"
          value="Generate Test"
          className="w-full cursor-pointer text-xl bg-cyan-600 rounded-md"
        />
      </form>
    </div>
  );
}

export default Questions;
