import VideoCard from "./VideoCard";
import { memo } from "react";
const VideoList = (props) => {
  const { items } = props;

  return (
    <div className=" w-full px-4 py-6">
      <div
        className="
          flex flex-wrap gap-8 my-10
        "
      >
        {items.map((item, index) => (
          <VideoCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default memo(VideoList);
