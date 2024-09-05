import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function Context({ children }) {
  // State for the number of questions in the test
  const [questionsTestNum, setQuestionsTestNum] = useState(0);

  // State for the test title
  const [testTitle, setTestTitle] = useState("");

  // State for the test description
  const [testDescription, setTestDescription] = useState("");

  // State to store test questions
  const [testQuestions, setTestQuestions] = useState([]);

  // State to store correct answers for the test
  const [correctAnswers, setCorrectAnswers] = useState([]);

  // State to store user's answers to the test
  const [userAnswers, setUserAnswers] = useState([]);

  // State to store all test data retrieved from the API
  const [testsdata, setData] = useState([]);

  // State to manage the category of the test questions
  const [category, setCategory] = useState("");

  // State to manage the difficulty level of the test
  const [difficulty, setDifficulty] = useState("easy");

  // State to set the limit (number of questions)
  const [limit, setLimit] = useState("");

  // State to track whether the test is manually created
  const [manualTest, setManualTest] = useState(false);

  // State to track the loading status when fetching data
  const [loading, setLoading] = useState(false);

  // Function to fetch test questions from the Open Trivia Database API
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true while fetching data
    try {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${limit}&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();

      // If data is successfully fetched and results are available
      if (Array.isArray(data.results) && data.results.length > 0) {
        setData((previous) => [...previous, data.results]); // Append new test data
        setLimit(""); // Reset the limit state
        setLoading(false); // Set loading to false after fetching
      }
    } catch (error) {
      console.log(error); // Log any errors
      setLoading(false); // Set loading to false in case of an error
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
