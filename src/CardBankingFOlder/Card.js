import { Button, Input } from "antd";
import "../CardBankingFOlder/Card.css";
import { Radio } from "antd";
import { useNavigate } from "react-router-dom";

function CardSelect() {
    const navigate=useNavigate()
  return (
    <>
      <div className="container div">
        <h5> Select Card Type</h5>
        <Radio.Group>
          <Radio value={1}>Credit Card</Radio>
          <Radio value={2}>Debit Card</Radio>
        </Radio.Group>
        <br></br>
        <br></br>
        <br></br>
        <h5> Enter Your Cared Numer Here</h5>
        <Input type="text" />
        <br></br>
<br></br><br></br>
<br></br><br></br>
<br></br>
        <Button onClick={()=>{navigate('/Home')}} >Back</Button>
      </div>

    </>
  );
}
export default CardSelect;
