import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import TopNev from "./partials/TopNev";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./partials/Card";
import Loading from "./partials/Loading";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");

  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);

  //   title
  document.title = " Zor-Movies | People";

  const GetPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      console.log(data);

      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
      //  setPerson(data.results);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      GetPerson();
    } else {
      setPage(1);
      setPerson([]);
      GetPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return person.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="flex w-full xl:h-[10vh] h-[15vh] bg-green">
        <div className="xl:w-[25%] w-[60%] xl:h-[10vh] flex items-center xl:static absolute top-[10vh] bg-purple">
          <h1
            onClick={() => navigate(-1)}
            className="xl:text-xl text-xs font-semibold text-zinc-400 xl:ml-10 ml-6 xl:mt-0 cursor-pointer"
          >
            <i
              onClick={() => navigate(-1)}
              class="hover:text-blue-700 hidden xl:inline text-zinc-400 text-lg  ri-arrow-left-line"
            ></i>{" "}
            People{" "}
            <span className="text-xs text-blue-500 font-normal uppercase">
              {category}
            </span>
          </h1>
        </div>
        <div className="w-full h-[10vh]">
          <TopNev />
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasmore}
        loader={<h1>Loading...</h1>}
      >
        <Card data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default People;
