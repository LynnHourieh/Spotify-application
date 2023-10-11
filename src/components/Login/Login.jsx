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

  //console.log(clientID)
   let token = window.localStorage.getItem("token");
   const logout =()=>{
    localStorage.removeItem("token")
    navigate("/")
   }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {!token ? (
        <Button
          variant="outline-secondary"
          className="h-auto w-50"
          href={`${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURL}&response_type=${responseType}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div></div> <div style={{ fontSize: 30 }}>Login</div>
            <p>
              <FontAwesomeIcon icon={faSpotify} className="spotifyIcon" />
            </p>{" "}
          </div>
        </Button>
      ) : (
        <Button
          variant="outline-secondary"
          className="h-auto w-50"
           onClick={logout}
        >
          {" "}
          <div className="d-flex justify-content-between align-items-center">
            <div></div> <p style={{ fontSize: 30 }}>Logout</p>
            <p>
              <FontAwesomeIcon icon={faSpotify} className="spotifyIcon" />
            </p>{" "}
          </div>
        </Button>
      )}
    </div>
  );
};
