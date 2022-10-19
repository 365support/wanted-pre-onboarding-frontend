/** @jsxImportSource @emotion/react */
import { Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { customBodyStyle } from "./shard/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Global styles={customBodyStyle} />
      <App />
    </Router>
  </React.StrictMode>
);
