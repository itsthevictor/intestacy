import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";
import Wrapper from "../assets/SecondWrapper";

function SeventhStep() {
  const { step, motions } = useContext(StepsContext);
  const { eighthNextTrue, eighthNextFalse } = motions;
  return (
    <Wrapper>
      {" "}
      <div className="second-step step">
        <div
          className={
            step.seventhStep[0] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <div className="result">
            <p>The uncles/aunts get the whole estate</p>
          </div>
        </div>

        <div
          className={
            step.seventhStep[1] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="second-step step">
            <h2 className="question">
              Are there alive first cousins of the deceased?
            </h2>
            <div className="radio">
              <input
                type="radio"
                name="two-one-one-radio"
                id="two-one-radio"
                value="second-option-1"
                className="second-radio-input"
              />
              <label
                className="radio-label-2"
                htmlFor="two-one-radio"
                onClick={eighthNextTrue}
              >
                Yes
              </label>
              <input
                type="radio"
                name="two-one-two-radio"
                id="two-two-radio"
                value="second-option-2"
                className="second-radio-input"
              />
              <label
                className="radio-label-2"
                htmlFor="two-two-radio"
                onClick={eighthNextFalse}
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default SeventhStep;
