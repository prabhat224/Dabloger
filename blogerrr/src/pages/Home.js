import React from "react";
import Navbar from "../components/Navbar";
import BlogGrid from "../components/BlogGrid";

const Home = () => {
  return (
    <div className="flex gap-4  bg-gray-800">
      <div className="fixed bg-gray-800 min-h-28">
        <Navbar></Navbar>
      </div>
      <div>
      <BlogGrid></BlogGrid>
      </div>
    </div>
  );
};

export default Home;
