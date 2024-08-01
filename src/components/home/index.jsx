import "./style.css";
import Nav from "../navbar";
import { useContext } from "react";
import { GlobalContext } from "../context";

function Home() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="container-height">
        <div className="flex justify-center mt-10">
        <input type="text" className="rounded-full px-2 py-1" placeholder="Enter Test Title"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
