import {RouterProvider, createBrowserRouter} from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";


import Category from "./pages/Category";


import Favorite from "./pages/Favorite";
import SingleGip from "./pages/SingleGip";
import Search from "./pages/Search";
import Applayout from "./layout/Applayout";
import GifProvider from "./context/context";

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