import React, { useEffect, useState } from "react";
import defaultAbs from "../../assets/pics/default-abs.png";

import { SelectedArea } from "../SelectedArea";
import { AllOverHighlight } from "./AllOverHighlight";
import { areasConfig, initialValues } from "../../libs/AbdAreasConfig";

export const AbdominalBase: React.FC = () => {
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
        src={defaultAbs}
        alt="Body Diagram"
        className="z-0 object-contain w-full h-full"
      />
      {areasConfig.map((area) => (
        <>
          <button
            onClick={() => handleClick(area.id)}
            className={`absolute ${area.buttonPosition}  w-[10%] h-[10%]  bg-transparent rounded-full z-10 `}
          ></button>
          <SelectedArea
            key={area.id}
            isShow={chooseParts[area.id]}
            labelPosition={area.labelPosition}
            labelImage={area.labelImage}
            highlighImage={area.highlightImage}
            selectedAllArea={isAllSelected}
          />
        </>
      ))}
      <AllOverHighlight
        handleAllPainClick={(status) => handleAllPainClick(status)}
        selectedAllArea={isAllSelected}
      />
    </>
  );
};
