import React from 'react'
import PlayButton from './play-button.png'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[18%] px-24 absolute text-white bg-gradient-to-r from-black">
       <h1 className="text-3xl font-bold w-1/4">{title}</h1>
       <p className="w-1/4 py-6 ">{overview}</p>
       <div>
        <button className='bg-white  text-black p-4  px-9 text-xl  rounded-lg hover:bg-opacity-90' > &#9654; Play</button>
        <button className= 'mx-2 bg-gray-600 text-white p-4  px-9 text-xl bg-opacity-50 rounded-lg'> &#x24d8;More Info</button>
       </div>
    </div>
  )
}

export default VideoTitle
