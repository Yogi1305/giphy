import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { GifState } from "../context/context";
import GifSearch from "./gif-search";

const Header = () => {
  const [category, setCategory] = useState([]);
  const [showcategories, setshowcategories] = useState(false);
  const { gf, filter, setFilter, favorites } = GifState();
  const fetchGifCategories = async () => {
    const res = await fetch("/categories.json");
    const { data } = await res.json();
    setCategory(data);
  };
 
  
  useEffect(() => {
    fetchGifCategories();
  }, []);

  return (
    <nav>
      <div className="relative flex gap-4  justify-between items-center mb-2">
        <Link to="/" className="flex gap-2">
          <img src="/logo.svg" className="w-8"></img>
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer">
            GIPHY
          </h1>
        </Link>
        <div className="font-bold text-md flex gap-2 items-center">
          {/* {render category} */}
          {/* if we use splice then on every refresh it will change */}
          {category?.slice(0, 5).map((category) => {
            return (
              <Link
                key={category.name}
                to={`/${category.name_encoded}`}
                className="px-4 py-1 hover:gradient border-b-4 hidden lg:block"
              >
                {/* hodden lg:block means it only show in larger screen  */}
                {category.name}
              </Link>
            );
          })}
          <button onClick={() => setshowcategories(!showcategories)}>
            <HiEllipsisVertical
              size={35}
              className={`py-0.5  hover:gradient ${
                showcategories ? "gradient" : ""
              } border-b-4 hidden lg:block`}
            />
          </button>
          {favorites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to="/favorite">Favorite GIFS</Link>
            </div>
          )}
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
            />
          </button>
        </div>
        {showcategories && (
          <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
            <span className="text-3xl font-extrabold">Categories</span>
            <hr  className=" bg-green-100 opacity-50 my-5"/>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"> {category?.map((category)=>{
                return(
                    <Link  key={category.name}
                to={`/${category.name_encoded}`}
                    className="font-bold">{category.name}</Link>
                  )
            })}</div>
          </div>
        )}
      </div>
      {/* {search} */}
      <GifSearch/>
    </nav>
  );
};

export default Header;
