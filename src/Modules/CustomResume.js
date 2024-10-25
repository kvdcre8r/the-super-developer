import React from "react";
import styled from "styled-components";

const CustomStyle = styled.div`
  padding: 10px;
  h1 {
    margin: 0px;
  }
  h3 {
    margin-top: 20px;
    text-decoration: underline;
  }
`;

const CustomResume = ({
  name,
  phoneNumber,
  email,
  location,
  links,
  sections,
}) => {
  return (
    <CustomStyle>
      <h1>{name}</h1>
      <p>
        {phoneNumber} {email} {location}
      </p>
      <p>{links}</p>
      {sections.map((section, index) => (
        <div key={index}>
          <h3>{section.sectionTitle}</h3>
          <h4>{section.sectionSubtitle}</h4>
          <p>{section.description}</p>
        </div>
      ))}
    </CustomStyle>
  );
};

export default CustomResume;
