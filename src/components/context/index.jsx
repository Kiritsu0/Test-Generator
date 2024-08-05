import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [questionsTestNum, setQuestionsTestNum] = useState(0);
  const [testTitle, setTestTitle] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [testQuestions, setTestQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [testsdata, setData] = useState([]);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [limit, setLimit] = useState("");
  const [manualTest, setManualTest] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${limit}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();
      if (Array.isArray(data.results) && data.results.length > 0) {
        setData((previous) => [...previous, data.results]);
        setLimit("");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
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
        difficulty,
        setDifficulty,
        limit,
        setLimit,
        testsdata,
        setData,
        manualTest,
        setManualTest,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
