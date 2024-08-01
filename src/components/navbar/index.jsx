import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className='overflow-x-hidden'>
      <nav className="flex w-screen h-16 bg-white text-black justify-around items-center">
        <div className="text-2xl md:text-4xl font-semibold">
          <Link to={'/'}>Test Generator</Link>
        </div>
        <div className="flex gap-5 md:gap-10 text-xl md:text-2xl">
          <Link className="hover:text-emerald-500" to={"/"}>Home</Link>
          <Link className="hover:text-emerald-500" to={"/generator"}>Generate</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav