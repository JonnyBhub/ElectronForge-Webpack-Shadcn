import React from "react";
import Sidebar from "./components/sidebar";

import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import appRoutes, { AppRoute } from "./AppRoutes";

const App = () => {
  return (
    <div className="h-screen items-center justify-center grid grid-flow-row auto-rows-max">
      <BrowserRouter>
        <Routes>
          {appRoutes.map((appRoute: AppRoute) => (
            <Route
              path={appRoute.route}
              key={appRoute.route}
              element={appRoute.element}
            />
          ))}
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
};

export default App;
