import React, { useState, useRef } from "react";
import "jspdf-autotable";
import styled from "styled-components";
import { MainStyle } from "./MainContent.style";
import { FormStyle } from "./MainContent.style";
import TargetComponent from "./Output";
import html2canvas from "html2canvas";

const Option = styled.option``;

const fontSizes = [
  {
    value: "8px",
    label: "x-Small",
    component: styled(Option)`
      font-size: 8px;
    `,
  },
  {
    value: "10px",
    label: "Small",
    component: styled(Option)`
      font-size: 10px;
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
    value: "14px",
    label: "Large",
    component: styled(Option)`
      font-size: 14px;
    `,
  },
  {
    value: "16px",
    label: "x-Large",
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

function saveAsPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const content = document.getElementById("TargetComponent");

  html2canvas(content).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
      }

      doc.save("resume.pdf");
  });
}

const MainContent = () => {
  const [fontSize, setFontSize] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [resumeData, setResumeData] = useState({
    name: "John Smith",
    phoneNumber: "123-456-7890",
    email: "john.smith@example.com",
    location: "New York, NY",
    links: "https://linkedin.com/in/johnsmith",
    sections: [
      {
        sectionTitle: "Professional Experience",
        sectionSubtitle: "Software Developer",
        description: "Developed and maintained web applications.",
        bulletPoint1: "- Developed new features.",
        bulletPoint2: "- Fixed bugs.",
        bulletPoint3: "- Wrote tests.",
      },
    ],
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
        {
          sectionTitle: "",
          sectionSubtitle: "",
          description: "",
          bulletPoint1: "",
          bulletPoint2: "",
          bulletPoint3: "",
        },
      ],
    }));
  };

  const clearFields = () => {
    setResumeData({
      name: "",
      phoneNumber: "",
      email: "",
      location: "",
      links: "",
      sections: [
        {
          sectionTitle: "",
          sectionSubtitle: "",
          description: "",
          bulletPoint1: "",
          bulletPoint2: "",
          bulletPoint3: "",
        },
      ],
    });
  };

  return (
    <div>
      <MainStyle>
        <FormStyle>
          <div>
            <button type="button" onClick={clearFields}>
              Clear All
            </button>
            <button type="button" onClick={saveAsPDF}>
              Save as PDF
            </button>
            <h3>Your Information:</h3>
            <form>
              <label>
                Name:
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="Your first and last name"
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
                  placeholder="Your phone number"
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
                  placeholder="Your professional email"
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
                  placeholder="Your city or metro area"
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
                  placeholder="i.e. LinkedIn, GitHub, etc."
                  value={resumeData.links}
                  onChange={handleInputChange}
                />
              </label>
            </form>
          </div>
          <div>
            <h3>Customization:</h3>
            Font:
            <br />
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
            Font Size:
            <br />
            <select value={fontSize} onChange={handleFontSizeChange}>
              <option value="">Select a size</option>
              {fontSizes.map(({ value, label, component: FontSizeOption }) => (
                <FontSizeOption key={value} value={value}>
                  {label}
                </FontSizeOption>
              ))}
            </select>
            <br />
            Text Color:
            <br />
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
            <br />
            Background Color:
            <br />
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
                <div className="resume-section" key={index}>
                  <label>
                    Section Title:
                    <br />
                    <input
                      type="text"
                      name="sectionTitle"
                      placeholder="i.e. Education or Experience"
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
                      placeholder="i.e. Job, school, or project"
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
                      placeholder="brief summary of role or project"
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
        <div id="TargetComponent">
          <TargetComponent
            ref={targetRef}
            {...resumeData}
            bgcolor={bgColor}
            style={{ fontFamily }}
          />
        </div>
      </MainStyle>
    </div>
  );
};

export default MainContent;
