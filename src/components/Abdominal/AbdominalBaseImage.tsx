import React, { useEffect, useState } from "react";
import defaultAbs from "../../assets/pics/default-abs.png";

import { AbdominalSelectedArea } from "./AbdominalSelectedArea";
import umbilicusActiveCenter from "../../assets/pics/umbilicus-active.png";
import umbilicusHighlightCenter from "../../assets/pics/umbilicus-highlight.png";
import epigastriumActiveTop from "../../assets/pics/epigastrium-active.png";
import epigastriumHighlightTop from "../../assets/pics/epigastrium-highlight.png";
import suprapubicActiveBottom from "../../assets/pics/suprapubic-active.png";
import suprapubicHighlightBottom from "../../assets/pics/suprapubic-highlight.png";
import rlqActiveBottomLeft from "../../assets/pics/rlq-active.png";
import rlqHighlightBottomLeft from "../../assets/pics/rlq-highlight.png";
import llqActiveBottomRight from "../../assets/pics/llq-active.png";
import llqHighlightBottomRight from "../../assets/pics/llq-highlight.png";
import ruqActiveTopLeft from "../../assets/pics/ruq-active.png";
import ruqhighlightTopLeft from "../../assets/pics/ruq-highlight.png";
import luqActiveTopRight from "../../assets/pics/luq-active.png";
import luqHighlightTopRight from "../../assets/pics/luq-highlight.png";
import { AllOverHighlight } from "./AllOverHighlight";

const initialValues: Record<string, boolean> = {
  top: false,
  "top-left": false,
  "top-right": false,
  center: false,
  bottom: false,
  "bottom-left": false,
  "bottom-right": false,
};

export const AbdominalBaseImage: React.FC = () => {
  const [chooseParts, setChooseParts] =
    useState<Record<string, boolean>>(initialValues);
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    const check = checkingSelectedAllArea();
    console.log(check);
    setIsAllSelected(check);
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

  const checkingSelectedAllArea = () => {
    console.log(chooseParts);
    return Object.values(chooseParts).every((value) => value === true);
  };

  return (
    <div className="relative sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-[auto] mx-auto flex items-center justify-center">
      <img
        src={defaultAbs}
        alt="Body Diagram"
        className="z-0 object-contain w-full h-full"
      />
      <AbdominalSelectedArea
        handleClick={() => handleClick("center")}
        isShow={chooseParts["center"]}
        buttonPosition="top-[53%] left-[48%] -translate-x-1/2 -translate-y-1/2 "
        labelPosition="top-0"
        labelImage={umbilicusActiveCenter}
        highlighImage={umbilicusHighlightCenter}
        selectedAllArea={isAllSelected}
      />

      <AbdominalSelectedArea
        handleClick={() => handleClick("top")}
        isShow={chooseParts["top"]}
        buttonPosition="top-[36%] left-[43.5%]"
        labelPosition="top-0"
        labelImage={epigastriumActiveTop}
        highlighImage={epigastriumHighlightTop}
        selectedAllArea={isAllSelected}
      />
      <AbdominalSelectedArea
        handleClick={() => handleClick("top-left")}
        isShow={chooseParts["top-left"]}
        buttonPosition="top-[42%] left-[35%]"
        labelPosition="top-6"
        labelImage={ruqActiveTopLeft}
        highlighImage={ruqhighlightTopLeft}
        selectedAllArea={isAllSelected}
      />
      <AbdominalSelectedArea
        handleClick={() => handleClick("top-right")}
        isShow={chooseParts["top-right"]}
        buttonPosition="top-[42%] left-[52%]"
        labelPosition="top-6"
        labelImage={luqActiveTopRight}
        highlighImage={luqHighlightTopRight}
        selectedAllArea={isAllSelected}
      />
      <AbdominalSelectedArea
        handleClick={() => handleClick("bottom")}
        isShow={chooseParts["bottom"]}
        buttonPosition="top-[59%] left-[43.5%]"
        labelPosition="top-3"
        labelImage={suprapubicActiveBottom}
        highlighImage={suprapubicHighlightBottom}
        selectedAllArea={isAllSelected}
      />
      <AbdominalSelectedArea
        handleClick={() => handleClick("bottom-left")}
        isShow={chooseParts["bottom-left"]}
        buttonPosition="top-[53.3%] left-[35%] "
        labelPosition="-top-[7%]"
        labelImage={rlqActiveBottomLeft}
        highlighImage={rlqHighlightBottomLeft}
        selectedAllArea={isAllSelected}
      />
      <AbdominalSelectedArea
        handleClick={() => handleClick("bottom-right")}
        isShow={chooseParts["bottom-right"]}
        buttonPosition="top-[53.3%] left-[52%]"
        labelPosition="-top-[7%]"
        labelImage={llqActiveBottomRight}
        highlighImage={llqHighlightBottomRight}
        selectedAllArea={isAllSelected}
      />
      <AllOverHighlight
        handleAllPainClick={(status) => handleAllPainClick(status)}
        selectedAllArea={isAllSelected}
      />
    </div>
  );
};
