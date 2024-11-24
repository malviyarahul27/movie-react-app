import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <Link
      to={`/${data.media_type}/details/${data.id}`}
      style={{
        background: ` url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="object-cover  w-full h-[60vh] flex flex-col justify-end items-start p-[4%] px-[6%] text-slate-300 cursor-pointer"
    >
      <h1 className="w-[80%] xl:text-3xl text-xl font-bold text-zinc-300">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="xl:w-[55%] w-[90%] xl:text-md text-xs xl:mt-2 text-zinc-300">
        {data.overview.slice(0, 170)}
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-[#02A7FA]"
        >
          ...more
        </Link>
      </p>
      <p className="mt-1 xl:text-md text-xs  text-zinc-300 ">
        <i class="text-zinc-300 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i class="ml-5 text-zinc-300 ri-album-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className="bg-[#02A7FA] text-sm xl:p-2 xl:px-4 px-2 p-[2px] xl:mt-2 mt-1 xl:rounded rounded-sm  text-zinc-200 font-medium">
        {" "}
        Details
      </Link>
    </Link>

    //

    //     <div
    //     style={{
    //         background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path
    //         })`,
    //         backgroundPosition: 'center',
    //         backgroundSize: 'cover',
    //         backgroundRepeat: 'no-repeat',
    //     }}
    //     className='w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col justify-end items-start p-4 md:p-10 lg:p-[6%] text-slate-200'
    // >
    //     <h1 className='w-full md:w-[80%] text-xl md:text-3xl lg:text-4xl font-bold text-slate-100'>
    //         {data.name || data.title || data.original_name || data.original_title}
    //     </h1>

    //     <p className='w-full md:w-[70%] lg:w-[55%] mt-2 text-xs md:text-sm lg:text-base text-slate-200'>
    //         {data.overview.slice(0, 170)}
    //         <Link className='text-[#02A7FA]'>...more</Link>
    //     </p>

    //     <p className='mt-1 text-xs md:text-sm lg:text-base text-slate-200 flex items-center'>
    //         <i className="text-white ri-megaphone-fill"></i>
    //         <span className='ml-2'>{data.release_date || "No Information"}</span>
    //         <i className="ml-5 text-white ri-album-fill"></i>
    //         <span className='ml-2'>{data.media_type.toUpperCase()}</span>
    //     </p>

    //     <Link className='bg-[#02A7FA] p-2 px-4 mt-3 rounded text-white font-medium text-xs md:text-sm lg:text-base'>
    //         Watch Trailer
    //     </Link>
    // </div>
  );
};

export default Header;
