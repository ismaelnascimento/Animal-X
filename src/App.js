import React from "react";

//
import Header from "./layouts/Header/Header";
import Content from "./views/Content/Content";
import "./styles/App.css";

function App() {
  return (
    <div className="main">
      <Header />

      <Content />
    </div>
  );
}

export default App;
