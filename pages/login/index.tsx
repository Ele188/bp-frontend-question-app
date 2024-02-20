import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import styles from "./styles.module.css";
import { useRouter } from "next/router";


const Login  = () => {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const onClickButton = async () => {
  if(!email || !password){
    console.log("Please fill in both email and password")
    return;
  };

  try{
  const data = {
    email:email,
    password:password,
  };

  const response = await axios.post(
    "http://localhost:3001/user/login", 
    data
  );

  if(response.status === 200){
    cookie.set("jwt_token", response.data.jwt);
    router.push("/");
  }
}catch (err){
 console.log(err);
}
};

  return (
    <div>
      <div className={styles.form}>
        <h1>Login</h1>
        <input 
        id="email"
        name="email"
        placeholder="Email" 
        type="email"
        autoComplete="email"
        value={email} 
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
        <input 
        id="password"
        name="password"
        placeholder="Password" 
        type="password"
        autoComplete="current-password"
        value={password} 
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
        <button onClick={onClickButton}>Login</button>
     </div>
    </div>
  )
}

export default Login















