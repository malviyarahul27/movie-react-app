import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [query, setquery] = useState("");

  return (
    <div className="relative xl:hidden ">
      {/* Menu Button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl text-zinc-500 p-2 lg:hidden"
      >
        <i className="text-xl text-zinc-500 ri-menu-line"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[100%] w-[60%] sm:w-[50%] bg-[#100f0f] text-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl text-zinc-500"
        >
          <i className="ri-close-line"></i>
        </button>
        <div className="mt-5 space-y-4 px-6">
          <div className="w-full h-full overflow-auto no-scrollbar scroll-smooth bg-red">
            <nav className="flex flex-col text-zinc-400 xl:text-md text-sm gap-1 bg-blue">
              <h1 className="font-semibold text-zinc-100 text-lg mt-10 mb-3 px-6 ">
                For You
              </h1>
              <Link
                to="/trending"
                className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300"
              >
                {" "}
                Trending
              </Link>
              <Link
                to="/popular"
                className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300"
              >
                Popular
              </Link>
              <Link
                to="/tv"
                className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300"
              >
                TV Seriese
              </Link>
              <Link
                to="/movie"
                className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300"
              >
                Movies
              </Link>
              <Link
                to="/person"
                className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300"
              >
                Peoples
              </Link>
            </nav>
            <hr className="mt-5" />
            <nav className="flex flex-col text-zinc-400 xl:text-md text-sm gap-1 ">
              <Link className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300 mt-5">
                Setting
              </Link>
              <Link className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300">
                About
              </Link>
              <Link className="hover:bg-[#02A7FA] hover:text-zinc-900 hover:font-semibold p-3 px-6 rounded-full duration-300 ">
                Help
              </Link>
            </nav>
          </div>
        </div>
        {/* </div>  */}
      </div>

      {/* Overlay (when sidebar is open) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default SidebarMenu;
