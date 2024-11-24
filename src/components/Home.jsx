import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNev from "./partials/TopNev";
import axios from "../utils/axios";
import Header from "./partials/header";
import TrendingCard from "./partials/TrendingCard";
import Loading from "./partials/Loading";
import Dropdown from "./partials/Dropdown";

const Home = () => {
  document.title = "ZOR-MOVIES | HOME";
  const [headerbg, setHeaderbg] = useState(null);

  const [Trending, setTrending] = useState(null);

  const [category, setCategory] = useState("all");

  const getBg = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomBg =
        data.results[(Math.random() * data.results.length).toFixed()];
      setHeaderbg(randomBg);
      // console.log(randomBg);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // console.log(headerbg);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
      // console.log(randomBg);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    !headerbg && getBg();
    getTrending();
  }, [category]);

  return headerbg && Trending ? (
    <>
      <SideNav />
      <div className="xl:w-[80%] w-[100%] h-screen overflow-auto overflow-x-hidden no-scrollbar bg-green">
        {/* <div
          id="navbar"
          className="w-full xl:hidden h-[9vh] font-normal text-sm text-zinc-400 flex items-center px-4 border-t border-zinc-800 relative"
        >
          

        </div> */}
        <TopNev />

        <Header data={headerbg} />

        <div className="w-full flex justify-between items-center p-4 px-6">
          <h1 className="text-xl font-medium text-slate-300">
            Trending Movies
          </h1>
          <Dropdown
            title="FILTER"
            options={["all", "tv", "movie"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>

        <TrendingCard data={Trending} category={category} />
      </div>
    </>
  ) : (
    //

    //   <div className="flex">
    //   {/* Side Navigation - toggle for smaller screens */}
    //   <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    //   {/* Main Content */}
    //   <div className={`w-full lg:w-[80%] ${isSidebarOpen ? 'ml-[70%]' : 'lg:ml-[20%]'} h-screen overflow-auto overflow-x-hidden`}>
    //     {/* Toggle button for mobile sidebar */}

    //     {/* Top Navigation */}
    //     <TopNev />

    //     {/* Header Section */}
    //     <Header data={headerbg} />

    //     {/* Trending Section */}
    //     <div className="w-full flex flex-col md:flex-row justify-between items-center p-4 px-6">
    //       <h1 className="text-lg md:text-xl font-medium text-slate-300 mb-2 md:mb-0">Trending Movies</h1>
    //       <Dropdown
    //         title="FILTER"
    //         options={["all", "tv", "movie"]}
    //         func={(e) => setCategory(e.target.value)}
    //       />
    //     </div>

    //     {/* Trending Cards */}
    //     <TrendingCard data={Trending} />
    //   </div>
    // </div>
    //
    <Loading />
  );
};

export default Home;
