
import React, {useEffect, useState} from "react"

import "../css/home.css"
import { Button } from "react-bootstrap";

import {
  signOut,onAuthStateChanged
} from "firebase/auth";
import {auth} from "../componants/firebase"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const [user, setUser] = useState(null);
  
  const onLogout=async()=>{
      console.log("dfd",auth)
      try {
          await signOut(auth);
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
     
  }
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
        console.log("Auth", currentuser);
        setUser(currentuser)
        if(!currentuser){
          navigate("/")
      }
      });
      return () => {
        unsubscribe();
      };
    }, []);
  return (
    <>
{user&& 
( <div className="main-layout">
           <div className="navbar">
                  <h1 className="logo">CURRENCY CONVERTOR</h1>
                  <div  className=" btn-wrap">
                  <Button variant="danger"  onClick={onLogout} >Logout</Button>
                  </div>
            </div>
      
    </div>
)}
</>
  )
}

export default Home
