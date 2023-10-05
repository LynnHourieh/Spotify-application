import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardAlbum from "../CardAlbum/CardAlbum";

const SearchAlbum = () => {
  return (
    <div className="m-5">
      <h2>Name</h2>
      <p>Albums</p>
      <Row className="m-3">
        {[1, 2, 3, 4, 5, 6].map((x) => (
          <Col sm={6} md={4} lg={3} className="mb-3" key={x}>
            <CardAlbum />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchAlbum;
