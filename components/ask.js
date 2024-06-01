import { useState } from "react";

import React from "react";
import Style from "./ask.module.css";

const Ask = ({ index, type, textType, title, choiceOption, description }) => {
  const [inputValue, setInputValue] = useState("");
  console.log("hello", choiceOption);

  function handleInput(event) {
    const value = event.target.value.replace(/[^0-9]/g, ""); // 숫자 이외의 값 제거
    setInputValue(value);
  }

  const formatNumber = (num) => {
    if (!num) return "";
    const units = ["", "만", "억", "조", "경"];
    let result = "";
    let unitIndex = 0;

    while (num > 0) {
      const part = num % 10000;
      if (part > 0) {
        result =
          part.toLocaleString() +
          units[unitIndex] +
          (result ? " " + result : "");
      }
      num = Math.floor(num / 10000);
      unitIndex++;
    }

    return result.trim();
  };
  const formattedValue = formatNumber(parseInt(inputValue, 10));

  const subTypeAsk = (
    <>
      <div className={Style.MidLeft}>{index}.</div>
      <div className={Style.MidRight}>
        <div className={Style.Title}>{title}</div>
        <div className={Style.Description}>{description}</div>
        <div className={Style.FlexBox}>
          <input
            className={Style.Input}
            type={textType}
            onChange={handleInput}
          ></input>
          {textType === "number" && (
            <div className={Style.InputOverlay}>
              {formattedValue ? formattedValue + "원" : "만원"}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const mulTypeAsk = (
    <>
      <div className={Style.MidLeft}>{index}.</div>
      <div className={Style.MidRight}>
        <div className={Style.Title}>{title}</div>
        <div className={Style.Description}>{description}</div>
        <div className={Style.MulFlexBox}>
          {choiceOption.map((option) => {
            console.log('option', option)
            return (
                <button key={Math.random()} className={Style.MulButton}>{Object.values(option)}</button>
            );
          })}
        </div>
      </div>
    </>
  );

  if (type === "sub") {
    return subTypeAsk;
  } else {
    return mulTypeAsk;
  }
};

export default Ask;
