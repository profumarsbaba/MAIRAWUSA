import React from "react";
import "./CSS/LoginSignup.css";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  // const [username, setUserName] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate()

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value });
  };

  const Login = async () => {
    console.log("login", formData);

    let responseData;
    await fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
   
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      alert("Login was successufully");
      navigate('/');
    }
    else{
      alert(responseData.error);
    }
  };

  // const Login = async () => {
  //   const res =  await fetch('http://localhost:4000/login', {
  //     method:"POST",
  //     headers:{
  //       Accept:'application/form-data',
  //       'Content-Type':'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //   if(res.error){
  //     return console.log(res)
  //   }

  //  const data = await res.json()
  //  console.log(data)

  //   if(data.success){
  //     localStorage.setItem('auth-token', data.token);
  //     navigate('/');
  //   }
  //   else{
  //     alert(data.errors);
  //   }
  // }

  const singup = async () => {
   
    console.log("singup", formData);
    let responseData;
    await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      method:"POST",
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=>responseData=data)
   
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      alert("Singup was successufully")
      navigate('/');
    }
    else{
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container" >
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
        
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Your Password"
          />
        </div>

        <button type="button" onClick={()=>{state==="Login"? Login() : singup()}}>Continue</button>

        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here
            </span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
