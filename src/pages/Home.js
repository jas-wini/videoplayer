import { useEffect, useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import VideoList from "../components/VideoList";

import { useCategory } from "../context/CategoryContext";
import useYoutubeVideos from "../hooks/useYoutubeVideos";

const Home = () => {
  const { category } = useCategory();
  const { videos, loading, error, getVideos, clearVideos, nextPage } =
    useYoutubeVideos();
  const [query, setQuery] = useState("");

  useEffect(() => {
    getVideos();
  }, [category]);

  const handleSearch = useCallback(async () => {
    if (!query.trim()) {
      clearVideos();
      getVideos();
    } else {
      clearVideos();
      getVideos(query);
    }
  }, [query, getVideos, clearVideos]);

  // Fetch more data on scroll
  const fetchMoreData = useCallback(async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      console.log("next", nextPage);
      if (nextPage) {
        await getVideos(query, nextPage);
      }
    }
  }, [getVideos, nextPage, query]);

  console.log(loading);

  useEffect(() => {
    window.addEventListener("scroll", fetchMoreData);
    return () => window.removeEventListener("scroll", fetchMoreData);
  }, [fetchMoreData]);
  return (
    <div className={"relative"}>
      <Navbar query={query} setQuery={setQuery} onSearch={handleSearch} />
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      {loading && !nextPage ? (
        <Loader count={3} />
      ) : (
        <VideoList items={videos} />
      )}
      {loading && nextPage && <Loader count={1} />}
    </div>
  );
};

export default Home;
