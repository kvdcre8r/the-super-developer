import React, { useState, useRef } from "react";
import styled from "styled-components";
import CustomResume from "./CustomResume";
import Header from "./Header";

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

const SmallOption = styled(Option)`
  font-size: 8px;
`;

const MediumOption = styled(Option)`
  font-size: 12px;
`;

const LargeOption = styled(Option)`
  font-size: 16px;
`;

const PinkOption = styled(Option)`
  color: black;
  background-color: pink;
`;

const GoldOption = styled(Option)`
  color: black;
  background-color: gold;
`;

const CyanOption = styled(Option)`
  color: black;
  background-color: cyan;
`;

const NavyOption = styled(Option)`
  color: white;
  background-color: navy;
`;

const PurpleOption = styled(Option)`
  color: white;
  background-color: purple;
`;

const GreenOption = styled(Option)`
  color: white;
  background-color: darkgreen;
`;

const WhiteOption = styled(Option)`
  color: black;
  background-color: white;
`;

const GreenYellowOption = styled(Option)`
  color: black;
  background-color: greenyellow;
`;

const BlackOption = styled(Option)`
  color: white;
  background-color: black;
`;

const SpyAgencyOption = styled(Option)`
  font-family: "spyagency";
  font-size: 0.8em;
`;

const ChampionOption = styled(Option)`
  font-family: "champion";
`;

const MonospaceOption = styled(Option)`
  font-family: monospace;
`;

const OpenSansOption = styled(Option)`
  font-family: "open-sans";
`;

const CourgetteOption = styled(Option)`
  font-family: "courgette";
`;

const JosefinSansOption = styled(Option)`
  font-family: "josefin-sans";
`;

// Components
const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <TargetComponentWrapper ref={ref} bgcolor={props.bgcolor}>
      <CustomResume {...props} />
    </TargetComponentWrapper>
  );
});

const Selectors = () => {
  const [fontSize, setFontSize] = useState("");
  const [bgcolor, setbgcolor] = useState("");
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

  const handlebgcolorChange = (event) => {
    const color = event.target.value;
    setbgcolor(color);
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
      <Header />
      <MainStyle>
        <SelectorStyle>
          <div>
            <h3>Your Information</h3>
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
                Personal Links:
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
            <h3>Customization</h3>
            <p>Font:</p>
            <select value={fontFamily} onChange={handleFontFamilyChange}>
              <option value="">Select a font</option>
              <SpyAgencyOption value="spyagency">Spy Agency</SpyAgencyOption>
              <ChampionOption value="champion">Champion</ChampionOption>
              <MonospaceOption value="monospace">Monospace</MonospaceOption>
              <OpenSansOption value="open-sans">Open Sans</OpenSansOption>
              <CourgetteOption value="courgette">Courgette</CourgetteOption>
              <JosefinSansOption value="josefin-sans">
                Josefin Sans
              </JosefinSansOption>
            </select>
            <p>Font Size:</p>
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option value="">Select a size</option>
              <SmallOption value="8px">small</SmallOption>
              <MediumOption value="12px">medium</MediumOption>
              <LargeOption value="16px">large</LargeOption>
            </select>
            <p>Text Color:</p>
            <select value={fontColor} onChange={handleFontColorChange}>
              <option value="">Select a color</option>
              <PinkOption value="Pink">Pink</PinkOption>
              <GoldOption value="gold">Gold</GoldOption>
              <CyanOption value="cyan">Cyan</CyanOption>
            <NavyOption value="navy">Navy</NavyOption>
              <PurpleOption value="purple">Purple</PurpleOption>
              <GreenOption value="darkgreen">Green</GreenOption>
              <GreenYellowOption value="greenyellow">
                Greenyellow
              </GreenYellowOption>
              <WhiteOption value="white">White</WhiteOption>
              <BlackOption value="black">Black</BlackOption>
            </select>
            <p>Background Color:</p>
            <select value={bgcolor} onChange={handlebgcolorChange}>
              <option value="">Select a color</option>
              <PinkOption value="Pink">Pink</PinkOption>
              <GoldOption value="gold">Gold</GoldOption>
              <CyanOption value="cyan">Cyan</CyanOption>
            <NavyOption value="navy">Navy</NavyOption>
              <PurpleOption value="purple">Purple</PurpleOption>
              <GreenOption value="darkgreen">Green</GreenOption>
              <GreenYellowOption value="greenyellow">
                Greenyellow
              </GreenYellowOption>
              <WhiteOption value="white">White</WhiteOption>
              <BlackOption value="black">Black</BlackOption>
            </select>
            <br />
            <form>
              <h3>Resume Sections</h3>
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
          bgcolor={bgcolor}
          style={{ fontFamily }}
        />
      </MainStyle>
    </div>
  );
};

function ThemeCustom() {
  return (
    <div>
      <Selectors />
    </div>
  );
}

export default ThemeCustom;
