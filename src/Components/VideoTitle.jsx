import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[16%] px-6 sm:px-12 lg:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold w-full sm:w-3/4 lg:w-1/2">{title}</h1>
      <p className="w-full sm:w-3/4 lg:w-1/2 py-4 text-sm sm:text-base lg:text-lg">{overview}</p>
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-white text-black py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-9 text-sm sm:text-base lg:text-xl rounded-lg hover:bg-opacity-90">
          &#9654; Play
        </button>
        <button className="bg-gray-600 text-white py-2 px-6 sm:py-3 sm:px-8 lg:py-4 lg:px-9 text-sm sm:text-base lg:text-xl bg-opacity-50 rounded-lg">
          &#x24d8; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
