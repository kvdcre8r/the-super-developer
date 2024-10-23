import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomResume from "./CustomResume";

// Styled Component
const SelectorStyle = styled.div`
  color: lightcyan;
  padding: 10px;
`;

// TargetComponent
const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <CustomResume {...props} />
    </div>
  );
});

// Selectors Component
const Selectors = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    experience: ''
  });
  const targetRef = useRef(null);

  const handleFontSizeChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (targetRef.current) {
      targetRef.current.style.fontSize = {
        "option1": "12px",
        "option2": "16px",
        "option3": "24px"
      }[value];
    }
  };

  const handleBgColorChange = (event) => {
    const color = event.target.value;
    setBgColor(color);
    if (targetRef.current) {
      targetRef.current.style.backgroundColor = color;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResumeData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <SelectorStyle>
      <h1>Resume Builder</h1>
      <h2>Customize your resume</h2>
      <h3>Font Size:</h3>
      <select value={selectedValue} onChange={handleFontSizeChange}>
        <option value="">Select a size</option>
        <option value="option1">small</option>
        <option value="option2">medium</option>
        <option value="option3">large</option>
      </select>

      <h3>Background Color:</h3>
      <select value={bgColor} onChange={handleBgColorChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>

      <h2>Enter Resume Information:</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={resumeData.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={resumeData.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Experience:
          <textarea name="experience" value={resumeData.experience} onChange={handleInputChange} />
        </label>
      </form>

      <TargetComponent ref={targetRef} {...resumeData} />
    </SelectorStyle>
  );
};

// Main Component
function ResumeBuilder() {
  return (
    <div>
      <Selectors />
    </div>
  );
}

export default ResumeBuilder;
