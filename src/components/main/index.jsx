import Nav from "../navbar";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function Main() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="h-1/2 pt-28 pb-5 flex flex-col md:flex-row justify-around items-center bg-cyan-700">
        <div className="max-w-[28rem] space-y-7">
          <p className="text-5xl text-white">
            Powerful online test and quiz maker
          </p>
          <p className="text-3xl text-white">
            Create, send and analyze your tests, quizzes and assessments for
            free with FlexiQuiz
          </p>
          <Link className="bg-emerald-500 hover:bg-cyan-700 border-2 border-transparent hover:border-white w-64 transition-all ease-in delay-150 duration-200 px-6 py-2 rounded-full flex gap-2 hover:gap-5 items-center text-xl text-white">
            Get started for free
            <FaArrowRight className="text-lg" />
          </Link>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/image_1.png`}
          alt="image"
          className="w-1/2 h-96 rounded-xl shadow-white shadow-xl"
        />
      </div>
    </div>
  );
}

export default Main;
