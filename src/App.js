import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Transformations from "./components/Transformations/Transformations";
import PlansPricing from "./components/Plans & Pricing/PlansPricing";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import FeedBacks from "./components/FeedBacks/FeedBacks";
import Home from "./components/Home/Home";

const App = () => {
  let routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "transformations", element: <Transformations /> },
        { path: "feedbacks", element: <FeedBacks /> },
        { path: "plans&pricing", element: <PlansPricing /> },
        { path: "aboutus", element: <AboutUs /> },
        { path: "contactus", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
};

export default App;
