import React, { useEffect, useState } from "react";
import defaultFinger from "../../assets/pics/default-finger.png";
import { areasConfig, initialValues } from "../../libs/FingerAreaConfig";
import { AllOverHighlightFinger } from "./AllOverHighlightFinger";
import { SelectedArea } from "../SelectedArea";
import { jointBtnAreaConfig } from "../../libs/FingerAreaConfig";

export const FingerBase: React.FC = () => {
  const [chooseParts, setChooseParts] =
    useState<Record<string, boolean>>(initialValues);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsAllSelected(Object.values(chooseParts).every((value) => value));
  }, [chooseParts]);

  const handleClick = (part: string) => {
    setChooseParts((prev) => ({
      ...prev,
      [part]: !prev[part],
    }));
  };

  const handleAllPainClick = (status: boolean) => {
    const result = Object.keys(chooseParts).reduce((acc, key: string) => {
      acc[key] = status;
      return acc;
    }, {} as Record<string, boolean>);
    setChooseParts(result);
  };

  return (
    <>
      <img
        src={defaultFinger}
        alt="Body Diagram"
        className="z-0 object-contain w-full h-full"
      />
      {areasConfig.map((area) => (
        <SelectedArea
          key={area.id}
          isShow={chooseParts[area.id]}
          labelImage={area.labelImage}
          highlighImage={area.highlightImage}
          selectedAllArea={isAllSelected}
        />
      ))}
      <AllOverHighlightFinger
        handleAllPainClick={(status) => handleAllPainClick(status)}
        selectedAllArea={isAllSelected}
      />
      {Object.entries(jointBtnAreaConfig).map(([finger, positions]) =>
        positions.map((pos, index) => (
          <button
            key={`${finger}-${index}`}
            className={`absolute w-[9%] h-[5%] bg-transparent rounded-full z-10`}
            style={{ top: pos.top, left: pos.left }}
            onClick={() => handleClick(pos.type)}
          />
        ))
      )}
    </>
  );
};
