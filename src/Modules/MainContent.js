import React, { useState, useRef } from "react";
import styled from "styled-components";
import TargetComponent from "./Output";

const MainStyle = styled.div`
  font-family: arial;
  margin: 10px;
  background-color: lightyellow;
  color: black;
  display: flex;
  h1 {
    font-size: 3.5em;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormStyle = styled.div`
  font-family: open-sans;
  color: lightcyan;
  background-color: #244273;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #244273 #f1f1f1;
  width: 260px;
  height: 100vh;
  padding: 0px 0px 10px 10px;
  border: 2px solid white;
  p {
    margin: 0px;
  }
  h3 {
    border-bottom: 2px solid lightcyan;
    margin-bottom: 0px;
    margin-right: 10px;
  }
.section-title {
  padding-top: 20px;
}
  select {
    color: rgb(62, 92, 126);
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0px;
    margin-bottom: 5px;
    &:focus {
      outline: none;
      border-color: #30599b;
      background-color: white;
    }
  }
`;

const Option = styled.option``;

const fontSizes = [
  {
    value: "8px",
    label: "Small",
    component: styled(Option)`
      font-size: 8px;
    `,
  },
  {
    value: "12px",
    label: "Medium",
    component: styled(Option)`
      font-size: 12px;
    `,
  },
  {
    value: "16px",
    label: "Large",
    component: styled(Option)`
      font-size: 16px;
    `,
  },
];

const textColors = [
  {
    value: "pink",
    label: "Pink",
    component: styled(Option)`
      color: black;
      background-color: pink;
    `,
  },
  {
    value: "gold",
    label: "Gold",
    component: styled(Option)`
      color: black;
      background-color: gold;
    `,
  },
  {
    value: "cyan",
    label: "Cyan",
    component: styled(Option)`
      color: black;
      background-color: cyan;
    `,
  },
  {
    value: "navy",
    label: "Navy",
    component: styled(Option)`
      color: white;
      background-color: navy;
    `,
  },
  {
    value: "purple",
    label: "Purple",
    component: styled(Option)`
      color: white;
      background-color: purple;
    `,
  },
  {
    value: "darkgreen",
    label: "Green",
    component: styled(Option)`
      color: white;
      background-color: darkgreen;
    `,
  },
  {
    value: "white",
    label: "White",
    component: styled(Option)`
      color: black;
      background-color: white;
    `,
  },
  {
    value: "greenyellow",
    label: "Greenyellow",
    component: styled(Option)`
      color: black;
      background-color: greenyellow;
    `,
  },
  {
    value: "black",
    label: "Black",
    component: styled(Option)`
      color: white;
      background-color: black;
    `,
  },
];

const fontFamilies = [
  {
    value: "spyagency",
    label: "Spy Agency",
    component: styled(Option)`
      font-family: spyagency;
      font-size: 0.7em;
    `,
  },
  {
    value: "champion",
    label: "Champion",
    component: styled(Option)`
      font-family: champion;
    `,
  },
  {
    value: "monospace",
    label: "Monospace",
    component: styled(Option)`
      font-family: monospace;
    `,
  },
  {
    value: "open-sans",
    label: "Open Sans",
    component: styled(Option)`
      font-family: open-sans;
    `,
  },
  {
    value: "courgette",
    label: "Courgette",
    component: styled(Option)`
      font-family: courgette;
    `,
  },
  {
    value: "josefin-sans",
    label: "Josefin Sans",
    component: styled(Option)`
      font-family: josefin-sans;
    `,
  },
];

const MainContent = () => {
  const [fontSize, setFontSize] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [resumeData, setResumeData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    links: "",
    sections: [{ sectionTitle: "", sectionSubtitle: "", description: "", bulletPoint1: "", bulletPoint2: "", bulletPoint3: "" }],
  });
  const targetRef = useRef(null);

  const handleFontSizeChange = (event) => {
    const size = event.target.value;
    setFontSize(size);
    if (targetRef.current) {
      targetRef.current.style.fontSize = size;
    }
  };

  const handleBgColorChange = (event) => {
    const color = event.target.value;
    setBgColor(color);
  };

  const handleFontColorChange = (event) => {
    const color = event.target.value;
    setFontColor(color);
    if (targetRef.current) {
      targetRef.current.style.color = color;
    }
  };

  const handleFontFamilyChange = (event) => {
    const font = event.target.value;
    setFontFamily(font);
    if (targetRef.current) {
      targetRef.current.style.fontFamily = font;
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResumeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSectionChange = (index, event) => {
    const { name, value } = event.target;
    const newSections = resumeData.sections.map((section, idx) => {
      if (idx === index) {
        return { ...section, [name]: value };
      }
      return section;
    });
    setResumeData((prevData) => ({ ...prevData, sections: newSections }));
  };

  const addSection = () => {
    setResumeData((prevData) => ({
      ...prevData,
      sections: [
        ...prevData.sections,
        { sectionTitle: "", sectionSubtitle: "", description: "", bulletPoint1: "", bulletPoint2: "", bulletPoint3: "" },
      ],
    }));
  };

  return (
    <div>
      <MainStyle>
        <FormStyle>
          <div>
            <h3>Your Information:</h3>
            <form>
              <label>
                Name:
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={resumeData.name}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Phone Number:
                <br />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={resumeData.phoneNumber}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Email:
                <br />
                <input
                  type="email"
                  name="email"
                  value={resumeData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Location:
                <br />
                <input
                  type="text"
                  name="location"
                  value={resumeData.location}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Links:
                <br />
                <input
                  type="text"
                  name="links"
                  value={resumeData.links}
                  onChange={handleInputChange}
                />
              </label>
            </form>
          </div>
          <div>
            <h3>Customization:</h3>
            <p>Font:</p>
            <select value={fontFamily} onChange={handleFontFamilyChange}>
              <option value="">Select a font</option>
              {fontFamilies.map(
                ({ value, label, component: FontFamilyOption }) => (
                  <FontFamilyOption key={value} value={value}>
                    {label}
                  </FontFamilyOption>
                )
              )}
            </select>{" "}
            <p>Font Size:</p>
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option value="">Select a size</option>
              {fontSizes.map(({ value, label, component: FontSizeOption }) => (
                <FontSizeOption key={value} value={value}>
                  {label}
                </FontSizeOption>
              ))}
            </select>
            <p>Text Color:</p>
            <select value={fontColor} onChange={handleFontColorChange}>
              <option value="">Select a color</option>
              {textColors.map(
                ({ value, label, component: TextColorOption }) => (
                  <TextColorOption key={value} value={value}>
                    {label}
                  </TextColorOption>
                )
              )}
            </select>
            <p>Background Color:</p>
            <select value={bgColor} onChange={handleBgColorChange}>
              <option value="">Select a color</option>
              {textColors.map(({ value, label, component: BgColorOption }) => (
                <BgColorOption key={value} value={value}>
                  {label}
                </BgColorOption>
              ))}
            </select>
            <br />
            <form>
              <h3>Resume Sections:</h3>
              {resumeData.sections.map((section, index) => (
                <div key={index}>
                  <label>
                    <p className="section-title">Section Title:</p>
                    <input
                      type="text"
                      name="sectionTitle"
                      value={section.sectionTitle}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                  <br />
                  <label>
                    Section Subtitle:
                    <br />
                    <input
                      type="text"
                      name="sectionSubtitle"
                      value={section.sectionSubtitle}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                  <br />
                  <label>
                    Description:
                    <br />
                    <textarea
                      name="description"
                      value={section.description}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                  <br />
                  <label>
                    Bullet Point 1:
                    <br />
                    <input
                      type="text"
                      name="bulletPoint1"
                      value={section.bulletPoint1}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                  <br />
                  <label>
                    Bullet Point 2:
                    <br />
                    <input
                      type="text"
                      name="bulletPoint2"
                      value={section.bulletPoint2}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                  <br />
                  <label>
                    Bullet Point 3:
                    <br />
                    <input
                      type="text"
                      name="bulletPoint3"
                      value={section.bulletPoint3}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                </div>
              ))}
              <button type="button" onClick={addSection}>
                Add Section
              </button>
            </form>
          </div>
        </FormStyle>
        <TargetComponent
          ref={targetRef}
          {...resumeData}
          bgcolor={bgColor}
          style={{ fontFamily }}
        />
      </MainStyle>
    </div>
  );
};

export default MainContent;
