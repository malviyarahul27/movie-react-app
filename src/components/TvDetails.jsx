import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/tvActions";
import { useNavigate, useParams } from "react-router-dom";
import TopNev from "./partials/TopNev";
import Loading from "./partials/Loading";
import Trailer from "./partials/Trailer";
import { Link } from "react-router-dom";
import noimage from "../assests/noimage.jpg";

const TvDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { info, loading, error } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(asyncloadtv(id));
    }
    return () => {
      dispatch(removetv());
    };
  }, [id, dispatch]);
  if (error) {
    return (
      <div>
        <p>Error Loading Movie Details: {error}</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    );
  }
  //
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="w-screen h-screen overflow-auto"
    >
      <div className="flex w-full h-[10vh] backdrop-blur-sm items-center px-4 lg:px-10 bg-red ">
        {/* Back Button and Title */}
        <div className="xl:w-[25%] h-full flex items-center bg-green">
          <h1
            onClick={() => navigate(-1)}
            className="hidden lg:flex text-base lg:text-lg font-semibold text-zinc-400 cursor-pointer items-center"
          >
            <i className="text-zinc-400 text-base lg:text-lg ri-arrow-left-line mr-2"></i>
            <span className="truncate">
              {info.detail.name || info.detail.name}
            </span>
          </h1>
        </div>

        {/* Top Navigation */}
        <div className="w-full h-full">
          <TopNev />
        </div>

        {/* Home Button */}

        <div className="hidden lg:flex text-xl lg:text-2xl absolute right-4 lg:right-10 top-3 text-zinc-500">
          <button onClick={() => navigate("/")}>
            <i className="text-zinc-400 ri-home-4-line"></i>
          </button>
        </div>
      </div>
      {/* main section*/}
      <div className="w-full xl:h-[70vh] flex xl:flex-row flex-col xl:gap-8 gap-3 justify-center  items-center bg-red">
        <img
          className="shadow-[5px_8px_10px_1px_rgba(0,0,0,50)] xl:w-[18%] xl:h-[80%] h-72 w-52 xl:mt-12 mt-8 rounded-xl object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        {/*  */}

        <div className="xl:w-[50%] w-screen h-[75%] flex flex-col bg-red xl:text-start text-center px-10  xl:mt-[4vh]">
          <h1 className="font-semibold xl:w-fit w-full xl:text-5xl text-3xl text-zinc-200">
            {info.detail.name || info.detail.name}
          </h1>
          <span className="xl:w-fit xl:mt-3 mt-1 ml-1">
            {info.detail.first_air_date} -{" "}
            {info.detail.spoken_languages.map((leng, index) => (
              <a key={leng.id}>
                {" "}
                {leng.english_name}
                {index < info.detail.spoken_languages.length - 1 && ", "}
              </a>
            ))}
          </span>
          {/*  */}
          <p className=" text-zinc-300 xl:w-fit xl:mt-4 mt-2 xl:flex-none justify-center flex xl:gap-0 gap-2">
            {info.detail.genres.map((genre) => (
              <span
                key={genre.id}
                className="border border-zinc-200 rounded-full px-2 py-1 text-sm xl:mr-3"
              >
                {genre.name.slice(0, 10)}
              </span>
            ))}
          </p>
          {/*  */}
          <p className="xl:mt-3 mt-2 ml-1 w-full xl:w-[90%]">
            Overview :- {info.detail.overview.slice(0, 350)}
            <span className="text-blue-500 cursor-pointer">...more</span>
          </p>
          {/*  */}
          <div className="xl:w-fit flex p gap-8 items-center text-lg mt-4 bg-blue">
            <a
              target="_blank"
              href={info.detail.homepage}
              className="border rounded-xl w-40 xl:h-28 h-10 flex px-2 items-center justify-center bg-black/50 backdrop-blur-md border-zinc-600 hover:bg-white/20 duration-200"
            >
              <h1 className="text-sm font-medium text-zinc-400">WEBSITE</h1>
            </a>

            <a
              target="_blank"
              href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
              className="border rounded-xl w-40 xl:h-28 h-10 flex px-2 items-center justify-center bg-black/50 backdrop-blur-md border-zinc-600 hover:bg-white/20 duration-200"
            >
              <h1 className="text-sm font-medium text-zinc-400">IMDB</h1>
            </a>
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              className="w-40 xl:h-28 h-10 flex flex-col rounded-xl backdrop-blur-md justify-center items-center border border-zinc-600 hover:bg-white/20 bg-black/50 duration-200 px-2"
            >
              <h1 className="text-sm font-medium text-zinc-400">WIKIPEDIA</h1>
            </a>
          </div>
        </div>
      </div>
      {/* Trailer */}
      <div className="w-full xl:h-[90vh] h-[45vh] bg-blue flex justify-center">
        <div className="w-[80vw] xl:h-[85vh] h-[40vh] xl:py-0 py-1 rounded-t-xl text-center border bg-transparent border-zinc-500 mt-[5vh]">
          <h1 className="text-zinc-300 uppercase font-semibold xl:text-2xl xl:h-[8vh] h-[5vh] flex justify-center items-center border-b border-zinc-500">
            Trailer
          </h1>
          <div className="w-full xl:h-[76.8vh] h-[89%] flex">
            <Trailer />
          </div>
        </div>
      </div>{" "}
      {/* Cast and Crow */}
      <div className="w-full xl:h-[100vh] h-[65vh] flex flex-col xl:justify-evenly justify-evenly bg-black/30 backdrop-blur-xl">
        <div className="w-full xl:h-[45vh] h-[30vh] bg-orange">
          <h1 className="xl:text-2xl xl:px-10 px-5 p-1 xl:p-1 xl:w-40 relative">
            Cast
            <i class="ri-arrow-right-s-line"></i>
          </h1>
          <div className="w-full xl:h-[90%] ">
            <div className="w-full h-full flex xl:items-end items-center bg-purple overflow-x-auto no-scrollbar">
              {info.credits.cast && info.credits.cast.length > 0 ? (
                info.credits.cast.map((castMember) => (
                  <div
                    className="border xl:min-w-44 min-w-32 xl:min-h-64 min-h-54 xl:ml-5 ml-3 rounded-md backdrop-blur-md flex flex-col items-center"
                    key={castMember.id}
                  >
                    <div className="w-full xl:h-[26vh] h-[20vh] rounded-t-md">
                      {castMember.profile_path ? (
                        <img
                          className="w-full h-full object-cover object-center rounded-t-md"
                          src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                          alt={castMember.name || "Actor Image"}
                        />
                      ) : (
                        <div className="w-full h-full bg-black/50 flex items-center justify-center rounded-t-xl">
                          <span className="xl:w-40 xl:h-40 w-24 h-24 bg-white/50 backdrop-blur-md rounded-full flex justify-center items-center">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="min-w-44 w-fit xl:px-0 px-2 text-xs xl:text-[2.2vh] xl:mt-2 text-zinc-300 text-center">
                      {castMember.name || castMember.original_name}
                    </p>
                    <p className="min-w-44 xl:px-0 px-2 text-xs xl:text-[2vh] xl:mt-1 text-zinc-300 text-center">
                      As: {castMember.character.slice(0, 20)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-2xl font-semibold h-full w-full flex justify-center items-center underline">
                  No cast information available.
                </p>
              )}
            </div>
          </div>
        </div>
        {/* Crew */}
        <div className="w-full xl:h-[45vh] h-[30vh] bg-red">
          <h1 className="xl:text-2xl xl:px-10 px-5 xl:p-0 p-1 xl:w-40 relative">
            Crew
            <i className="ri-arrow-right-s-line"></i>
          </h1>
          <div className="w-full xl:h-[90%]">
            <div className="w-full h-full flex xl:items-end items-center bg-purple overflow-x-auto no-scrollbar">
              {info.credits.crew && info.credits.crew.length > 0 ? (
                info.credits.crew.map((crewMember) => (
                  <div
                    className="border xl:min-w-44 min-w-32 xl:min-h-64 min-h-54 xl:ml-5 ml-3 rounded-md backdrop-blur-md flex flex-col items-center"
                    key={crewMember.id}
                  >
                    <div className="w-full xl:h-[26vh] h-[20vh] rounded-t-md">
                      {crewMember.profile_path ? (
                        <img
                          className="w-full h-full object-cover object-center rounded-t-md"
                          src={`https://image.tmdb.org/t/p/w500${crewMember.profile_path}`}
                          alt={crewMember.name || "Crew Image"}
                        />
                      ) : (
                        <div className="w-full h-full bg-black/50 flex items-center justify-center rounded-t-xl">
                          <span className="xl:w-40 xl:h-40 w-24 h-24 bg-white/50 backdrop-blur-md rounded-full flex justify-center items-center">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="min-w-44 w-fit xl:px-0 px-2 text-xs xl:text-[2.2vh] xl:mt-2 text-zinc-300 text-center">
                      {crewMember.name || crewMember.original_name}
                    </p>
                    <p className="min-w-44 xl:px-0 px-2 text-xs xl:text-[2vh] xl:mt-1 text-zinc-300 text-center">
                      Role: {crewMember.job.slice(0, 14)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-2xl font-semibold h-full w-full flex justify-center items-center underline">
                  No crew information available.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* Recommandetion and similer*/}
      <div className="w-full xl:h-[90vh] h-[50vh] p-[0.1px] flex xl:items-center justify-center mt-5 xl:mt-0 bg-red">
        <div className="xl:w-[90vw] w-full bg-blue xl:h-[80%] h-[100%]  bg-black/30 border border-zinc-400 xl:rounded-lg">
          <h1 className="xl:text-2xl text-lg px-10 xl:py-0 py-1 w-full xl:h-[8vh] border-b border-zinc-400 flex justify-center items-center ">
            Recommendations
          </h1>
          <div className="w-full xl:h-[85%] h-[88%] bg-purple">
            <div className="w-full h-[100%]">
              <div className="w-full h-full flex items-center overflow-x-auto overflow-y-hidden no-scrollbar xl:pt-6">
                {info.recommendations && info.recommendations.length > 0 ? (
                  info.recommendations.map((recommendation, index) => (
                    <Link
                      className="border border-zinc-400 hover:border-white xl:min-w-72 h-[92%] xl:ml-5 ml-3 rounded-md backdrop-blur-md flex flex-col items-center bg-zinc-400 hover:bg-white"
                      key={index}
                      to={`/${recommendation.media_type}/details/${recommendation.id}`}
                    >
                      <div className="w-full xl:h-[40vh] h-[60%] rounded-t-md">
                        {recommendation.backdrop_path ? (
                          <img
                            className="xl:w-full xl:h-full h-40 object-cover rounded-t-md"
                            src={`https://image.tmdb.org/t/p/w500${recommendation.backdrop_path}`}
                            alt={recommendation.title || "Recommendation Image"}
                          />
                        ) : (
                          <div className="w-full h-full bg-black/50 flex items-center justify-center rounded-xl">
                            <span className="xl:w-40 w-26 xl:h-40 h-26 bg-white/50 backdrop-blur-md rounded-full flex justify-center items-center">
                              No Image
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="min-w-44 xl:font-semibold mt-3 xl:text-xl text-black text-center">
                        {recommendation.name || recommendation.original_name}
                      </p>
                      <p className="min-w-40 px-5 text-center text-zinc-900 xl:text-md text-xs ">
                        {recommendation.overview.slice(0, 40)}...
                      </p>
                    </Link>
                  ))
                ) : (
                  <p>No recommendations available.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default TvDetails;
