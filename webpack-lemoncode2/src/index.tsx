
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import classes from "./styles.scss";

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <h1 className={classes.myh1}>Hello from React</h1>
    <App />
  </div>
);
