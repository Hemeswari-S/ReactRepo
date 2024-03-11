import "./App.css";
import Home from "./HomeFolder/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./NavFolder/Nav";
import Netbanking from "./NetBankingFolder/NetBanking";
import CardSelect from "./CardBankingFOlder/Card";
import Login from "./LoginF/Login";
import { useEffect,useState } from "react";
import Qr from "./QrF/Qr";
import UPImethod from "./UPFolder/UPImethod";
import Crud from "./Crud/crud";
import AddInvoice from "./AddInvoice/AddInvoice";
// import { useState } from "react";

export function App() {
  
  const win = window.sessionStorage;
  const [IsLoogedIN, SetIsLoogedIN] = useState(false);

  useEffect(() => {
    SetIsLoogedIN(
      win.getItem("username") === "Hemeswari"&&win.getItem("password") === "Jamal");
  });

  function NAv() {
   
      if (IsLoogedIN) {
        return <Navbar />
      }
      else{
        return false
      }

  

 //return <Navbar/>
  }
  // const [Logged,SEtLogged]=useState()
  return (
    <div className="App">
      {NAv()}
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Login />}></Route>
          <Route path="/AddInvoice" element={<AddInvoice />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/NetBanking" element={<Netbanking />}></Route>
          <Route path="/Upi" element={<UPImethod />}></Route>
          <Route path="/Card" element={<CardSelect />}></Route>
          <Route path="/Qr" element={<Qr />}></Route>
          <Route path="/Crud" element={<Crud />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
