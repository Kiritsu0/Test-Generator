import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const { questionsTestsNum, setTestsQuestions, setTestsNum } =
    useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const lastValue = parseInt(questionsTestsNum[questionsTestsNum.length - 1]);
    setQuestions(
      Array(lastValue).fill({ question: "", options: ["", "", ""] })
    );
  }, [questionsTestsNum]);

  const handleQuestionChange = (index, value) => {
    const newQuestions = questions.map((q, i) =>
      i === index ? { ...q, question: value } : q
    );
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuestions = questions.map((q, i) =>
      i === qIndex
        ? { ...q, options: q.options.map((o, j) => (j === oIndex ? value : o)) }
        : q
    );
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTestsQuestions((previous) => [...previous, questions]);
    setTestsNum((previous) => {
      const newTestsNum = previous + 1;
      navigate("/test", { replace: true, state: { from: newTestsNum - 1 } });
      return newTestsNum;
    });
  };
  return (
    <div>
      <p className="text-lg font-semibold">
        Fill the below questions and their options
      </p>
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
                  onChange={(e) =>
                    handleOptionChange(qIndex, oIndex, e.target.value)
                  }
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
          className="w-full h-9 cursor-pointer text-xl bg-emerald-700 rounded-md"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Questions;
