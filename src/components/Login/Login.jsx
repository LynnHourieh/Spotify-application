import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap"; 
import "../Login/Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const clientID = import.meta.env.VITE_CLIENT_ID;
  const redirectURL = import.meta.env.VITE_REDIRECT_URL;
  const authEndpoint = import.meta.env.VITE_AUTH_ENDPOINT;
  const responseType = import.meta.env.VITE_RESPONSE_TYPE;
const navigate=useNavigate()

  console.log(clientID)
// const [token, setToken] = useState("");
   let token = window.localStorage.getItem("token");
   const logout =()=>{
    // setToken("");
    localStorage.removeItem("token")
    navigate("/")
   }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {!token ? <Button variant="outline-secondary" className="h-auto w-50" href={`${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURL}&response_type=${responseType}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            </div> <p style={{ fontSize: 30 }}>Login</p>
          <p>
            <FontAwesomeIcon icon={faSpotify} className="spotifyIcon" />
          </p>{" "}
        </div>
      </Button>:<Button onClick={logout}>Logout</Button>}
    </div>
  );
};
