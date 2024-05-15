import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";
import Wrapper from "../assets/SecondWrapper";

function SecondStep() {
  const { step, setStep, motions } = useContext(StepsContext);
  const { thirdNextOne, thirdNextTwo, thirdNextThree, thirdNextFour } = motions;
  return (
    <Wrapper>
      {" "}
      <div className="second-step step">
        <div
          className={
            step.secondStep[0] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <h2 className="question">
            Does the deceased have any previous children?
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
              onClick={thirdNextOne}
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
              onClick={thirdNextTwo}
            >
              No
            </label>
          </div>
        </div>

        <div
          className={
            step.secondStep[1] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="second-step step">
            <h2 className="question">
              Are there alive children of the deceased?
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
                onClick={thirdNextThree}
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
                onClick={thirdNextFour}
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
export default SecondStep;
