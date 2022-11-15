import React from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

const QR = () => {
  const {id} = useParams();
  // 1 -> account creation, 2 -> bank laon, 3 -> card request 
  console.log(id);
  return (
    <div style={{ margin: "10% auto",textAlign:"center"}}>
      <QRCode value="https://dawn-violet-3113.fly.dev/api/qr/id" />
      {/* <QRCode value={"https://dawn-violet-3113.fly.dev/api/qr/id/" + id  + "/" + process.env.REACT_APP_PUBLIC_KEY }/> */}
      <p style={{marginTop:"1rem",color:"blue"}}>Scan the above QR code using DWallet mobile app</p>
    </div>

  );
};

export default QR;
