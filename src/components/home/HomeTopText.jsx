import React from 'react'
import Video from './Video';

const HomeTopText = () => {
  return (
    <div className="font-[f1] text-center pt-5">
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8.5vw]">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8.5vw]">
        qui
        <div className='h-[7vw] w-[16vw] -mt-3 border-none rounded-full overflow-hidden '>
          <Video />
        </div>
        génère
      </div>
      <div className="text-[9.5vw] flex justify-center items-center uppercase leading-[8.5vw]">
        la créativité
      </div>
    </div>
  );
}

export default HomeTopText
