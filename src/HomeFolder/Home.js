import React, { useEffect } from "react";
import { Button, Collapse } from "antd";
import "./Home.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@material-ui/core";
import axios from "axios";

function Home() {
   const win = window.sessionStorage;

  const navigate = useNavigate();
  const location = useLocation();

  const [ID, SETId] = useState(0);
  const [total, settotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState({
    InvoiceId:0,
    PONumber:0,
    TaXID:0,
    Tax:0,
    Amount:0,
    VendorId:0,
  

  });

  function GetByID() {
    axios.get("http://localhost:3030/InvoiceDetail?id=" + location.state).then((result) => {
      setData({
        InvoiceId:result.data[0].InvoiceId,
        PONumber:result.data[0].PONumber,
        TaXID:result.data[0].TaXID,
        Tax:result.data[0].Tax,
        Amount:result.data[0].Amount,
        VendorId:result.data[0].VendorId
      })

       settotal(Number(result.data[0].Amount) + Number(result.data[0].Tax));
    });
  }

  useEffect(() => {
    GetByID()
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const items = [
    {
      key: "1",
      label: "Net Banking",
      children: (
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
 
    // if (ID > 0) {
    
    // }

  return (
    <>
      <div className="HomeDiv">
        <h4>Your Payment Details</h4>

        <div className="container">
          <div className="container">
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv">
                  <strong>Invoice Id :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.InvoiceId}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv">
                  <strong>Vendor Id :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.VendorId}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv">
                  <strong>PO NUmber :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.PONumber}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv">
                  <strong>Invoice Amount :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.Amount}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv" style={{ textAlign: "right" }}>
                  <strong>Sub Total :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.Amount}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv">
                  <strong>Tax Id :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.TaXID}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div className="GridDiv">
                  <strong>Tax Amount :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{Data.Tax}</div>
              </Grid>
              {/* Row--End */}
              {/* Row--Start */}
              <Grid item xs={6}>
                <div
                  className="GridDiv"
                  style={{
                    textAlign: "right",
                    borderTop: "1px solid rgb(29, 29, 88)",
                  }}
                >
                  <strong>Grand Total :</strong>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="GridDiv">{total}</div>
              </Grid>
              {/* Row--End */}
            </Grid>
          </div>
          <br></br>
          <div className="btnDiv">
            <Button type="primary" onClick={handleClickOpen}>
              Pay Now
            </Button>
          </div>
        </div>
      </div>
      <Button
        type="primary"
        onClick={() => {
          navigate("/Crud");
        }}
      >
        Go to CRUD
      </Button>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Select Your Payment Method"}</DialogTitle>
        <DialogContent>
          <Collapse className="Dialog" accordion items={items} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default Home;
