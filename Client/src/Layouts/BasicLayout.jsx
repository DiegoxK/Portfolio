import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RecentPosts from "../components/RecentPosts";

function BlogLayout() {
  return (
    <>
      <Header />
      <div className="container post-entry">
        <Outlet />
        <RecentPosts />
      </div>
      <Footer />
    </>
  );
}

export default BlogLayout;
