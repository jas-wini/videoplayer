import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Loader = (props) => {
  const {count}=props
  return (
    <div className={""}>
      {Array(count)
        .fill("_")
        .map((_,index) => (
          <Skeleton
            className="flex-1"
            containerClassName="flex my-5 items-center mx-5 gap-3"
            count={4}
            baseColor="#f5f5f5"
            height={220}
            key={index}
          />
        ))}
    </div>
  );
};

export default Loader;
