import React, { useState } from "react";
import defaultAbs from "../../assets/pics/default-abs.png";

import { AbdominalTop } from "./AbdominalTop";
import { AbdominalCenter } from "./AbdominalCenter";
import { AbdominalTopLeft } from "./AbdominalTopLeft";
import { AbdominalTopRight } from "./AbdominalTopRight";
import { AbdominalBottom } from "./AbdominalBottom";
import { AbdominalBottomLeft } from "./AbdominalBottomLeft";
import { AbdominalBottomRight } from "./AbdominalBottomRight";

export const AbdominalBaseImage: React.FC = () => {
  const [chooseParts, setChooseParts] = useState<Record<string, boolean>>({});

  const handleClick = (part: string) => {
    setChooseParts((prev) => ({
      ...prev,
      [part]: !prev[part],
    }));
  };

  return (
    <div className="relative sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-[auto] mx-auto flex items-center justify-center">
      <img
        src={defaultAbs}
        alt="Body Diagram"
        className="z-0 object-contain w-full h-full"
      />
      {/* Clickable Blue Regions */}
      <AbdominalTop
        handleClick={() => handleClick("top")}
        isShow={chooseParts["top"]}
      />
      <AbdominalCenter
        handleClick={() => handleClick("center")}
        isShow={chooseParts["center"]}
      />
      <AbdominalTopLeft
        handleClick={() => handleClick("top-left")}
        isShow={chooseParts["top-left"]}
      />
      <AbdominalTopRight
        handleClick={() => handleClick("top-right")}
        isShow={chooseParts["top-right"]}
      />
      <AbdominalBottom
        handleClick={() => handleClick("bottom")}
        isShow={chooseParts["bottom"]}
      />
      <AbdominalBottomLeft
        handleClick={() => handleClick("bottom-left")}
        isShow={chooseParts["bottom-left"]}
      />
      <AbdominalBottomRight
        handleClick={() => handleClick("bottom-right")}
        isShow={chooseParts["bottom-right"]}
      />
    </div>
  );
};
