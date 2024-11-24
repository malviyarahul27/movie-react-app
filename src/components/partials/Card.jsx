import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../assests/noimage.jpg";

const Card = ({ data, title }) => {
  return (
    <div className="xl:flex xl:flex-wrap grid grid-flow-row grid-cols-3 xl:px-0 px-4 gap-4 justify-center items-center xl:gap-10 w-full bg-green-60 py-2">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={index}
        >
          <img
            className="shadow-[5px_8px_10px_1px_rgba(0,0,0,50)] w-[30vh] h-68 object-cover object-top"
            src={
              card.poster_path || card.backdrop_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  }`
                : noimage
            }
            alt=""
          />
          <h1 className="xl:w-40 text-wrap xl:mt-2 mt-1 m-auto text-center text-sm xl:text-[17px] text-zinc-300  font-semibold">
            {(card.title && card.title.slice(0, 12)) ||
              (card.name && card.name.slice(0, 12)) ||
              (card.original_title && card.original_title.slice(0, 12))}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Card;
