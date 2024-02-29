// import { Button, Input } from "@material-ui/core";
import { Button, Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AddInvoice/invoice.css";

const ResApiURL = "http://localhost:3030/InvoiceDetail";

export default function AddInvoice() {
  const win = window.sessionStorage;
  const [Id, SetId] = useState(1);
  const [Amount, SetAmount] = useState();
  const [InvoiceId, SetInvoiceId] = useState("");
  const [PONumber, SetPONumber] = useState("");
  const [Tax, SetTax] = useState("");
  const [TaXID, SetTaXID] = useState("");
  const [VendorId, SetVendorId] = useState("");
  const [date, SetDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if(win.getItem("Id")!==null){
      SetId(Number(win.getItem("Id")));
    }
    console.log("AddInvoice Getitem ID" + Number(win.getItem("IdofArray")));
  }, []);
  // useEffect(() => {
  //   win.setItem("IdofArray", Id);
  //   console.log("AddInvoice Set ID" + Number(win.getItem("IdofArray")));
  // }, [Id]);
    return (
    <div className="AddInvoice">
      <label>InvoiceId :</label>
      <Input
        type="number"
        value={InvoiceId}
        onChange={(e) => SetInvoiceId(e.target.value)}
      />
      <label>PONumber :</label>
      <Input
        type="number"
        value={PONumber}
        onChange={(e) => SetPONumber(e.target.value)}
      />
      <label>Amount :</label>
      <Input
        type="number"
        value={Amount}
        onChange={(e) => SetAmount(e.target.value)}
      />
      <label>Tax :</label>
      <Input
        type="number"
        value={Tax}
        onChange={(e) => SetTax(e.target.value)}
      />
      <label>TaXID :</label>
      <Input
        type="number"
        value={TaXID}
        onChange={(e) => SetTaXID(e.target.value)}
      />
      <label>VendorId :</label>
      <Input
        type="number"
        value={VendorId}
        onChange={(e) => SetVendorId(e.target.value)}
      />
      <br />
      <br />

      <Button
        type="primary"
        htmlType="submit"
        onClick={() => {
          axios
            .post(ResApiURL, {
              id: Id,
              InvoiceId: InvoiceId,
              PONumber: PONumber,
              Amount: Amount,
              Tax: Tax,
              TaXID: TaXID,
              date: ,
              VendorId: VendorId,
            })
            .then(() => {
              //alert("Added");
            //  SetId((prevVlue) => prevVlue + 1);
              sessionStorage.setItem("Id", Id + 1);
              navigate("/Home",{state:Id});
            });
        }}
      >
        Add
      </Button>
    </div>
  );
}
