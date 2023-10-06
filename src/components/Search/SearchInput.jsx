import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardArtist from "../CardArtist/CardArtist";
import { useSearchParams } from "react-router-dom"; // Import useSearchParams

const SearchInput = () => {
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); // Initialize searchParams

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  useEffect(() => {
    // When the component mounts or the searchKey changes, update the URL
    setSearchParams({ q: searchKey });
  }, [searchKey, setSearchParams]);

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
    setFlag(true);
    setLoading(true);
  };

  return (
    <div>
      {token ? (
        <div>
          <div
            className={
              !flag
                ? "d-flex justify-content-center align-items-center vh-100"
                : "d-flex justify-content-center"
            }
          >
            <Form className="h-auto w-50 p-3" onSubmit={searchArtists}>
              <InputGroup>
                <FormControl
                  className="text-center"
                  style={{ fontSize: 30 }}
                  type="text"
                  name="q"
                  id="q"
                  placeholder="Search for an artist..."
                  aria-label="Search for an artist"
                  aria-describedby="button-search"
                  value={searchKey} // Set the value of the input to the searchKey state
                  onChange={(e) => setSearchKey(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  type="submit"
                  id="button-search"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </InputGroup>
            </Form>
          </div>
          {flag && (
            <Row className="m-3">
              {artists.map((item) => (
                <Col sm={6} md={4} lg={3} className="mb-3" key={item.id}>
                  {loading && <CardArtist item={item} />}
                </Col>
              ))}
            </Row>
          )}
        </div>
      ) : (
        <h2>please login</h2>
      )}
    </div>
  );
};

export default SearchInput;
