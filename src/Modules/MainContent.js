import React, { useState, useRef } from "react";
import "jspdf-autotable";
import html2canvas from "html2canvas";
import { MainStyle, FormStyle } from "./MainContent.style";
import { fontSizes, textColors, fontFamilies } from "./Selectors";
import TargetComponent from "./Output";

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
        s1SectionTitle: "Professional Summary",
        s1SectionSubtitle: "",
        s1Description:
          "Creative, analytical, and quality-driven tech-professional seeking entry-level remote or local work opportunities. Trained in full stack web development with a keen eye for detail and design. Excited to create, develop, and maintain innovative web applications that go above and beyond the client's needs.",
        s1BulletPoint1: "",
        s1BulletPoint2: "",
        s1BulletPoint3: "",
        s2SectionTitle: "Technical Experience",
        s2SectionSubtitle: "Lead Software Developer - Big Tech Co.",
        s2Description: "Developed and maintained web applications",
        s2BulletPoint1: "- Developed new features",
        s2BulletPoint2: "- Fixed bugs",
        s2BulletPoint3: "- Wrote tests",
        s3SectionTitle: "",
        s3SectionSubtitle: "Jr. Software Developer - Small Tech Co.",
        s3Description: "Developed and maintained web applications",
        s3BulletPoint1: "- Developed new features",
        s3BulletPoint2: "- Fixed bugs",
        s3BulletPoint3: "- Wrote tests",
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
      sections: [...prevData.sections, {}],
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
          s1SectionTitle: "",
          s1SectionSubtitle: "",
          s1Description: "",
          s1BulletPoint1: "",
          s1BulletPoint2: "",
          s1BulletPoint3: "",
          s2SectionTitle: "",
          s2SectionSubtitle: "",
          s2Description: "",
          s2BulletPoint1: "",
          s2BulletPoint2: "",
          s2BulletPoint3: "",
          s3SectionTitle: "",
          s3SectionSubtitle: "",
          s3Description: "",
          s3BulletPoint1: "",
          s3BulletPoint2: "",
          s3BulletPoint3: "",
        },
      ],
    });
  };

  return (
    <div>
      <MainStyle>
        <FormStyle>
          <div className="top-buttons">
            <button type="button" onClick={clearFields}>
              Clear All
            </button>
            <button type="button" onClick={saveAsPDF}>
              Save as PDF
            </button>
          </div>
          <div>
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
                <div>
                  <div className="resume-section" key={index}>
                    <label>
                      Section Title:
                      <br />
                      <input
                        type="text"
                        name="s1SectionTitle"
                        placeholder="ex: Professional Summary"
                        value={section.s1SectionTitle}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Subtitle:
                      <br />
                      <input
                        type="text"
                        name="s1SectionSubtitle"
                        placeholder="leave blank if not applicable"
                        value={section.s1SectionSubtitle}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Description:
                      <br />
                      <textarea
                        name="s1Description"
                        placeholder="brief summary of your skills and experience"
                        value={section.s1Description}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 1:
                      <br />
                      <input
                        type="text"
                        name="s1BulletPoint1"
                        value={section.s1BulletPoint1}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 2:
                      <br />
                      <input
                        type="text"
                        name="s1BulletPoint2"
                        value={section.s1BulletPoint2}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 3:
                      <br />
                      <input
                        type="text"
                        name="s1BulletPoint3"
                        value={section.s1BulletPoint3}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                  </div>
                  <div className="resume-section" key={index}>
                    <label>
                      Section Title:
                      <br />
                      <input
                        type="text"
                        name="s2SectionTitle"
                        placeholder="i.e. Skills, Education, Experience"
                        value={section.s2SectionTitle}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Section Subtitle:
                      <br />
                      <input
                        type="text"
                        name="s2SectionSubtitle"
                        placeholder="i.e. Job, school, or project"
                        value={section.s2SectionSubtitle}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Description:
                      <br />
                      <textarea
                        name="s2Description"
                        placeholder="brief summary of role or project"
                        value={section.s2Description}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 1:
                      <br />
                      <input
                        type="text"
                        name="s2BulletPoint1"
                        value={section.s2BulletPoint1}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 2:
                      <br />
                      <input
                        type="text"
                        name="s2BulletPoint2"
                        value={section.s2BulletPoint2}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 3:
                      <br />
                      <input
                        type="text"
                        name="s2BulletPoint3"
                        value={section.s2BulletPoint3}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                  </div>
                  <div className="resume-section" key={index}>
                    <label>
                      Section Title:
                      <br />
                      <input
                        type="text"
                        name="s3SectionTitle"
                        placeholder="i.e. Education or Experience"
                        value={section.s3SectionTitle}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Section Subtitle:
                      <br />
                      <input
                        type="text"
                        name="s3SectionSubtitle"
                        placeholder="i.e. Job, school, or project"
                        value={section.s3SectionSubtitle}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Description:
                      <br />
                      <textarea
                        name="s3Description"
                        placeholder="brief summary of role or project"
                        value={section.s3Description}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 1:
                      <br />
                      <input
                        type="text"
                        name="s3BulletPoint1"
                        value={section.s3BulletPoint1}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 2:
                      <br />
                      <input
                        type="text"
                        name="s3BulletPoint2"
                        value={section.s3BulletPoint2}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                    <br />
                    <label>
                      Bullet Point 3:
                      <br />
                      <input
                        type="text"
                        name="s3BulletPoint3"
                        value={section.s3BulletPoint3}
                        onChange={(event) => handleSectionChange(index, event)}
                      />
                    </label>
                  </div>
                </div>
              ))}
              <button type="button" onClick={addSection}>
                Add Sections
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
