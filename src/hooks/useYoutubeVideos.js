import { useReducer, useCallback } from "react";
import { useCategory } from "../context/CategoryContext";
const API_KEY = "AIzaSyDpo_uYC-o8VsHaoY4CHUwyx7NcNfmu3ig";
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const initialState = {
  videos: [],
  loading: false,
  error: "",
  nextPage: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        videos: action.append
          ? [...state.videos, ...action.payload.items]
          : action.payload.items,
        nextPage: action.payload.nextPageToken || "",
      };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "CLEAR_VIDS":
      return initialState;
    default:
      return state;
  }
}
const useYoutubeVideos = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { category } = useCategory();
  const getVideos = useCallback(
    async (query = "", pageToken = "") => {
      try {
        dispatch({ type: "FETCH_START" });
        let url;
        if (query) {
          url = `${BASE_URL}/search?part=snippet&type=video&maxResults=12&q=${encodeURIComponent(
            query
          )}&regionCode=IN&key=${API_KEY}`;
        } else {
          url = `${BASE_URL}/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=12&regionCode=IN&key=${API_KEY}`;
          if (category) url += `&videoCategoryId=${category}`;
        }
        if (pageToken) {
          url += `&pageToken=${pageToken}`;
        }

        const res = await fetch(url);

        if (!res.ok) {
          dispatch({
            type: "FETCH_ERROR",
            payload: "Failed to fetch videos",
          });
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        console.log(data);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data,
          append: !!pageToken,
        });
      } catch (error) {
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message,
        });
      }
    },
    [category]
  );

  const clearVideos = useCallback(() => {
    dispatch({ type: "CLEAR_VIDS" });
  }, []);

  return { ...state, getVideos, clearVideos };
};

export default useYoutubeVideos;
