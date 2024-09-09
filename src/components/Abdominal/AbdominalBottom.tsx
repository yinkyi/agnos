import React from "react";

import suprapubicActiveBottom from "../../assets/pics/suprapubic-active.png";
import suprapubicHighlightBottom from "../../assets/pics/suprapubic-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalBottom: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[59%] left-[43.5%]  w-[10%] h-[10%]  bg-transparent rounded-full z-10"
      ></button>
      {isShow && (
        <>
          <img
            src={suprapubicActiveBottom}
            alt="epigastrium active"
            className="absolute object-cover w-full h-full top-3"
          />
          <img
            src={suprapubicHighlightBottom}
            alt="epigastrium Highlight"
            className="absolute left-[0.1%] object-cover w-full h-full top-[0.1%] z-1"
          />
        </>
      )}
    </>
  );
};
