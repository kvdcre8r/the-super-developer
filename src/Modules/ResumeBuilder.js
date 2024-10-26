import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomResume from "./CustomResume";
import Header from "./Header";
import Container from "./Container.style";

// Styled Components
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

const SelectorStyle = styled.div`
  font-family: open-sans;
  color: lightcyan;
  background-color: #30599b;
  p {
    margin: 0px;
  }
  h3 {
    border-bottom: 2px solid lightcyan;
    margin-bottom: 5px;
    margin-right: 10px;
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
    }
  }
`;

const TargetComponentWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => props.bgcolor || "transparent"};
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

const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <TargetComponentWrapper ref={ref} bgcolor={props.bgcolor}>
      <CustomResume {...props} />
    </TargetComponentWrapper>
  );
});

const Selectors = () => {
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
    sections: [{ sectionTitle: "", sectionSubtitle: "", description: "" }],
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
        { sectionTitle: "", sectionSubtitle: "", description: "" },
      ],
    }));
  };

  return (
    <div>
      <MainStyle>
        <SelectorStyle>
          <div>
            <h3>Your Information:</h3>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={resumeData.name}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Phone Number:
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
            <p>Font Family:</p>
            <select value={fontFamily} onChange={handleFontFamilyChange}>
              <option value="">Select a font</option>
              {fontFamilies.map(
                ({ value, label, component: FontFamilyOption }) => (
                  <FontFamilyOption key={value} value={value}>
                    {label}
                  </FontFamilyOption>
                )
              )}
            </select>
            <br />
            <form>
              <h3>Resume Sections:</h3>
              {resumeData.sections.map((section, index) => (
                <div key={index}>
                  <label>
                    Section Title:
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
                    <textarea
                      name="description"
                      value={section.description}
                      onChange={(event) => handleSectionChange(index, event)}
                    />
                  </label>
                  <br />
                </div>
              ))}
              <button type="button" onClick={addSection}>
                Add Section
              </button>
            </form>
          </div>
        </SelectorStyle>
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

function Custom() {
  return (
    <Container>
      <Header />
      <Selectors />
    </Container>
  );
}

export default Custom;
