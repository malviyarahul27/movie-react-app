import axios from "../../utils/axios";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideNav = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  //

  return (
    <div className="xl:w-[20%] w-[55%] h-[70%] xl:px-8 xl:mt-0 mt-[9vh] xl:h-screen xl:border-r border-zinc-700 p-6 overflow-hidden  z-10 bg-[#100f0f] xl:visible invisible xl:static absolute">
      <h1 className="w-fit text-2xl border border-zinc-700 rounded-full text-center p-2 px-2 ">
        <i class="text-[#02A7FA] ri-movie-2-ai-line  border-zinc-700 border-r px-2"></i>
        <span className="px-2">ZOR</span>
      </h1>

      <div className="w-full h-full overflow-auto no-scrollbar scroll-smooth">
        <nav className="flex flex-col text-zinc-400 text-md gap-1">
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
        <nav className="flex flex-col text-zinc-400 text-md gap-1 mb-20">
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
  );
};

export default SideNav;
