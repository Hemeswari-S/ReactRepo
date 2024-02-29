// import { Button, Input } from "@material-ui/core";
import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../AddInvoice/invoice.css"

const ResApiURL = "http://localhost:3031/InvoiceDetail";

export default function AddInvoice() {
  const [Id, SetId] = useState(0);
  const [Amount, SetAmount] = useState();
  const [InvoiceId, SetInvoiceId] = useState("");
  const [PONumber, SetPONumber] = useState("");
  const [Tax, SetTax] = useState("");
  const [TaXID, SetTaXID] = useState("");
  const [VendorId, SetVendorId] = useState("");
  const [date, SetDate] = useState("");
  const navigate = useNavigate();

  return (
    <div className="AddInvoice">

      <label>InvoiceId :</label>
      <Input
        type="number"
        value={InvoiceId}
        onChange={(e) => SetInvoiceId(e.target.value)}
      />
      <label>PONumber :</label>
      <Input value={PONumber} onChange={(e) => SetPONumber(e.target.value)} />
      <label>Amount :</label>
      <Input value={Amount} onChange={(e) => SetAmount(e.target.value)} />
      <label>Tax :</label>
      <Input value={Tax} onChange={(e) => SetTax(e.target.value)} />
      <label>TaXID :</label>
      <Input value={TaXID} onChange={(e) => SetTaXID(e.target.value)} />
      <label>VendorId :</label>
      <Input value={VendorId} onChange={(e) => SetVendorId(e.target.value)} />
 <br/>    
 <br/>    

      <Button
        type="primary"
        htmlType="submit"
        onClick={() => {
          SetId(Id + 1);
          SetDate(new Date())
          axios
            .post(ResApiURL, {
              id: Id,
              InvoiceId: InvoiceId,
              PONumber: PONumber,
              Amount: Amount,
              Tax: Tax,
              TaXID: TaXID,
              date: date,
              VendorId: VendorId,
            })
            .then(() => {
              alert("Added");
            });
        }}
      >
        Add
      </Button>
      <Button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Home
      </Button>
    </div>
  );
}
