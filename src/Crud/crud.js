import { Button, Input} from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Crud/crud.css"
import { red } from "@material-ui/core/colors";


function Crud() {
  const [Id, SetId] = useState();
  const [NAme, SetName] = useState("");
  const [Pwd, SetPwd] = useState("");
  const [IsEditmode, SetEditmode] = useState(false);
  const [Data, SetData] = useState([]);
  const [BTnTxt, SetBtnTxt] = useState('');

  function DeleteData(id) {
    axios.delete("http://localhost:3031/logindetails/" + id).then((res) => {
      GetData();
    });
  }
  function GetByID(id) {
    axios.get("http://localhost:3031/logindetails/" + id).then((result) => {
      console.log(result.data);
      console.log(result.data.id);
      SetEditmode(true);
      SetId(result.data.id);
      SetName(result.data.Name);
      SetPwd(result.data.Password);
    });
  }
  function GetData() {
    axios.get("http://localhost:3031/logindetails").then((res) => {
      SetData(res.data);
      console.log(res.data);
    });
  }
  useEffect(() => {
    GetData();
    
  }, []);
  // useEffect(() => {
  //   if(IsEditmode){
  //     SetBtnTxt("Update")
  //   }else{
  //     SetBtnTxt("Add")
  //   }
    
  // }, [IsEditmode]);

  const onReset = () => {
    SetId("");
    SetName("");
    SetPwd("");
    SetEditmode(false);
  };
  const navigate= useNavigate();

  return (
    <>
      <div className="container UPIdiv" >
        <h4>CRUD ...</h4>
        <table width={"100%"}>
          <tr  style={{color:red}}>
            <th>S.No</th>
            <th align="right">Username</th>
            <th align="right">Password</th>
          </tr>

          {Data.map((D) => (
            <tr>
              <td>{D.id}</td>
              <td>{D.Name}</td>
              <td>{D.Password}</td>
              <td>
                <Button
                  onClick={() => {
                    GetByID(D.id);
                  }}
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    DeleteData(D.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </table>
        <label>ID :</label>
        <Input
          value={Id}
          onChange={(e) => SetId(e.target.value)}
          disabled={IsEditmode}
        />

        <label>Name :</label>
        <Input
          value={NAme}
          onChange={(e) => SetName(e.target.value)}
        />
        <label>Password :</label>
        <Input.Password
          value={Pwd}
          onChange={(e) => SetPwd(e.target.value)}
        />

        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            if (IsEditmode) {
              axios
                .put("http://localhost:3031/logindetails/" + Id, {
                  id: Id,
                  Name: NAme,
                  Password: Pwd,
                })
                .then(() => {
                  GetData();
                  onReset();
                });
            } else {
              axios
                .post("http://localhost:3031/logindetails", {
                  id: Id,
                  Name: NAme,
                  Password: Pwd,
                })
                .then(() => {
                  GetData();
                  onReset();
                });
            }
          }}
        >
       {IsEditmode?"Update":"Add"}
        </Button>
        <Button
        onClick={() => {
          navigate("/Home");
        }}
      >
        Back
      </Button>

      </div>
    </>
  );
}
export default Crud;
