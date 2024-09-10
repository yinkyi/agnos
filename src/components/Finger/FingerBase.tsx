import React, { useEffect, useState } from "react";
import defaultFinger from "../../assets/pics/default-finger.png";
import { areasConfig } from "../../libs/FingerAreaConfig";
import { AllOverHighlightFinger } from "./AllOverHighlightFinger";
import { SelectedArea } from "../SelectedArea";
import { jointBtnAreaConfig } from "../../libs/FingerAreaConfig";
import { useDispatch, useSelector } from "react-redux";
import { ReduxInitialState } from "../../libs/interface";
import { painActions } from "../../store/pain";

export const FingerBase: React.FC = () => {
  const fingerState = useSelector(
    (state: ReduxInitialState) => state.pain.finger
  );
  const dispatch = useDispatch();
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsAllSelected(Object.values(fingerState).every((value) => value));
  }, [fingerState]);

  const handleClick = (part: string) => {
    dispatch(
      painActions.setFingerPain({
        finger: {
          ...fingerState,
          [part]: !fingerState[part],
        },
      })
    );
  };

  const handleAllPainClick = (status: boolean) => {
    const result = Object.keys(fingerState).reduce((acc, key: string) => {
      acc[key] = status;
      return acc;
    }, {} as Record<string, boolean>);
    dispatch(
      painActions.setFingerPain({
        finger: result,
      })
    );
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
          isShow={fingerState[area.id]}
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
