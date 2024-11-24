import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import notFound from "../../assests/Not-Found.gif";

const Trailer = () => {
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].info.videos);

  if (!ytvideo || !ytvideo.key) {
    // You can return a loading state or an error message if the video is not available
    return (
      <div className="bg-black/50 backdrop-blur-lg w-full h-full flex ">
        <img
          className="w-full h-full object-cover object-center"
          src={notFound}
          alt=""
        />
      </div>
    );
  }

  return (
    <div className="w-full  flex items-start rounde-xl bg-yellow">
      <ReactPlayer
        className="h-[100%] object-center object-cover"
        url={`https://www.youtube.com/watch?v=${ytvideo.key}`} // YouTube URL
        playing={false} // Automatically play the video when rendered
        controls={true} // Show video controls (play, pause, volume, etc.)
        width="100%" // Make the player responsive
        height=""
        muted="true"
      />
    </div>
  );
};

export default Trailer;
