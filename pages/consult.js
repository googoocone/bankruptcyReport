// pages/about.js
import React from "react";
import Ask from "../components/ask";
import Style from "./consult.module.css";
import { useState } from "react";

import { ASK_FORMAT } from "../src/ask-format";

const Consult = () => {
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
          <Ask
            index = {pageIndex}
            type={ASK_FORMAT[pageIndex].type}
            textType={ASK_FORMAT[pageIndex].textType}
            title={ASK_FORMAT[pageIndex].title}
            choiceOption={ASK_FORMAT[pageIndex].choiceOption}
            description={ASK_FORMAT[pageIndex].description}
          ></Ask>
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
