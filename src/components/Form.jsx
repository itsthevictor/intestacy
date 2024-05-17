import { StepsContext } from "../contexts/StepsContext";
import { useContext, useEffect, useRef, useState } from "react";
import {
  FirstStep,
  SecondStep,
  ThirdStep,
  FourthStep,
  FifthStep,
  SixthStep,
  SeventhStep,
  EighthStep,
  StartOver,
} from "../components";

const Form = () => {
  const { step, setStep } = useContext(StepsContext);
  const [count, setCount] = useState(0);

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { height } = useWindowDimensions();

  useEffect(() => {
    console.log(count);
    if (count === 0) {
      window.scrollTo(0, height, {
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, count * height, {
        behavior: "smooth",
      });
    }
    setCount((count + 1) * 1.005);
  }, [step]);

  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  }, []);

  return (
    <main>
      {" "}
      <FirstStep />
      <SecondStep />
      <ThirdStep />
      <FourthStep />
      <FifthStep />
      <SixthStep />
      <SeventhStep />
      <EighthStep />
      <StartOver />
    </main>
  );
};
export default Form;
