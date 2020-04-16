import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = () => {
  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
};

// for testing purpose only

window.__api_base_url__ = "http://localhost:3000/api";

function updateBaseUrl(url = "http://localhost:3000/api") {
  window.__api_base_url__ = url;
}

window.updateBaseUrl = updateBaseUrl;

render();
