import React from 'react';

const CustomResume = ({ name, email, experiences }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <h2>Professional Summary:</h2>
      <h2>Skills:</h2>
      <h2>Experience:</h2>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>{experience.jobTitle}</h3>
          <p>{experience.jobDuties}</p>
        </div>
      ))}
      <h2>Education:</h2>

    </div>
  );
};

export default CustomResume;
