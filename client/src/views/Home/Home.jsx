import React from "react";
import Styles from "./Home.module.css";
import homeImage from "../../assets/images/bank-home.jpg";

const Home = () => {
  return (
    <div className={`${Styles["body"]}`}>
      <div className={`${Styles["image-container"]}`}>
        <img src={homeImage} alt="home-page" className={`${Styles["img"]}`} />
      </div>

      <div className={`${Styles["text-container"]}`}>
        <h2 className={`${Styles["text"]} text-primary ${Styles["fade-in"]}`}>
          A Basic Banking Web Application for Demostration Purpose of Person
          Verification Digital Platform Project
        </h2>
      </div>
    </div>
  );
};

export default Home;
