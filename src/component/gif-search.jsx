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
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchGIFs();
    }
  };

  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search all the GIFs and Stickers"
        className="w-full pl-4 pr-14 py-5 text-xl text-blac rounded-tl rounded-bl border border-gray-300 outline-none  "
      />
      {query && (
        <button
          onClick={() => setQuery("")}
          className="your-class1"
        >
          <HiMiniXMark size={22} />
        </button>
      )}
      <button
        onClick={searchGIFs}
       
        className="your-class"
      >
        <HiOutlineMagnifyingGlass size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
