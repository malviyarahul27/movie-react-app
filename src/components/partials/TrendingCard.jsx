import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import noimage from "../../assests/noimage.jpg";
const TrendingCard = ({ data }) => {
  return (
    <div className="w-full xl:h-[55vh]">
      <div className="w-full h-[100%] flex xl:overflow-x-auto overflow-y-hidden bg-red">
        {data.map((data, index) => (
          <Link
            to={`/${data.media_type}/details/${data.id}`}
            key={index}
            className="xl:min-w-[20%] min-w-[60%] xl:h-[90%] xl:ml-5 ml-3 relative border border-zinc-700 bg-yellow"
          >
            <img
              className="w-full h-[28vh] object-cover object-center"
              src={
                data.backdrop_path || data.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      data.backdrop_path || data.poster_path
                    }`
                  : noimage
              }
              alt=""
            />

            <div className="w-[100%] h-28  flex flex-col ">
              <h1 className="w-full text-lg mt-2  font-semibold text-zinc-200 px-3">
                {(data.original_title && data.original_title.slice(0, 15)) ||
                  (data.name && data.name.slice(0, 18))}
              </h1>
              <p className="w-full h-40 text-sm px-3 text-zinc-300">
                {data.overview.slice(0, 60)}
                <Link className="text-blue-500">...more</Link>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingCard;
