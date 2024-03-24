import React from "react";
import Newsletter from "./ui/home/Newsletter";
import MainSlider from "./ui/home/mainSec/MainSlider";
import NextMainSec from "./ui/home/mainSec/NextMainSec";
import PostSec from "./ui/layout/PostSec";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
        <div className="col-span-12 lg:col-span-9 xl:col-span-7">
          <MainSlider />
        </div>

        <div className="col-span-12 sm:col-span-6  lg:col-span-3 xl:col-span-3">
          <div className=" h-full w-full">
            <NextMainSec />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-0 xl:col-span-2">
          <div id="pos-article-display-94891"></div>
        </div>
      </div>
      <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
        <div className="col-span-0 md:col-span-2">
          <div id="pos-article-display-94890"></div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <PostSec title="تست" place="test1" />
          <div id="pos-article-text-94892"></div>
          <PostSec title="تست" place="test2" />
          <div id="pos-article-text-95001"></div>
          <PostSec title="تست" place="test3" />
          <div id="pos-article-text-95002"></div>
          <PostSec title="تست" place="test4" />
          <div id="pos-article-text-95003"></div>
        </div>

        <div className="col-span-0 md:col-span-2">
          <div id="pos-article-display-94889"></div>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default Home;
