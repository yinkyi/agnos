import React, { Fragment, useEffect, useState } from "react";
import defaultAbs from "../../assets/pics/default-abs.png";

import { SelectedArea } from "../SelectedArea";
import { AllOverAbdHighlight } from "./AllOverAbdHighlight";
import { areasConfig } from "../../libs/AbdAreasConfig";
import { useDispatch, useSelector } from "react-redux";
import { ReduxInitialState } from "../../libs/interface";
import { painActions } from "../../store/pain";

export const AbdominalBase: React.FC = () => {
  const abdominalState = useSelector(
    (state: ReduxInitialState) => state.pain.abdominal
  );
  const dispatch = useDispatch();
  const [isAllSelected, setIsAllSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsAllSelected(Object.values(abdominalState).every((value) => value));
  }, [abdominalState]);

  const handleClick = (part: string) => {
    dispatch(
      painActions.setAbdominalPain({
        abdominal: {
          ...abdominalState,
          [part]: !abdominalState[part],
        },
      })
    );
  };

  const handleAllPainClick = (status: boolean) => {
    const result = Object.keys(abdominalState).reduce((acc, key: string) => {
      acc[key] = status;
      return acc;
    }, {} as Record<string, boolean>);
    dispatch(
      painActions.setAbdominalPain({
        abdominal: result,
      })
    );
  };

  return (
    <>
      <img
        src={defaultAbs}
        alt="Body Diagram"
        className="z-0 object-contain w-full h-full"
      />
      {areasConfig.map((area, index) => (
        <Fragment key={index}>
          <button
            onClick={() => handleClick(area.id)}
            className={`absolute ${area.buttonPosition}  w-[10%] h-[10%]  bg-transparent rounded-full z-10 `}
          ></button>
          <SelectedArea
            key={area.id}
            isShow={abdominalState[area.id]}
            labelPosition={area.labelPosition}
            labelImage={area.labelImage}
            highlighImage={area.highlightImage}
            selectedAllArea={isAllSelected}
          />
        </Fragment>
      ))}
      <AllOverAbdHighlight
        handleAllPainClick={(status) => handleAllPainClick(status)}
        selectedAllArea={isAllSelected}
      />
    </>
  );
};
