import React from "react";
import { Button } from "react-bootstrap"; // Corrected import
import "../Login/Login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

export const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Button variant="outline-secondary" className="h-auto w-50">
        <div className="d-flex justify-content-between align-items-center">
          <div></div> <p style={{ fontSize: 30 }}>Login</p>
          <p>
            <FontAwesomeIcon icon={faSpotify} className="spotifyIcon" />
          </p>{" "}
        </div>
      </Button>
    </div>
  );
};
