import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  const [testsNum, setTestsNum] = useState(0);
  const [questionsNum, setQuestionsNum] = useState(0);
  const [testTitle, setTestTitle] = useState("");
  const [testDescription, setTestDescription] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        testsNum,
        setTestsNum,
        questionsNum,
        setQuestionsNum,
        testTitle,
        setTestTitle,
        testDescription,
        setTestDescription,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default Context;
