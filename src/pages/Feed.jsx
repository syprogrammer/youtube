import React, { useContext } from "react";

import { Context } from "../context/contextApi";

// -------------- importing components ----------------
import {SideNav ,VideoCard} from "../components";


const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">

    <SideNav />

    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
{/* ------------------------ showing videos if video is fetched successfully---------------- */}
            {!loading &&
                searchResults.map((item) => {
                    if (item.type !== "video") return false;
                    return (
                        <VideoCard
                            key={`${item?.video?.videoId}${item?.video?.title}`}
                            video={item?.video}
                        />
                    );
                })}

        </div>
    </div>
</div>
  )
}

export default Feed