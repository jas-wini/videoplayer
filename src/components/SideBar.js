import React from "react";
import { IoMenu } from "react-icons/io5";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { sidebarcontent } from "../constants/Arrays";
import { useCategory } from "../context/CategoryContext";

const SideBar = (props) => {
  const { setIsOpen } = props;
  const { setCategory } = useCategory();
  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay (semi-transparent gray) */}
      <div
        className="fixed inset-0 backdrop-blur-xs"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar content */}
      <div className="relative w-52 h-full bg-white shadow-xl animate-slideInLeft">
        <div className={" items-center justify-between gap-2 mx-3 mt-3.5"}>
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
          <div className={"flex flex-col  mt-5 gap-7 mx-2"}>
            {sidebarcontent.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setCategory(item?.categoryId);
                  setIsOpen(false);
                }}
                className={"flex items-center gap-4 cursor-pointer"}
              >
                {item?.logo}
                <h3>{item?.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
