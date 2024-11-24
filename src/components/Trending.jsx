import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNev from "./partials/TopNev";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Card from "./partials/Card";
import Loading from "./partials/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [tranding, setTranding] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  //   title
  document.title = " Zor-Movies | Tranding " + category;

  const GetTranding = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTranding((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
      //   setTranding(data.results);

      //   console.log(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (tranding.length === 0) {
      GetTranding();
    } else {
      setPage(1);
      setTranding([]);
      GetTranding();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return tranding.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="flex w-full xl:h-[10vh] h-[15vh] bg-green">
        <div className="xl:w-[25%] w-[60%] xl:h-[10vh] flex items-center mt-2 xl:static absolute top-[10vh] bg-purple">
          <h1
            onClick={() => navigate(-1)}
            className="xl:text-xl text-xs font-semibold text-zinc-400 xl:ml-10 ml-6 xl:mt-0 cursor-pointer"
          >
            <i
              onClick={() => navigate(-1)}
              class="hover:text-blue-700 hidden xl:inline text-zinc-400 text-lg  ri-arrow-left-line"
            ></i>{" "}
            Trending{" "}
            <span className="text-xs text-blue-500 font-normal uppercase">
              {category}
            </span>
          </h1>
        </div>
        <div className="w-full h-[10vh]">
          <TopNev />
        </div>
      </div>

      <div className="xl:w-fit xl:h-[10vh] flex gap-1  xjustify-center items-center px-2 absolute xl:top-0 top-[9vh] xl:right-7 right-1 bg-red mt-2">
        <Dropdown
          title="CATEGORY"
          options={["all", "tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w=[2%]"></div>
        <Dropdown
          title="DURATION"
          options={["Day", "Week"]}
          func={(e) => setDuration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        className="bg-blue x:mt-1 mt-3"
        dataLength={tranding.length}
        next={GetTranding}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={tranding} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
