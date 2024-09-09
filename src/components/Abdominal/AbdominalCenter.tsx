import React from "react";
import umbilicusActiveCenter from "../../assets/pics/umbilicus-active.png";
import umbilicusHighlightCenter from "../../assets/pics/umbilicus-highlight.png";
import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalCenter: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="absolute top-[53%] left-[48.5%] w-[30px] h-[30px]  bg-transparent -translate-x-1/2 -translate-y-1/2 rounded-full z-10 "
      ></button>
      {isShow && (
        <>
          <img
            src={umbilicusActiveCenter}
            alt="epigastrium active"
            className="absolute top-0 object-cover w-full h-full z-1"
          />
          <img
            src={umbilicusHighlightCenter}
            alt="epigastrium Highlight"
            className="absolute object-cover w-full h-full -top-[0.5%] left-[0.4%]  z-2"
          />
        </>
      )}
    </>
  );
};
