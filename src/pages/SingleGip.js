import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { HiOutlineExternalLink } from "react-icons/hi";
import {
  HiMiniChevronDown,
  HiMiniChevronUp,
  HiMiniHeart,
} from "react-icons/hi2";
import { FaPaperPlane } from "react-icons/fa6";
import { IoCodeSharp } from "react-icons/io5";
import { GifState } from "../context/context";
import FollowOn from "../component/follow-on";
import Gif from "../component/Gif";
import { FacebookIcon, FacebookMessengerShareButton, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";


const contentType = ["gifs", "stickers", "texts"];

const SingleGip = () => {
 
 
  const { type, slug } = useParams();
  const [gif, setGif] = useState({});
  const [relatedGifs, setRelatedGifs] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const { gf, addToFavorites, favorites } = GifState();

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }

    // Check if gf is defined before making API calls
    if (!gf) return;

    const fetchGif = async () => {
      try {
        const gifId = slug.split("-").pop();
        const { data } = await gf.gif(gifId);
        // const { data } = await gf.gif(gifId[gifId.length-1]);
        // console.log(data);
        // console.log("hi");
        const { data: related } = await gf.related(gifId, {
          limit: 10,
        });
        setGif(data);
        setRelatedGifs(related);
      } catch (error) {
        console.error("Error fetching GIF data:", error);
      }
    };

    fetchGif();
  }, [type, slug, gf]); // Ensure effect runs when type, slug, or gf changes

  // const shareUrl = gif?.images?.fixed_width.webp;
  const shareUrl=window.location.href;

  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif?.user?.avatar_url}
               
                alt={gif?.user?.display_name}
                className="h-14"
              />
              {console.log(gif?.user?.avatar_url)}
              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
            </div>
            {gif?.user?.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {readMore
                  ? gif?.user?.description
                  : gif?.user?.description.slice(0, 100) + "..."}
                <div
                  className="flex items-center faded-text cursor-pointer"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? (
                    <>
                      Read less <HiMiniChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Read more <HiMiniChevronDown size={20} />
                    </>
                  )}
                </div>
              </p>
            )}
          </>
        )}
        <FollowOn />

        <div className="divider" />

        {gif?.source && (
          <div>
            <span className="faded-text">Source</span>
            <div className="flex items-center text-sm font-bold gap-1">
              <HiOutlineExternalLink size={25} />
              <a href={gif.source} target="_blank" className="truncate">
                {gif.source}
              </a>
            </div>
          </div>
        )}
      </div>
     
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-2">{gif.title}</div>
            <Gif gif={gif} hover={false} />

            {/* -- Mobile UI -- */}
            <div className="flex sm:hidden gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              
              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
                
              
            </div>
            {/* -- Mobile UI -- */}
          </div>

          <div className="hidden sm:flex flex-col gap-5 mt-6">
            <button
              onClick={() => addToFavorites(gif.id)}
              className="flex gap-5 items-center font-bold text-lg"
            >
              <HiMiniHeart
                size={30}
                className={`${
                  favorites.includes(gif.id) ? "text-red-500" : ""
                }`}
              />
              Favorite
            </button>
          <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={40} round={true}></TwitterIcon>
          </TwitterShareButton>
          <FacebookShareButton
          url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
           <WhatsappShareButton url={shareUrl}>
            <WhatsappIcon size={40} round={true}></WhatsappIcon>
           </WhatsappShareButton>
           
            
          </div>
        </div>

        <div>
          <span className="font-extrabold">Related GIFs</span>
          <div className="columns-2 md:columns-3 gap-2">
            {relatedGifs.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGip;

