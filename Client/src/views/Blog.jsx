import React from "react";
import Header from "../Components/Header";
import BlogCard from "../Components/Micro Components/BlogCard";
import BlogHero from "../Components/Micro Components/BlogHero";
import TopicsNav from "../Components/Micro Components/TopicsNav";

function Blog() {
  return (
    <>
      <div className="bg-white shadow-sm">
        <Header />
      </div>
      <main className="container">
        <BlogHero />
        <TopicsNav />
        <div className="row mb-2">
          <div className="col-md-6">
            <BlogCard />
          </div>
          <div className="col-md-6">
            <BlogCard />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-md-12">
            <BlogCard />
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;
