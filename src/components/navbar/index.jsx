import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons from react-icons

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="overflow-x-hidden">
      <nav className="flex w-screen h-16 bg-white text-black justify-between items-center px-5 md:px-10">
        <div className="text-2xl md:text-4xl font-semibold">
          <Link to={"/"}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} className="w-60" />
          </Link>
        </div>
        {/* Icon for small screens */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleSidebar}
        >
          <FaBars />
        </div>
        {/* Navigation Links for larger screens */}
        <div className="hidden md:flex items-center gap-5 md:gap-10 text-lg md:text-xl">
          <Link className="hover:text-emerald-500" to={"/home"}>
            Home
          </Link>
          <Link
            className="hover:text-emerald-500"
            to={"/generator"}
            title="Manual test generating"
          >
            Generate
          </Link>
          <Link className="hover:text-emerald-500 font-semibold" to={"/home"}>
            LogIn
          </Link>
          <Link
            className="hover:bg-white transition hover:text-black border-2 border-black text-white px-4 py-1 bg-blue-900 rounded-full"
            to={"/home"}
          >
            SignUp
          </Link>
        </div>
      </nav>
      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 left-0 w-64 h-full z-10 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex items-center justify-between p-5">
          <span className="text-2xl font-semibold">Menu</span>
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
        <div className="flex flex-col gap-5 text-lg p-5">
          <Link
            className="hover:text-emerald-500"
            to={"/home"}
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            className="hover:text-emerald-500"
            to={"/generator"}
            onClick={toggleSidebar}
            title="Manual test generating"
          >
            Generate
          </Link>
          <Link
            className="hover:text-emerald-500 font-semibold"
            to={"/"}
            onClick={toggleSidebar}
          >
            LogIn
          </Link>
          <Link
            className="hover:bg-white transition-all ease-linear duration-100 hover:text-black border-2 border-transparent hover:border-black text-white px-4 py-1 text-center bg-blue-900 rounded-full"
            to={"/"}
            onClick={toggleSidebar}
          >
            SignUp
          </Link>
        </div>
      </div>
      {/* Overlay for sidebar when open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default Nav;
