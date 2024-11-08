import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import MainContent from "./Modules/MainContent";
import Header from "./Modules/Header";
import Container from "./Modules/Container.style";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <MainContent />
    </Container>
  );
}

export default App;
