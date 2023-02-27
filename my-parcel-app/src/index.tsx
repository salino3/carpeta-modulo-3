import React from "react";
import { createRoot } from "react-dom/client";
import { App } from './components/App';
import './mystyles.scss'; 

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);