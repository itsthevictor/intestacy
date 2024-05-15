const Step = ({ name, label }) => {
  return (
    <div className="first-step step">
      <h2 className="question">Is the spouse alive?</h2>
      <div className="radio">
        <input
          type="radio"
          name={name}
          id={name}
          value={1}
          className="radio-input"
        />
        <label
          className="radio-label"
          htmlFor={name}
          onClick={() => setStep({ ...step, secondStep: [true, false] })}
        >
          Yes
        </label>
        <input
          type="radio"
          name={name}
          id="myRadio2"
          value={0}
          className="radio-input"
        />
        <label
          className="radio-label"
          htmlFor="myRadio2"
          onClick={() => setStep({ ...step, secondStep: [false, true] })}
        >
          No
        </label>
      </div>
    </div>
  );
};
export default Step;
