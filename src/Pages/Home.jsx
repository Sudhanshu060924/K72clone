import React from 'react'
import Video from '../components/home/Video'
import HomeTopText from '../components/home/HomeTopText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='h-screen w-screen'>
      <div className="w-full h-screen fixed ">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HomeTopText />
        <HomeBottomText />
      </div>
    </div>
  );
}

export default Home
