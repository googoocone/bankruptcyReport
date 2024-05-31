import { useState } from "react";

import React from "react";
import Style from "./ask.module.css";

const Ask = ({ type, textType, title, askNum, description }) => {
  const [isFocused, SetIsFocused] = useState(false);

  const handleFocus = () => SetIsFocused(true);
  const handleBlur = () => SetIsFocused(false);

  function onHandleNum() {
    console.log("hi");
  }

  const subTypeAsk = (
    <>
      <div className={Style.MidLeft}>4.</div>
      <div className={Style.MidRight}>
        <div className={Style.Title}>현재 월 소득</div>
        <div className={Style.Description}>
          현재 소득활동을 하고 계신가요? 아르바이트, 일용직, 보험설계사 등
          수입이 발생하면 모두 소득활동을 하고 있다고 볼 수 있습니다.
        </div>
        <input className={Style.Input}></input>
      </div>
    </>
  );

  const mulTypeAsk = <div>mul</div>;

  return subTypeAsk
};

export default Ask;
