import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNev from "./partials/TopNev";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./partials/Card";
import Loading from "./partials/Loading";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("movie");

  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  //   title
  document.title = " Zor-Movies | Popular " + category;

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      // console.log(data);

      if (data.results.length > 0) {
        setPopular((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
      //   setPopular(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setPage(1);
      setPopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="flex w-full xl:h-[10vh] h-[15vh] bg-green">
        <div className="xl:w-[25%] w-[60%] xl:h-[10vh] mt-2 flex items-center xl:static absolute top-[10vh] bg-purple">
          <h1
            onClick={() => navigate(-1)}
            className="xl:text-xl text-xs font-semibold text-zinc-400 xl:ml-10 ml-6 xl:mt-0 cursor-pointer"
          >
            <i
              onClick={() => navigate(-1)}
              class="hover:text-blue-700 hidden xl:inline text-zinc-400 text-lg  ri-arrow-left-line"
            ></i>{" "}
            Popular{" "}
            <span className="text-xs text-blue-500 font-normal uppercase">
              {category}
            </span>
          </h1>
        </div>
        <div className="w-full h-[10vh]">
          <TopNev />
        </div>
      </div>

      <div className="xl:w-[12%] bg-purple mt-2 xl:h-[10vh] flex justify-center items-center px-2 absolute xl:top-0 top-[9vh] xl:right-7 right-1 ">
        <Dropdown
          title="CATEGORY"
          options={["all", "tv", "movie"]}
          func={(e) => setCategory(e.target.value)}
        />
        <div className="w=[2%]"></div>
      </div>

      <InfiniteScroll
        className="bg-blue x:mt-1 mt-3"
        dataLength={popular.length}
        next={GetPopular}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
