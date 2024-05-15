import { createContext, useState } from "react";

export const StepsContext = createContext();

const StepsContextProvider = (props) => {
  const [step, setStep] = useState({
    firstStep: [false, false],
    secondStep: [false, false],
    thirdStep: [false, false, false, false],
    fourthStep: [false, false, false, false],
    fifthStep: [false, false],
    sixthStep: [false, false],
    seventhStep: [false, false],
    eighthStep: [false, false],
  });

  const secondNextTrue = () => {
    setStep({ ...step, secondStep: [true, false] });
  };

  const secondNextFalse = () => {
    setStep({ ...step, secondStep: [false, true] });
  };

  const thirdNextOne = () => {
    setStep({ ...step, thirdStep: [true, false, false, false] });
  };
  const thirdNextTwo = () => {
    setStep({ ...step, thirdStep: [false, true, false, false] });
  };
  const thirdNextThree = () => {
    setStep({ ...step, thirdStep: [false, false, true, false] });
  };
  const thirdNextFour = () => {
    setStep({ ...step, thirdStep: [false, false, false, true] });
  };

  const fourthNextOne = () => {
    setStep({ ...step, fourthStep: [true, false, false, false] });
  };
  const fourthNextTwo = () => {
    setStep({ ...step, fourthStep: [false, true, false, false] });
  };
  const fourthNextThree = () => {
    setStep({ ...step, fourthStep: [false, false, true, false] });
  };
  const fourthNextFour = () => {
    setStep({ ...step, fourthStep: [false, false, false, true] });
  };

  const fifthNextTrue = () => {
    setStep({ ...step, fifthStep: [true, false] });
  };

  const fifthNextFalse = () => {
    setStep({ ...step, fifthStep: [false, true] });
  };

  const sixthNextTrue = () => {
    setStep({ ...step, sixthStep: [true, false] });
  };

  const sixthNextFalse = () => {
    setStep({ ...step, sixthStep: [false, true] });
  };
  const seventhNextTrue = () => {
    setStep({ ...step, seventhStep: [true, false] });
  };

  const seventhNextFalse = () => {
    setStep({ ...step, seventhStep: [false, true] });
  };
  const eighthNextTrue = () => {
    setStep({ ...step, eighthStep: [true, false] });
  };

  const eighthNextFalse = () => {
    setStep({ ...step, eighthStep: [false, true] });
  };

  const motions = {
    secondNextTrue,
    secondNextFalse,
    thirdNextOne,
    thirdNextTwo,
    thirdNextThree,
    thirdNextFour,
    fourthNextOne,
    fourthNextTwo,
    fourthNextThree,
    fourthNextFour,
    fifthNextTrue,
    fifthNextFalse,
    sixthNextTrue,
    sixthNextFalse,
    seventhNextTrue,
    seventhNextFalse,
    eighthNextTrue,
    eighthNextFalse,
  };

  return (
    <StepsContext.Provider value={{ step, setStep, motions }}>
      {props.children}
    </StepsContext.Provider>
  );
};
export default StepsContextProvider;
