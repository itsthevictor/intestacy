import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";
import Wrapper from "../assets/SecondWrapper";

const FourthStep = () => {
  const { step, motions } = useContext(StepsContext);
  const { fifthNextTrue, fifthNextFalse } = motions;

  return (
    <Wrapper>
      {" "}
      <div className="second-step step">
        <div
          className={
            step.fourthStep[0] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <div className="result-double">
            <p>The spouse gets:</p>
            <ul>
              <li>personal effects of the deceased</li>
              <li>a statutory legacy ($482,000)</li>
              <li>half of whatever is left of the estate</li>
            </ul>
            <p>The surviving children get:</p>
            <ul>
              <li>the remaining half of the estate divided equally</li>
            </ul>
          </div>
        </div>

        <div
          className={
            step.fourthStep[1] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="second-step step">
            <div className="result">
              <p>The spouse and the living children get whole estate</p>
            </div>
          </div>
        </div>
        <div
          className={
            step.fourthStep[2] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <div className="result">
            <p>The surviving parents get the whole estate</p>
          </div>
        </div>

        <div
          className={
            step.fourthStep[3] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="second-step step">
            <h2 className="question">
              Are there surviving brothers/sisters of the deceased?
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
                onClick={fifthNextTrue}
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
                onClick={fifthNextFalse}
              >
                No
              </label>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default FourthStep;
