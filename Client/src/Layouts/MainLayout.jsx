import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyInfoCard from "../components/Home/MyInfoCard";
import RecentPosts from "../components/RecentPosts";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="container home-desktop">
        <MyInfoCard />
        <Outlet />
        <RecentPosts />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
