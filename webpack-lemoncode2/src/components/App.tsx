import React from 'react';
import classes from "../components/../styles.scss";
import { Services } from './Services';
import myImg from '../assets/palmerasOscuras3.jfif';

export const App: React.FC = () => {

  let str: string = "Hello world!";

console.log(str);
 
  return (
    <>
      <h1 className={classes.myh1}>Hola mundo desde App component</h1>
      <div className="p-5 border border-success d-inline-block rounded ">
        <img src={myImg} className="rounded" alt="imagen" />
        <Services />
      </div>
    </>
  );
}
