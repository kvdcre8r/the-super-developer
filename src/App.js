import React from "react";
import GlobalStyles from "./GlobalStyles.style";
import Nav from "./Modules/Nav"
import Header from "./Modules/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Header />
    </div>
  );
}

export default App;
