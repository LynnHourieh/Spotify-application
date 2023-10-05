import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../Search/SearchInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardArtist from "../CardArtist/CardArtist";
import "../../App.css"
const SearchArtist = () => {
  return (
    <div className="vh-100">
      <div className="d-flex justify-content-center  ">
        <Form className=" h-auto w-50 p-3 ">
          <InputGroup>
            <FormControl
              className="text-center "
              style={{ fontSize: 30 }}
              type="text"
              name="q"
              id="q"
              placeholder="Search for an artist..."
              aria-label="Search for an artist"
              aria-describedby="button-search"
            ></FormControl>
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
      <Row className="m-3">
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <Col sm={6} md={4} lg={3} className="mb-3" key={x}>
     
            <CardArtist />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchArtist;
