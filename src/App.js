import React, { useEffect } from "react";

//
import "./styles/App.css";

//
import Routes from "./routes/Routes";

function App() {
  document.title = "Animal X";

  return (
    <div className="main">
      <Routes />
    </div>
  );
}

export default App;
