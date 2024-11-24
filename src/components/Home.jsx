import React, { useEffect, useState } from "react";
import SideNav from "./partials/SideNav";
import TopNev from "./partials/TopNev";
import axios from "../utils/axios";
import Header from "./partials/header";
import TrendingCard from "./partials/TrendingCard";
import Loading from "./partials/Loading";
import Dropdown from "./partials/Dropdown";
import SidebarMenu from "./partials/SIdebarbutton";

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
    <Loading />
  );
};

export default Home;
