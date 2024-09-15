import { useState } from "react";
import { HiMiniXMark, HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const GifSearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchGIFs = async () => {
    if (query.trim() === "") {
      return;
    }

    navigate(`/search/${query}`);
  };

  return (
    <div className="flex relative  ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search all the GIFs and Stickers"
        className="w-full pl-4 pr-14 py-5 text-xl text-blac rounded-tl rounded-bl border border-gray-300 outline-none  "
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className=" text-blac absolute bg-gray-300 opacity-90 rounded-full right-16 mr-2 top-1/2 transform -translate-y-1/2 p-1 "
        >
          <HiMiniXMark size={22} />
        </button>
      )}
      <button
        onClick={searchGIFs}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
