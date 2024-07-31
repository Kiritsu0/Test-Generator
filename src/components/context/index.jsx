import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [questionsTestNum, setQuestionsTestNum] = useState(0);
  const [testTitle, setTestTitle] = useState("");
  const [testDescription, setTestDescription] = useState("");
  const [testQuestions, setTestQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
