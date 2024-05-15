import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";
import Wrapper from "../assets/SecondWrapper";

const ThirdStep = () => {
  const { step, motions } = useContext(StepsContext);
  const { fourthNextOne, fourthNextTwo, fourthNextThree, fourthNextFour } =
    motions;

  return (
    <Wrapper>
      {" "}
      <div className="second-step step">
        <div
          className={
            step.thirdStep[0] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <h2 className="question">
            Does the estate cover the statutory legacy? ($482,000)
          </h2>
          <div className="second-radio">
            <input
              type="radio"
              name="myRadio"
              id="two-one-input"
              value="option1"
              className="radio-input"
            />
            <label
              className="radio-label"
              htmlFor="two-one-input"
              onClick={fourthNextOne}
            >
              Yes
            </label>
            <input
              type="radio"
              name="myRadio"
              id="two-two-input"
              value="option2"
              className="radio-input"
            />
            <label
              className="radio-label"
              htmlFor="two-two-input"
              onClick={fourthNextTwo}
            >
              No
            </label>
          </div>
        </div>

        <div
          className={
            step.thirdStep[1] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="second-step step">
            <div className="result">
              <p>The spouse and the living children get the whole estate</p>
            </div>
          </div>
        </div>
        <div
          className={
            step.thirdStep[2] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <div className="result">
            <p>The surviving children get everything</p>
          </div>
        </div>

        <div
          className={
            step.thirdStep[3] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="second-step step">
            <h2 className="question">
              Are there alive parents of the deceased?
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
                onClick={fourthNextThree}
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
                onClick={fourthNextFour}
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
export default ThirdStep;
