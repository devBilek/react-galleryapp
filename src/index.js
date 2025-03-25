import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactModal from "react-modal";
import "./index.css";

ReactModal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
