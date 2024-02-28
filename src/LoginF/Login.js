// import { Button, Form, Input } from "antd";
// import "./login.css";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login(Props) {
//   const navigate = useNavigate();
//   const win = window.sessionStorage;
//   const [NAme, SetName] = useState("");
//   const [Pwd, SetPwd] = useState("");
//   // const [ISLoggedIN, SetISLoggedIN] = useState(false);
//   const onFinish = (values) => {
//     console.log("Success:", values);
//   };
//   const onFinishFailed = (errorInfo) => {
//     Props.IsloggedIn = false;
//     console.log("Failed:", errorInfo);
//   };
//   useEffect(() => {
//     SetName(win.getItem("username"));
//     SetPwd(win.getItem("password"));
//   }, []);
//   useEffect(() => {
//     win.setItem("username", NAme);
//     win.setItem("password", Pwd);
//   }, [NAme, Pwd]);
//   return (
//     <>
//       <Form
//         className="LoginForm"
//         layout="vertical"
//         name="basic"
//         labelCol={{
//           span: 12,
//         }}
//         style={{
//           maxWidth: 400,
//         }}
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         //autoComplete="off"
//       >
//         <Form.Item
//           label="Username"
//           name="username"
//           rules={[
//             {
//               required: true,
//               message: "Enter Your UserName!",
//             },
//           ]}
//         >
//           <Input onChange={(e) => SetName(e.target.value)} />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[
//             {
//               required: true,
//               message: "Enter Your Password!",
//             },
//           ]}
//         >
//           <Input.Password onChange={(e) => SetPwd(e.target.value)} />
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             offset: 8,
//             span: 16,
//           }}
//         >
//           <Button
//             type="primary"
//             htmlType="submit"
//             onClick={(e) => {
//               e.preventDefault();
//               //if (NAme === "Hemeswari" && Pwd === "Jamal") {
//               console.log("Success:" + Pwd + NAme);
//               alert("Logged IN SuccessFully !!!");
//               navigate("/Home");
//               console.log(win.getItem("username"));
//               console.log(win);

//               // win.clear();
//               // SetName('');
//               // SetPwd('');

//               // }else{
//               //   alert("Enter VAlid Details");
//               // }
//             }}
//           >
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// }
import React from "react";
import "../LoginF/login.css";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const nav=useNavigate();
  return (
    <div className="container">
      <div className="homediv container row">
        
          <Card style={{ maxWidth: 500,width: "40%",height:"200px",margin:"auto", backgroundColor:"lightblue",maxHeight:"400px"}}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <strong>Welcome...</strong>
                </Typography>
                <Typography variant="body2">
                  A payment method refers to the various options available for
                  customers to make payments when purchasing a product or
                  service. Whether in a physical or online store, payment
                  methods cover a range of choices.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions style={{display:"flex",justifyContent:"end"}}>
              <Button size="small" style={{backgroundColor:"#155CA2"}} variant="contained" onClick={()=>{nav("/AddInvoice")}}>
               Continue...
              </Button>
            </CardActions>
          </Card>
        
      </div>
    </div>
  );
}

