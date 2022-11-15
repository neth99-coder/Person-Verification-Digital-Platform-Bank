import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceContainer from "../ServiceContainer";
import Styles from "./CardRequest.module.css";
import Image from "../../../assets/images/credit card.png";

const CardRequest = () => {
  const text =
    "Credit/Debit card request is a highly confidential process. You can either follow the manual process or use your DID to proceed";
  const navigate = useNavigate();

  function handleClick() {
    // alert("Clicking from card request");
    navigate("/qr-scan/3");
  }
  return (
    <div className={`${Styles["body"]}`}>
      <ServiceContainer image={Image} text={text} handleClick={handleClick} />
    </div>
  );
};

export default CardRequest;
