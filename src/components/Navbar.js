import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { BsFillPlayBtnFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import SideBar from "./SideBar";

const Navbar = (props) => {
  const [theme, setTheme] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  return (
      <div className={"flex items-center justify-between gap-2 mt-2 mx-3"}>
        <div className={"flex gap-2 items-center"}>
          <div className={"cursor-pointer"} onClick={() => setIsOpen(true)}>
            {" "}
            <IoMenu size={30} />
          </div>

          <div className={"flex items-center gap-1"}>
            <BsFillPlayBtnFill size={30} color={"#FE0133"} />
            <h3 className={"font-bold"}>YT Lite</h3>
          </div>
        </div>
        <SearchBar {...props}/>
        <div></div>
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
        {/* <label class="relative inline-flex items-center cursor-pointer">
        <input class="sr-only peer" type="checkbox" />
        <div class="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
        <span class="ml-3 text-sm font-medium text-gray-900">Theme</span>
      </label> */}
      </div>
  
  );
};

export default Navbar;
