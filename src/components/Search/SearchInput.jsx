import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardArtist from "../CardArtist/CardArtist";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [token, setToken] = useState("");
  const [artists, setArtists] = useState([]);
  const [flag, setFlag] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  //get q from url
  const q = searchParams.get("q");
  //console.log(q)
  
  //handle user authenticaction 
  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash)
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
    // When the component mounts or the q changes, update the URL
    //q is the value entered in input 
    setSearchParams({ q: q });

  }, [q, setSearchParams]);

  const searchArtists = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
            //q:e.target.value
          query: q, 
          type: "artist",
        },
      });

      setArtists(data.artists.items);
      setFlag(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
            <Form className="h-auto w-50 p-3" onChange={searchArtists}>
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
                  value={q}
                  onChange={(e) =>
                    setSearchParams((prev) => {
                      prev.set("q", e.target.value);
                      return prev;
                    })
                  }
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
          {q && (
            <Row className="m-3">
              {artists.map((item) => (
                <Col sm={6} md={4} lg={3} className="mb-3" key={item.id}>
                  {flag && <CardArtist item={item} />}
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
