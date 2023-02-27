import React from 'react';
import classes from "../components/../styles.scss";

export const Services: React.FC = () => {

    console.log(`API base: ${process.env.API_BASE}`);

  return (
    <>
      <h1 className={classes.h1service}>Services</h1>
      <h2>{process.env.API_BASE}</h2>
    </>
  );
}
