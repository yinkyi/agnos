import React from "react";

import llqActiveBottomRight from "../../assets/pics/llq-active.png";
import llqHighlightBottomRight from "../../assets/pics/llq-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalBottomRight: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[53.3%] left-[52%]  w-[10%] h-[10%]  bg-transparent  rounded-full z-10"
      ></button>
      {isShow && (
        <>
          <img
            src={llqActiveBottomRight}
            alt="epigastrium active"
            className="absolute object-cover w-full h-full -top-[7%]"
          />
          <img
            src={llqHighlightBottomRight}
            alt="epigastrium Highlight"
            className="absolute left-[0.1%] object-cover w-full h-full top-[0.1%] z-1"
          />
        </>
      )}
    </>
  );
};
