// npm install parcel --save-dev
// npm install rimraf --save-dev
// npm install bootstrap --save
// npm install typescript --save-dev  <- para type-check
// npm install npm-run-all --save-dev
// npm install react react-dom --save  
// npm install @types/react @types/react-dom


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