import React from "react";
import Logo from "../images/Instagram.png";
import { BsHeart } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import { LiaFacebookMessenger } from "react-icons/lia";
import { FaUserAlt } from "react-icons/fa";

const header = () => {
  return (
    <>
      <div className="top-div h-[10vh] w-full border-b-zinc-300 flex items-center justify-between pl-6">
        <img src={Logo} alt="instagram logo" className="w-32 object-cover " />
        <div>
          <input
            type="text"
            placeholder="Search"
            className="w-60 h-10 bg-[rgb(228,224,224)] py-1 px-2 mr-5 rounded-xl"
          />
        </div>
        <div className="text-2xl flex">
          <AiOutlineHome />
          <LiaFacebookMessenger />
          <AiOutlinePlusCircle />
          <AiOutlineCompass />
          <BsHeart />
          <FaUserAlt />
        </div>
      </div>
    </>
  );
};

export default header;
