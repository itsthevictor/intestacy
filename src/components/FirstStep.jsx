import { useContext, useRef } from "react";
import { StepsContext } from "../contexts/StepsContext";

const FirstStep = () => {
  const ref = useRef();
  const { step, setStep, motions } = useContext(StepsContext);
  const { firstNextFalse, firstNextTrue, secondNextTrue, secondNextFalse } =
    motions;
  return (
    <div className="first-step step">
      <h2 className="question">Is the spouse alive?</h2>
      <div className="radio">
        <input
          type="radio"
          name="myRadio"
          id="myRadio1"
          value="option1"
          className="radio-input"
        />
        <label
          className="radio-label"
          htmlFor="myRadio1"
          onClick={secondNextTrue}
        >
          Yes
        </label>
        <input
          type="radio"
          name="myRadio"
          id="myRadio2"
          value="option2"
          className="radio-input"
        />
        <label
          className="radio-label"
          htmlFor="myRadio2"
          onClick={secondNextFalse}
        >
          No
        </label>
      </div>
    </div>
  );
};
export default FirstStep;
