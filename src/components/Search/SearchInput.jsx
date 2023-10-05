import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../Search/SearchInput.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
const SearchInput = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className=" h-auto w-50 p-3 ">
        <InputGroup >
          <FormControl
            className="text-center  "
            style={{fontSize:30}}
            type="text"
            name="q"
            id="q"
            placeholder="Search for an artist..."
            aria-label="Search for an artist"
            aria-describedby="button-search"
          ></FormControl>
          <Button variant="outline-secondary" type="submit" id="button-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchInput;
