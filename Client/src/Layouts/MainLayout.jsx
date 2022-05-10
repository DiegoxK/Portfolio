import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import MyInfoCard from "../components/Home/MyInfoCard";
import RecentPosts from "../components/RecentPosts";

function MainLayout({ routes }) {
  return (
    <div className="container home-desktop">
      <MyInfoCard />
      <SubRoute routes={routes} />
      <RecentPosts />
    </div>
  );
}

function SubRoute({ routes }) {
  return (
    <Routes>
      {routes.map((route, index) => {
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.component}
        />;
      })}
    </Routes>
  );
}

export default MainLayout;
