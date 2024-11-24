import React from "react";
import Loader from "../../assests/loading.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="w-[25%]" src={Loader} alt="" />
      {/* <video autoplay loop muted className='w-[25%]' src={loader}></video> */}
    </div>
  );
};

export default Loading;
