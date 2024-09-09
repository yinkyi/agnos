import React from "react";

import { AbdominalProps } from "../libs/interface";

export const SelectedArea: React.FC<AbdominalProps> = ({
  isShow,
  labelImage,
  labelPosition,
  highlighImage,
  selectedAllArea,
}) => {
  return (
    <>
      {isShow && !selectedAllArea && (
        <img
          src={labelImage}
          alt="epigastrium active"
          className={`absolute ${labelPosition} object-cover w-full h-full`}
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
