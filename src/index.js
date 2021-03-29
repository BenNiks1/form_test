import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { DataProvider } from "./components/DataContext";

import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
      <App />

  </React.StrictMode>,
  document.getElementById("root")
);
