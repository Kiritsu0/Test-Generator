import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [testsNum, setTestsNum] = useState(0);
  const [questionsTestsNum, setQuestionsTestsNum] = useState([]);
  const [testsTitle, setTestsTitle] = useState([]);
  const [testsDescription, setTestsDescription] = useState([]);
  const [testsQuestions, setTestsQuestions] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        testsNum,
        setTestsNum,
        questionsTestsNum,
        setQuestionsTestsNum,
        testsTitle,
        setTestsTitle,
        testsDescription,
        setTestsDescription,
        testsQuestions,
        setTestsQuestions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
