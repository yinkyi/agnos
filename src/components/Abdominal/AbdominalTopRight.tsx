import React from "react";

import luqActiveTopRight from "../../assets/pics/luq-active.png";
import luqHighlightTopRight from "../../assets/pics/luq-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalTopRight: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[42%] left-[52%]  w-[10%] h-[10%]  bg-transparent  rounded-full z-10"
      ></button>
      {isShow && (
        <>
          <img
            src={luqActiveTopRight}
            alt="epigastrium active"
            className="absolute object-cover w-full h-full top-6"
          />
          <img
            src={luqHighlightTopRight}
            alt="epigastrium Highlight"
            className="absolute left-[0.1%] object-cover w-full h-full top-[0.1%] z-1"
          />
        </>
      )}
    </>
  );
};
