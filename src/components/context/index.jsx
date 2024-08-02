import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [questionsTestNum, setQuestionsTestNum] = useState(0);
  const [testTitle, setTestTitle] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [testQuestions, setTestQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [data, setData] = useState('');
  const [category, setCategory] = useState("");
  const [defficulty, setDefficulty] = useState("");
  const [limit, setLimit] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("https://quizapi.io/api/v1/questions?apiKey=r9ZgzHlHshoGN2LWpz94mJsPFHZ0BcjFiOXIois5&category=bash&difficulty=Hard&limit=10");
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setData(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        questionsTestNum,
        setQuestionsTestNum,
        testTitle,
        setTestTitle,
        testDescription,
        setTestDescription,
        testQuestions,
        setTestQuestions,
        correctAnswers,
        setCorrectAnswers,
        userAnswers,
        setUserAnswers,
        handleSubmit,
        category,
        setCategory,
        defficulty,
        setDefficulty,
        limit,
        setLimit,
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
