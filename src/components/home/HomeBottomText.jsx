import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="  w-screen mb-5.5   font-[f2] flex justify-center items-center gap-2">
      <div className="hover:border-[#D3fd50] hover:text-[#D3fd50]  h-30 uppercase border-3 border-white rounded-full px-8  ">
        <Link to="/projects" className="text-[6vw] mt-0  ">
          Projects
        </Link>
      </div>
      <div className="hover:border-[#D3fd50] hover:text-[#D3fd50]   h-30 uppercase border-3 border-white rounded-full px-8 ">
        <Link to="/agency" className="text-[6vw] mt-0 ">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
