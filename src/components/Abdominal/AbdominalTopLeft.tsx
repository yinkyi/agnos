import React from "react";

import ruqActiveTopLeft from "../../assets/pics/ruq-active.png";
import ruqhighlightTopLeft from "../../assets/pics/ruq-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalTopLeft: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[42%] left-[35%]  w-[10%] h-[10%]  bg-transparent rounded-full z-10"
      ></button>
      {isShow && (
        <>
          <img
            src={ruqActiveTopLeft}
            alt="epigastrium active"
            className="absolute object-cover w-full h-full top-6"
          />
          <img
            src={ruqhighlightTopLeft}
            alt="epigastrium Highlight"
            className="absolute left-[0.1%] object-cover w-full h-full top-[0.1%] z-1"
          />
        </>
      )}
    </>
  );
};
