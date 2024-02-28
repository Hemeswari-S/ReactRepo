import React from "react";
import { Button, Collapse, Modal } from "antd";
import "./Home.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { Grid } from "@material-ui/core";
// import UpiSelect from "../UPFolder/Upi";

function Home() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState(
    "Are you sure! Do you Want to Go With NetBanking"
  );

  const navigate = useNavigate();

  const showModal = () => {
    
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("Your Redirecting to The NetBanking page");
    navigate("/NetBanking")
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const items = [
    {
      key: "1",
      label: "Net Banking",
      children: (
        // <Button type="primary" onClick={showModal}>
        //   Proceed
        // </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate("/NetBanking");
          }}
        >
          Proceed
        </Button>
      ),
    },
    {
      key: "2",
      label: "UPI",
      children: (
        <Button
          type="primary"
          onClick={() => {
            navigate("/Upi");
          }}
        >
          Proceed
        </Button>
      ),
    },
    {
      key: "3",
      label: "Debit/Credit Card",
      children: (
        <Button
          type="primary"
          onClick={() => {
            navigate("/Card");
          }}
        >
          Proceed
        </Button>
      ),
    },
    {
      key: "4",
      label: "Generate QR",
      children: (
        <Button
          type="primary"
          onClick={() => {
            navigate("/Qr");
          }}
        >
          Proceed
        </Button>
      ),
    },
  ];
  return (
    <>
      
      <div className="HomeDiv">
      <h4>Select Payment Method</h4>

        <div className="container">
        <div className='container'>

        <br/>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12}>
    <div className="GridDiv"><strong>Invoice No : <i>89674523</i></strong></div>
  </Grid>
  <Grid item xs={12}>
  <div className="GridDiv"><strong>Invoice Amount : <i>45,000</i></strong></div>
   
  </Grid>
  <Grid item xs={12}>
  <div className="GridDiv"><strong>User Name : <i>xxxxxxxx</i></strong></div>
   
  </Grid>
  <Grid item xs={12}>
  <div className="GridDiv"><strong>Invoice Type : <i>xxxxxxxx</i></strong></div>
   
  </Grid>
</Grid>
{/* <div className='container'></div> */}
{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item xs={3}>
    <div className="GridDiv"><strong>Invoice No : <i>89674523</i></strong></div>
    <div className="GridDiv"><strong>Invoice No : <i>89674523</i></strong></div>
    <div className="GridDiv"><strong>Invoice No : <i>89674523</i></strong></div>
    <div className="GridDiv"><strong>Invoice No : <i>89674523</i></strong></div>
  </Grid>
</Grid> */}

    </div>
    <br></br>
      <br></br>
          <Collapse accordion items={items} />
        </div>
      </div>

      <Button type="primary"
        onClick={() => {
          navigate("/Crud");
        }}
      >
        Go to CRUD
      </Button>      {/* <Modal
        title="Confirm !"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal> */}
     
    </>
  );
}
export default Home;


