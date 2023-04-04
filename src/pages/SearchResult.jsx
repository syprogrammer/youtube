import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/videoApi";
import { Context } from "../context/contextApi";

// ----------- importing components -------------
import { SearchResultVideoCard, SideNav } from "../components";


const SearchResult = () => {
    const [result, setResult] = useState();
    const { searchQuery } = useParams();
    const { setLoading } = useContext(Context);

    // ---------------- search function-------------- 
    const fetchSearchResults = () => {
        setLoading(true);
        fetchData(`search/?q=${searchQuery}`).then((res) => {
            console.log(res);
            setResult(res?.contents);
            setLoading(false);
        });
    };

    // -------------- fetching video on search ---------- 
    useEffect(() => {
        fetchSearchResults();
    }, [searchQuery]);

    return (
        <div className="flex flex-row h-[calc(100%-56px)]">
            <SideNav />
            <div className="grow  h-full overflow-y-auto bg-black">
                <div className="grid grid-cols-1 gap-2 p-5">
                    {/* ----------- showing search result videos ------------------------ */}
                    {result?.map((item) => {
                        if (item?.type !== "video") return false;
                        let video = item.video;
                        return (
                            <SearchResultVideoCard
                                key={video.videoId}
                                video={video}
                            />
                        );
                    })}

                </div>
            </div>
        </div>
    );
};

export default SearchResult;