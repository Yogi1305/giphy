import React, { useEffect } from "react";

import Gif from "../component/Gif.js";
import FilterGif from "../component/filter-gif";
import { GifState } from "../context/context.js";

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState();
  const fetchTrandingGIFs = async () => {
    const { data} = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
      
    });
    console.log(data);
    console.log("hi");
    setGifs(data);
  };
  useEffect(() => {
    fetchTrandingGIFs();
  }, []);
  return (
    <div className="w-fit mt-2 mx-auto">
      <img
        src="/banner.gif"
        alt="earth banner"
        classname="mt-2 mx-auto rounded border-2"
      />

{/* // {filter} */}
<FilterGif showTrending/>
<div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.id} />
        }
          
        )}
      </div>
    </div>
    
  );
};

export default Home;
