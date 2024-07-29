import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='overflow-x-hidden'>
      <nav className="flex w-screen h-16 bg-emerald-700 text-white justify-around items-center">
        <div className="text-2xl md:text-4xl font-semibold">
          <Link to={'/'}>Test Generator</Link>
        </div>
        <div className="flex gap-5 md:gap-10 text-xl md:text-2xl">
          <Link className="hover:text-lime-200" to={"/"}>Home</Link>
          <Link className="hover:text-lime-200" to={"/generator"}>Generate</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav