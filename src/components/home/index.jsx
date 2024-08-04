import "./style.css";
import Nav from "../navbar";
import { GlobalContext } from "../context";
import { useContext } from "react";
import { CiFileOff } from "react-icons/ci";
import { Link } from "react-router-dom";

function Home() {
  const {
    handleSubmit,
    setCategory,
    setDifficulty,
    limit,
    setLimit,
    testsdata,
  } = useContext(GlobalContext);

  const categoryOptions = [
    "Any Category",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
    "Entertainment: Board Games",
    "Science & Nature",
    "Science: Computers",
    "Science: Mathematics",
    "Mythology",
    "Sports",
    "Geography",
    "History",
    "Politics",
    "Art",
    "Celebrities",
    "Animals",
    "Vehicles",
    "Entertainment: Comics",
    "Science: Gadgets",
    "Entertainment: Japanese Anime & Manga",
    "Entertainment: Cartoon & Animations",
  ];

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="container-height">
        <div className="mt-10 mx-auto max-w-96 p-4 rounded-md shadow-lg bg-slate-800">
          <p className="text-white text-lg mb-5">
            To let us generate your quiz fill the below info
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl px-2 py-2 text-xl shadow-md shadow-emerald-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              {categoryOptions.map((category, index) => (
                <option key={index} value={index === 0 ? null : index + 9}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="rounded-xl px-2 py-2 text-xl shadow-md shadow-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter the number of questions"
              required
              value={limit}
              onChange={(e) => setLimit(e.target.value)}
            />
            <select
              onChange={(e) => setDifficulty(e.target.value)}
              className="rounded-xl px-2 py-2 text-xl shadow-md shadow-emerald-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            >
              <option value="easy" defaultChecked>
                Easy
              </option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <input
              type="submit"
              value="Generate Quiz"
              className="w-full cursor-pointer text-xl bg-emerald-500 text-white rounded-md py-1"
            />
          </form>
        </div>
        <div className="bg-slate-800 min-h-52 mt-10 p-7">
          {testsdata && testsdata.length > 0 ? (
            <div className="flex flex-col gap-5">
              {testsdata.map((test, testIndex) => (
                <div
                  key={testIndex}
                  className="w-full flex flex-col bg-white p-2 rounded-md"
                >
                  <span className="font-semibold text-2xl text-emerald-500">
                    Test {testIndex + 1}
                  </span>
                  <div className="text-lg flex gap-2">
                    <span className="text-xl font-semibold">Categories:</span>
                    {test
                      .reduce((uniqueCategories, question) => {
                        if (!uniqueCategories.includes(question.category)) {
                          uniqueCategories.push(question.category);
                        }
                        return uniqueCategories;
                      }, [])
                      .map((category, index, array) => (
                        <span key={index}>
                          {category.replace("&amp;", "&")}
                          {index < array.length - 1 ? " - " : ""}
                        </span>
                      ))}
                  </div>
                  <div className="text-lg flex gap-2">
                    <span className="text-xl font-semibold">Difficulty:</span>
                    <span>{test[0].difficulty}</span>
                  </div>
                  <div className="text-lg flex gap-2">
                    <span className="text-xl font-semibold">
                      Questions number:
                    </span>
                    <span>{test.length}</span>
                  </div>
                  <Link
                    to="/test"
                    state={{ test: test, testIndex: testIndex}}
                    className="w-28 text-center self-end cursor-pointer text-xl bg-emerald-500 text-white rounded-md py-1 px-2"
                  >
                    Start Test
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5 text-4xl text-white">
              No Generated Test
              <CiFileOff />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
