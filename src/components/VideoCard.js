import formatDuration from "../utils/formatDuration";
import { formatTimeAgo } from "../utils/formatTimeAgo";
import { formatViews } from "../utils/formatViews";

const VideoCard = (props) => {
  const { data } = props||{};
  const { snippet, contentDetails, statistics } = data||{};
  const { thumbnails, title, channelTitle, publishedAt } = snippet||{};
  const { viewCount } = statistics||{};
  const { duration } = contentDetails||{};
  const { url } = thumbnails?.high||{};

  return (
    <div
      className={
        "w-100 rounded-lg shadow-transparent p-2 px-3 transition-all hover:bg-[#D1D3D4] cursor-pointer"
      }
    >
      <div className={"relative w-full"}>
        <img className={"rounded-md h-full w-full object-fill"} src={url} />
        <div
          className={
            "absolute top-[240px] right-2 bg-[#606060] text-[#fff] px-1 rounded-md text-sm "
          }
        >
          {formatDuration(duration)}
        </div>
      </div>
      <div>
        <h2 className={"font-bold text-[16px]"}>{title}</h2>
        <div>
          <div className={" text-[#606060] text-xs"}>{channelTitle}</div>
          <div className={"text-xs text-[#606060] flex gap-1 items-center"}>
            {formatViews(viewCount)}
            <span className={"h-1 w-1 rounded-full bg-[#606060]"}> </span>
            <span>{formatTimeAgo(publishedAt)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
