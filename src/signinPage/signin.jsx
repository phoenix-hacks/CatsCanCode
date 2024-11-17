import "./signin.scss";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function Signin() {
  const [fetching, setFetching] = useState(false);
  const [user, setUser] = useState({
    name: null,
    fullName: null,
    password: null,
    confirmPassword: "0"
  });
  const navigate = useNavigate();
  const handlesignin = () => {
    const makeuser = async () => {
      setFetching(true);
      const p = await axios.post(`http://localhost:3000/user/login`, {
        username: user.name,
        password: user.password,
        fullName: user.fullName
      });
      console.log(p?.data);
      if (p?.data?.authorized) {
        navigate("/generate");
      }
      else {
        setFetching(false);
      }
    }
    makeuser();
  }


  return (
    <>
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-accent sparkle-bg"></div>
      <div id="signin-container">
        <motion.div
          id="title-signin"
          initial={{ opacity: 0, y: -20 }}
          transition={{ type: "tween", duration: 0.7, ease: "circOut" }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get started today
        </motion.div>

        <motion.div id="title-form"
          initial={{ opacity: 0 }}
          transition={{ type: "tween", duration: 0.3, delay: 0.3, ease: "easeInOut" }}
          animate={{ opacity: 1 }}
        >

          <input type="text" className="focus:outline-none focus:ring-2 focus:ring-accent/75 " placeholder="Username" id="input-area" onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <input type="text" className="focus:outline-none focus:ring-2 focus:ring-accent/75 " placeholder="Full Name" id="input-area" onChange={(e) => setUser({ ...user, fullName: e.target.value })} />
          <input type="password" className="focus:outline-none focus:ring-2 focus:ring-accent/75 " placeholder="Password" id="input-area" onChange={(e) => setUser({ ...user, password: e.target.value })} />
          {/* <input type="password" placeholder="Confirm password" id="input-area" style={{color:user.confirmPassword.length<3 ?"white":user.password===user.confirmPassword?"white":"red"}} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}/> */}
          <motion.button id="submit-button"
            initial={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "tween", duration: 0.7, delay: 0.6, ease: "easeOut" }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={() => handlesignin()}

          >{fetching == true ? "Fetching" : "Sign up"}</motion.button>
        </motion.div>
      </div>
    </>
  );
}
