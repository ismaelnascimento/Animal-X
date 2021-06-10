import React, { useEffect, useState } from "react";

//
import "./styles/App.css";

//
import Routes from "./routes/Routes";

function App() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const eventScrool = () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    window.addEventListener("scroll", eventScrool);
    return () => {
      window.removeEventListener("scroll", eventScrool);
    };
  }, []);

  document.title = "Animal X";

  return (
    <div className="main">
      <Routes />

      <div
        onClick={() => window.scrollTo({ top: 0 })}
        style={{ bottom: top ? "15px" : "-200px" }}
        className="animal-x-btn-top"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M11.7257 4.25L11.7257 19.25"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.70131 10.2998L11.7253 4.2498L17.7503 10.2998"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default App;
