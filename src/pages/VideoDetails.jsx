import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

// ----------------React icons imported here------------------ 

import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { BiDislike } from 'react-icons/bi'
import { TbShare3 } from 'react-icons/tb'
// ------------------xxxxxx-------------------------

import { fetchData } from "../api/videoApi";
import { Context } from "../context/contextApi";

import { SuggestionVideoCard } from "../components";

const VideoDetails = () => {
  const [video, setVideo] = useState();
  const [relatedVideos, setRelatedVideos] = useState();

  // ----------fetching id of video from urls here--------- 
  const { id } = useParams();

  const { setLoading } = useContext(Context);

  // --------------- Fetching Data when video id changes----------
  useEffect(() => {
    // ------------------- fetching video details and related video details --------
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  // ------------ fetch video details function ---------------- 
  const fetchVideoDetails = () => {
    setLoading(true);
    fetchData(`video/details/?id=${id}`).then((res) => {
      console.log(res);
      setVideo(res);
      setLoading(false);
    });
  };

  // --------- fetch related videos function--------- 
  const fetchRelatedVideos = () => {
    setLoading(true);
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideos(res);
      setLoading(false);
    });
  };

  return (
    <div className="flex justify-center flex-row  bg-black overflow-y-scroll">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 h-fit">
          <div className=" h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          {/* ------------- video title --------------------  */}
          <div className="text-white text-left font-bold text-sm md:text-xl mt-4 line-clamp-2">
            {video?.title}
          </div>

          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                {/* ---------------video avatar---------- */}
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>

              </div>
              <div className="flex flex-col ml-3">
                <div className="text-white text-md font-semibold flex items-center">
                  {/* ------------------------ video channel name and verified status ------------------ */}
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type ===
                    "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                </div>
                <div className="text-white/[0.7] text-sm text-left">
                  {/* ----------------------- channel subscribers-----------------  */}
                  {video?.author?.stats?.subscribersText}
                </div>
              </div>
            </div>
            <div className="flex text-white mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl text-white mr-2" />
                {`${abbreviateNumber(
                  // ------------------video views -------------- 
                  video?.stats?.views,
                  2
                )}`}
                <span className="border border-transparent h-[70%] pl-2 text-center py-1 mx-1 text-xl border-l-gray-500"><BiDislike /></span>
              </div>
              <div className="flex items-center gap-1 justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <TbShare3 className="text-xl" />
                Share
              </div>
            </div>

          </div>
          {/* ---------------video description------------------------- */}
          <div className="bg-white/[0.15] p-5 rounded-lg text-white my-4 text-sm text-left">
            {video?.title}
            <button className="px-4 py-1 text-left">Show More</button>
          </div>
        </div>
        {/* ---------------------related videos ---------- */}
        <div className="flex flex-col py-6 px-4  lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {
            if (item?.type !== "video") return false;
            return (
              <SuggestionVideoCard
                key={index}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default VideoDetails;