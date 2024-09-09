import React from "react";

import rlqActiveBottomLeft from "../../assets/pics/rlq-active.png";
import rlqHighlightBottomLeft from "../../assets/pics/rlq-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalBottomLeft: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[53.3%] left-[35%]  w-[10%] h-[10%]  bg-transparent  rounded-full z-10"
      ></button>
      {isShow && (
        <>
          <img
            src={rlqActiveBottomLeft}
            alt="epigastrium active"
            className="absolute object-cover w-full h-full -top-[7%]"
          />
          <img
            src={rlqHighlightBottomLeft}
            alt="epigastrium Highlight"
            className="absolute left-[0.1%] object-cover w-full h-full top-[0.1%] z-1"
          />
        </>
      )}
    </>
  );
};
