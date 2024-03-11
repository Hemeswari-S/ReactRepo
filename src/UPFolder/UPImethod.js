import { Button, ButtonGroup } from "@material-ui/core";
import React from "react";
import "../UPFolder/Upi.css"
import { useNavigate } from "react-router-dom";

export default function UPImethod() {
    const navigate=useNavigate()
  return (
    <div className="contanier">
    <div className="contanier UPIdiv">
        <br/>
        <h4>Select Any one of these to continue Payment</h4>
        <br/>
      <ButtonGroup variant="contained" orientation="vertical" color="primary" className="ButtonGroup">
        <Button>AfterPAy</Button>
        <Button>AmazonPay</Button>
        <Button>AmericanExpress</Button>
        <Button>ApplePay</Button>
        <Button>GooglePay</Button>
        <Button>PayPal</Button>
      </ButtonGroup>
      <br/>
      <br/>
      <br/>
      <div style={{display:"flex",justifyContent:"end"}}>
      {/* <Button
          onClick={() => {
            navigate("/Home");
          }}
        >
          Back
        </Button> */}
        </div>
    </div>
    </div>
  );
}
