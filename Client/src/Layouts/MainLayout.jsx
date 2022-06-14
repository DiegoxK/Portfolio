import React, { useContext } from "react";
import { UserContext } from "../context/UserContex";
import { Outlet } from "react-router-dom";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyInfoCard from "../components/Home/MyInfoCard";
import RecentPosts from "../components/RecentPosts";
import MyInfoCardEdit from "../components/Home/MyInfoCardEdit";

function MainLayout() {
  const { userState } = useContext(UserContext);

  return (
    <>
      <Header />
      <div className="container home-desktop">
        {userState ? <MyInfoCardEdit /> : <MyInfoCard />}
        <Outlet />
        <RecentPosts />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
