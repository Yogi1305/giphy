import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home.js";


import Category from "./pages/Category.js";


import Favorite from "./pages/Favorite.js";
import SingleGip from "./pages/SingleGip.js";
import Search from "./pages/Search.js";
import Applayout from "./layout/Applayout.js";
import GifProvider from "./context/context.js";

const router = createBrowserRouter([
  {
    element: <Applayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:type/:slug",
        element: <SingleGip />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifProvider> <RouterProvider router={router} /></GifProvider>
     
   
  );
};

export default App;