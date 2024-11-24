import axios from "../../utils/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import noimage from "../../assests/noimage.jpg";
import SidebarMenu from "./SIdebarbutton";

const TopNev = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleButtonClick = (e) => {
    toggleSidebar(); // Toggles the sidebar
    setquery(""); // Sets the query value
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full bg-red h-[9vh] xl:h-[10vh] border-zinc-700 flex items-center">
      <div className="w-full h-full bg-yellow flex xl:hidden justify-between items-center px-3 ">
        <SidebarMenu />

        <Link
          to={"/"}
          className="w-fit static text-lg  border-zinc-700 text-center p-1 "
        >
          <i class="text-[#02A7FA] ri-movie-2-ai-line  border-zinc-700 border-r px-[6px]"></i>
          <span className="px-2 text-zinc-300">ZOR</span>
        </Link>
        <button onClick={toggleSidebar}>
          {" "}
          <i class="text-xl text-zinc-500 px-2  ri-search-2-line"></i>
        </button>
        {/*  */}
        <div
          className={`fixed top-0 left-0 h-[9vh] w-full sm:w-[50%] bg-[#100f0f] text-white transform ${
            isSidebarOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-150 ease-in-out z-50`}
        >
          <button
            onClick={(e) => handleButtonClick(e)}
            className="absolute top-3 right-4 text-2xl text-zinc-500"
          >
            <i className="text-zinc-500 ri-close-line"></i>
          </button>
          <div className="h-full w-full bg-red">
            {/*  */}
            <div className="bg-blue w-full h-full flex items-center gap-3 px-4 text-zinc-100 hover:border-slate-0 ">
              <i class="text-zinc-400 text-md mt-[2px] ri-search-2-line"></i>
              <input
                onChange={(e) => setquery(e.target.value)}
                value={query}
                className="w-[86%] bg-transparent outline-none text-sm font-light"
                type="text"
                placeholder="Enter Text Here"
              />
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/*  */}

      <div className="bg-blue xl:w-1/2 w-full xl:h-12 h-8 xl:flex items-center justify-between xl:gap-6 gap-2 xl:p-0 xl:px-4 text-zinc-100 hover:border-slate-0 xl:ml-40 px-12 hidden">
        <i class="text-zinc-400 xl:text-lg mt-[2px] text-sm ri-search-2-line"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-full bg-transparent outline-none xl:text-[2.3vh] text-xs"
          type="text"
          placeholder="Enter Text Here"
        />

        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            class="text-zinc-400 xl:text-2xl text-sm ri-close-fill"
          ></i>
        )}
      </div>

      <div
        id="searchBigbox"
        className="bg-slate-900 xl:min-w-[39.5%] min-w-full xl:max-h-96 max-h-80 absolute xl:top-[10%] top-[9vh] xl:left-[30.7%] xl:rounded-b-lg overflow-x-auto xl:no-scrollbar"
      >
        {searches.map((s, i) => (
          <Link
            to={`/${s.media_type}/details/${s.id}`}
            key={i}
            className="w-full p-6 flex gap-5 justify-start items-center border-b  border-slate-600 hover:bg-[#02A7FA] font-semibold duration-200"
          >
            <img
              className="w-[10vh] h-[8vh] object-cover rounded shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNev;
