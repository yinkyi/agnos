import React from "react";

import epigastriumActiveTop from "../../assets/pics/epigastrium-active.png";
import epigastriumHighlightTop from "../../assets/pics/epigastrium-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalTop: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[36%] left-[43.5%] w-[40px] h-[40px] bg-transparent rounded-full z-10  "
      ></button>
      {isShow && (
        <>
          <img
            src={epigastriumActiveTop}
            alt="epigastrium active"
            className="absolute top-0 object-cover w-full h-full"
          />
          <img
            src={epigastriumHighlightTop}
            alt="epigastrium Highlight"
            className="absolute left-[0.3%] object-cover w-full h-full top-[1%] z-1"
          />
        </>
      )}
    </>
  );
};
