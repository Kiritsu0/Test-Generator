import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex w-screen h-16 bg-blue-500 text-gray-800 justify-around items-center">
        <div className="text-2xl md:text-4xl font-semibold">
          <Link to={'/'}>Test Generator</Link>
        </div>
        <div className="flex gap-10 text-xl md:text-2xl">
          <Link className="hover:text-light-teal" to={"/"}>Home</Link>
          <Link className="hover:text-light-teal" to={"/generator"}>Generate</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav