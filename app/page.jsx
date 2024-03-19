import React from "react";
import Dashboard from "./ui/home/Dashboard";
import Newsletter from "./ui/home/Newsletter";
const Home = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black" style={{backgroundImage: 'url(/bg.webp)'}}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-0 md:col-span-2">
        </div>
        <div className="col-span-12 md:col-span-8">
          <Dashboard />
        </div>
        <div className="col-span-0 md:col-span-2">
        </div>
      </div>
    </div>
  );
};

export default Home;
