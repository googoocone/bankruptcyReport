// pages/about.js
import React from "react";
import Ask from "../components/ask";
import Style from "./consult.module.css";
import Slider from "react-slick";
import { useState } from "react";

import { ASK_FORMAT } from "../src/ask-format";

const Consult = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const sliderRef = React.createRef();
  
  const [pageIndex, setPageIndex] = useState(0);

  const handlePrevious = () => {
    setPageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  const handleNext = () => {
    setPageIndex((prevPage) => prevPage + 1);
  };

  return (
    <div className={Style.ConsultContainer}>
      <div className={Style.Consult}>
        <div className={Style.Top}></div>
        <div className={Style.Mid}>
        {/* <Slider ref={sliderRef} {...settings}>
            {ASK_FORMAT.map((ask, index) => (
              <div key={index} className={Style.Page}>
                <Ask data={ask} />
              </div>
            ))}
          </Slider> */}
        </div>
        <div className={Style.Bottom}>
          <button onClick={handlePrevious} className={Style.ButtonLeft}>
            이전
          </button>
          <button onClick={handleNext} className={Style.ButtonRight}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consult;
