import React, { useContext, useEffect, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";
import Wrapper from "../assets/SecondWrapper";

function EighthStep() {
  const { step, setStep, motions } = useContext(StepsContext);

  return (
    <Wrapper>
      {" "}
      <div className="second-step step">
        <div
          className={
            step.eighthStep[0] === true
              ? "next next-1 next-active"
              : "next next-1 hidden"
          }
        >
          <div className="result">
            <p>The surviving first cousins get the whole estate</p>
          </div>
        </div>

        <div
          className={
            step.eighthStep[1] === true
              ? "next next-2 next-active"
              : "next next-2 hidden"
          }
        >
          <div className="result">
            <p>The New South Wales government receives the whole estate</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
export default EighthStep;
