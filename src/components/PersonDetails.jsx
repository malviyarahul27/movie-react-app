import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import TopNev from "./partials/TopNev";
import Loading from "./partials/Loading";
import Trailer from "./partials/Trailer";
import TrendingCard from "../components/partials/TrendingCard";
const PersonDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, []);

  return info ? (
    <div className="w-screen h-screen overflow-x-auto">
      <div className=" bg-red">
        <div className="flex w-full px-4 lg:px-10 h-[10vh] backdrop-blur-sm bg-white/5 items-center">
          <div className="xl:w-[25%] h-[10vh] flex items-center">
            <h1
              onClick={() => navigate(-1)}
              className="hidden lg:flex text-base lg:text-lg font-semibold text-zinc-400 cursor-pointer items-center"
            >
              <i class="text-zinc-400 text-base lg:text-lg ri-arrow-left-line mr-2"></i>

              {info.detail.name}
            </h1>
          </div>
          <div className="w-full h-full">
            <TopNev />
          </div>
          <div className="hidden lg:flex text-xl lg:text-2xl absolute right-4 lg:right-10 top-3 text-zinc-500">
            <button onClick={() => navigate("/")}>
              <i class="text-zinc-400 ri-home-4-line"></i>
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full xl:h-[150vh] h-screen xl:flex xl:flex-row justify-center items-center bg-orange">
        {/* left section  */}
        <div className="bg-green xl:h-full h-fit xl:pt-0 pt-10 xl:w-[30%] flex xl:flex-col xl:items-center justify-center items-start xl:gap-0 gap-5 xl:px-0 px-2">
          <img
            className="shadow-[5px_8px_10px_1px_rgba(0,0,0,50)] xl:w-[60%] w-[40%] xl:h-[50%] xl:mt-10 mt-2  rounded-xl object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <div className="xl:h-full h-[40vh] xl:mt-4 w-[50%] xl:pb-5 bg-red">
            <p className="hidden xl:flex xl:text-lg text-sm font-semibold  text-zinc-300">
              Personal Information
            </p>

            <p className="xl:text-md text-xs font-semibold text-zinc-300 flex flex-col xl:mt-3 mt-1">
              Known For :{" "}
              <span className="xl:text-sm text-xs font-normal text-zinc-400">
                {info.detail.known_for_department}
              </span>
            </p>
            <p className="xl:text-md text-xs font-semibold text-zinc-300 flex flex-col xl:mt-2 mt-1">
              Gender :{" "}
              <span className="xl:text-sm text:xl font-normal text-zinc-400">
                {info.detail.gender === 2 ? "Male" : "Female"}
              </span>
            </p>
            <p className="xl:text-md text-xs font-semibold text-zinc-300 flex flex-col xl:mt-2 mt-1 ">
              Birthday :{" "}
              <span className="xl:text-sm text-xs font-normal text-zinc-400">
                {info.detail.birthday}
              </span>
            </p>
            <p className="xl:text-md text-xs font-semibold text-zinc-300 flex flex-col xl:mt-2 mt-1 ">
              Place of birth :{" "}
              <span className="xl:text-sm text-xs font-normal text-zinc-400">
                {info.detail.place_of_birth}
              </span>
            </p>
            <p className="xl:text-md text-xs font-semibold text-zinc-300 flex lg:flex flex-col xl:mt-2 mt-1">
              Also Known as :{" "}
              <span className="xl:text-sm text-xs font-normal text-zinc-400">
                {info.detail.also_known_as &&
                info.detail.also_known_as.length > 0
                  ? info.detail.also_known_as.join(" • ")
                  : "No alternate names available"}
              </span>
            </p>
          </div>
        </div>
        {/* right section  */}
        <div className="bg-purple h-fit xl:px-0 px-3 xl:h-full xl:w-[60%] xl:pt-5 ">
          <h1 className="font-bold xl:pt-4 w-fit ml-1 xl:text-5xl text-zinc-300 text-3xl">
            {info.detail.name}
          </h1>
          <div className="flex gap-4 bg-blue xl:h-10 justify-center w-fit items-center ml-[3px] mt-1 xl:text-2xl text-xl ">
            <a
              target="blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
            >
              <i class="text-zinc-300 hover:text-zinc-400 duration-150 ri-facebook-circle-line"></i>
            </a>
            <a
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
            >
              <i class="text-zinc-300 hover:text-zinc-400 duration-150 ri-instagram-line"></i>
            </a>
            <a href={`https://x.com/${info.externalid.twitter_id}`}>
              <i class="text-zinc-300 hover:text-zinc-400 duration-150 ri-twitter-x-line"></i>
            </a>
            <a
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
            >
              <i class="text-zinc-300 hover:text-zinc-400 duration-150  ri-global-line"></i>
            </a>
            <a href={`https://www.imdb.com/name/${info.externalid.imdb_id}`}>
              <i class="text-zinc-300 hover:text-zinc-400 duration-150  ri-information-2-line"></i>
            </a>
          </div>
          <p className="text-zinc-300 xl:text-md text-sm ml-1 font-semibold flex flex-col">
            Biography :
            <span className="xl:mt-2 mt-1 font-normal text-zinc-300 xl:text-sm text-xs">
              {info.detail.biography}
            </span>
            <Link
              to={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              className="text-blue-500 cursor-pointer"
            >
              ...more
            </Link>
          </p>
          {/*  */}
          <div className="bg-green w-full border border-zinc-700 mt-5 ">
            <h1 className="xl:p-5 p-2 xl:text-left text-center">
              Movies And Tv Shows
            </h1>
            <TrendingCard data={info.combinedCredits.cast} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
export default PersonDetails;
