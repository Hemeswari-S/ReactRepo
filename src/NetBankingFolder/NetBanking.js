import { Button, Input } from "antd";
import "./Netbanking.css";
import { useNavigate } from "react-router-dom";

function Netbanking() {
  const navigate = useNavigate();
  return (
    <div className="NetDiv">
      <div className="container">
        <h5>Search Your Bank Here..</h5>
        <Input placeholder="Search you Bank" loading enterButton />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <Button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Back
      </Button> */}
    </div>
  );
}
export default Netbanking;
