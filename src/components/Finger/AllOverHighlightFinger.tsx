import React, { useEffect, useState } from "react";
import allOverHighlightImage from "../../assets/pics/others-highlight.png";

interface AllOverHighlightProps {
  handleAllPainClick: (currentAllPainValue: boolean) => void;
  selectedAllArea: boolean;
}
export const AllOverHighlightFinger: React.FC<AllOverHighlightProps> = ({
  handleAllPainClick,
  selectedAllArea,
}) => {
  const [allPainValue, setAllPainValue] = useState<boolean>(selectedAllArea);

  useEffect(() => {
    setAllPainValue(selectedAllArea);
  }, [selectedAllArea]);

  const handleButtonClick = () => {
    const currentAllPainValue = !allPainValue;
    setAllPainValue(currentAllPainValue);
    handleAllPainClick(currentAllPainValue);
  };
  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`absolute  w-[71%] h-[10%] left-[48%] bottom-0 -translate-x-1/2 mb-2 bg-transparent rounded-lg  z-10 `}
      ></button>
      {allPainValue && (
        <img
          src={allOverHighlightImage}
          alt="epigastrium active"
          className={`absolute object-cover w-full h-full`}
        />
      )}
    </>
  );
};
