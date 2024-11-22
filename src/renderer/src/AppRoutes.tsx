import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";

export type AppRoute = {
  name: string;
  route: string;
  element: JSX.Element;
};

const appRoutes = [
  {
    name: "Home",
    route: "/",
    element: <Home />,
  },
  {
    name: "Work",
    route: "/work",
    element: <Work />,
  },
];

export default appRoutes;
