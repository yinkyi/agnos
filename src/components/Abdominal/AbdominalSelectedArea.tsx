import React from "react";

import { AbdominalProps } from "../../assets/libs/interface";

export const AbdominalSelectedArea: React.FC<AbdominalProps> = ({
  handleClick,
  isShow,
  buttonPosition,
  labelPosition,
  labelImage,
  highlighImage,
  selectedAllArea,
}) => {
  return (
    <>
      <button
        onClick={handleClick}
        className={`absolute ${buttonPosition}  w-[10%] h-[10%]  bg-transparent rounded-full z-10`}
      ></button>
      {isShow && !selectedAllArea && (
        <img
          src={labelImage}
          alt="epigastrium active"
          className={`absolute ${labelPosition}  object-cover w-full h-full`}
        />
      )}
      {isShow && (
        <img
          src={highlighImage}
          alt="epigastrium Highlight"
          className="absolute left-[0.1%] object-cover w-full h-full top-[0.1%] z-1"
        />
      )}
    </>
  );
};
