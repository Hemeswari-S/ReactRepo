import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../QrF/Qr.css";
export default function Qr() {
  const navigate = useNavigate();
  return (
    <div className="container" >
      <div className="container Qrdiv">
        <h4 >Scan this QR Code in your Payment App to proceed with Payment</h4>
        <img src={require("../QrF/qrimg.png")} alt="Logo" className="Qrimg"/>
<br/>
<br/>
        <Button
          onClick={() => {
            navigate("/Home");
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
