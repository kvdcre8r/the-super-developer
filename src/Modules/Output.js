import React from "react";
import styled from "styled-components";
const CustomStyle = styled.div`
  padding: 10px;
  width: 700px;
  height: 1000px;
  h1 {
    margin: 0px;
  }
  h2 {
    margin: 20px 0px 10px 0px;
    text-decoration: underline;
  }
  h3,
  h4,
  p {
    margin: 5px;
  }
  h4 {
    font-weight: normal;
  }
  span {
    margin: 0px;
    padding-right: 10px;
  }
`;
const CustomResume = ({
  name,
  phoneNumber,
  email,
  location,
  links,
  sections = [],
}) => {
  return (
    <CustomStyle>
      {" "}
      <h1>{name}</h1> <span>{phoneNumber}</span> <span>{email}</span>{" "}
      <span>{location}</span> <span>{links}</span>{" "}
      {sections.map((section, index) => (
        <div key={index}>
          {" "}
          <h2>{section.sectionTitle}</h2> <h3>{section.sectionSubtitle}</h3>{" "}
          <h4>{section.description}</h4> <p>{section.bulletPoint1}</p>{" "}
          <p>{section.bulletPoint2}</p> <p>{section.bulletPoint3}</p>{" "}
        </div>
      ))}{" "}
    </CustomStyle>
  );
};
const TargetComponentWrapper = styled.div`
  padding: 10px 10px 16px 10px;
  background-color: ${(props) => props.bgcolor || "lightyellow"};
  box-sizing: border-box;
`;
const TargetComponent = React.forwardRef((props, ref) => {
  return (
    <TargetComponentWrapper ref={ref} bgcolor={props.bgcolor}>
      {" "}
      <CustomResume {...props} />{" "}
    </TargetComponentWrapper>
  );
});
export default TargetComponent;
