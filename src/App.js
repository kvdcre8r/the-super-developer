import React from "react";
import GlobalStyles from "./GlobalStyles.style";
import Intro from "./Modules/Intro";
import Header from "./Modules/Header";
import Container from "./Modules/MainContent.style";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Intro />
    </Container>
  );
}

export default App;
