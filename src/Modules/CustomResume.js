import React from "react";
import styled from "styled-components";

const CustomStyle = styled.div`
  h1 {
    font-size: 3em;
  }
`;

const CustomResume = ({ name, email, experience }) => {
  return (
    <CustomStyle>
      <h1>{name}</h1>
      <p>{email}</p>
      <h2>Experience</h2>
      <p>{experience}</p>
    </CustomStyle>
  );
};

export default CustomResume;


