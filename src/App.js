import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import ResumeBuilder from "./Modules/ResumeBuilder";
import Container from "./Modules/Container.style";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <ResumeBuilder />
    </Container>
  );
}

export default App;
