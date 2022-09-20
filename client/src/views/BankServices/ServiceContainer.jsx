import React from "react";
import Styles from "./ServiceContainer.module.css";


const ServiceContainer = (props) => {
  return (
    <div className={`${Styles["container"]}`}>
      <img src={props.image} alt="create-account" className={`${Styles["image"]}`} />
      <div className={`${Styles["text-container"]}`}>
        <p className={`${Styles["text"]} text-primary`}>
          {props.text}
        </p>
        <div className={`${Styles["btn-container"]} `}>
        <button type="button" className={`${Styles['btn']} btn btn-outline-primary`}>Make a reservation</button>
        <button type="button" className={`${Styles['btn']} btn btn-outline-primary`} onClick={()=>{props.handleClick( )}}>Verify using DID</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceContainer;
