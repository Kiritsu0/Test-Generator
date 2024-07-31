import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

function Questions() {
  const navigate = useNavigate();
  const {
    questionsTestNum,
    setTestQuestions,
    correctAnswers,
    setCorrectAnswers,
  } = useContext(GlobalContext);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(
      Array(parseInt(questionsTestNum)).fill({ question: "", options: ["", "", ""] })
    );
  }, [questionsTestNum]);

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
    setTestQuestions(questions);

    if (questions.length > 0) {
      navigate("/test", { replace: true });
    }
  };

  const handleCorrectOption = (qIndex, value) => {
    setCorrectAnswers((prevCorrectAnswers) => {
      const newCorrectAnswers = [...prevCorrectAnswers];
      newCorrectAnswers[qIndex] = parseInt(value) - 1;
      return newCorrectAnswers;
    });
  };

  return (
    <div>
      <p className="text-lg font-semibold">
        Fill the below questions and their options
      </p>
      <form
        className="w-full max-w-xl p-4 rounded-md shadow-lg bg-white"
        onSubmit={handleSubmit}
      >
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
            <div className="">
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
              <div className="flex items-center gap-3">
                <label name="number" className="font-semibold">
                  Enter the Number of the correct option above:
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Number"
                  required
                  max="3"
                  min="1"
                  value={
                    correctAnswers[qIndex] ? correctAnswers[qIndex] + 1 : ""
                  }
                  onChange={(e) => handleCorrectOption(qIndex, e.target.value)}
                  className="w-32 px-3 py-2 focus:outline-none"
                />
              </div>
            </div>
            <hr className="my-5 bg-emerald-500 h-1" />
          </div>
        ))}
        <input
          type="submit"
          value="Generate Test"
          className="w-full h-9 cursor-pointer text-xl bg-emerald-700 rounded-md"
        />
      </form>
    </div>
  );
}

export default Questions;
