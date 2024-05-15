import styled from "styled-components";

const Wrapper = styled.div`
  .step {
    display: flex;
    flex-direction: column;
    /* max-width: 249px; */
    margin-bottom: 20px;
  }
  .second-radio {
    display: inline-flex;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    width: fit-content;
  }
  .second-radio input[type="radio"]:checked + .radio-label {
    background: #006b56;
  }

  .second-radio input[type="radio"]:not(:checked) + label {
    background: #009578;
  }

  .second-radio-input:not(:checked) + label {
    background: #009578;
  }

  .radio-label-2: not(last-of-type) {
    border-right: 1px solid #006b56;
  }
`;

export default Wrapper;
