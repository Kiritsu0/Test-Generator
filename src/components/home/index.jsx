import "./style.css";
import Nav from "../navbar";
import { useContext } from "react";
import { GlobalContext } from "../context";
import { LuClipboardList } from "react-icons/lu";

function Home() {
  const { testsNum } = useContext(GlobalContext);

  return (
    <div>
      <header>
        <Nav />
      </header>
      <div className="container-height">
        {testsNum ? (
          ""
        ) : (
          <div className="flex flex-col gap-6 h-full justify-center items-center text-4xl font-semibold">
            No Tests Generated
            <LuClipboardList className="text-5xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
