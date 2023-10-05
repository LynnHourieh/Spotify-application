import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardAlbum() {

  return (
    <div className="vw-100  d-flex justify-content-between">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body><Card.Footer className="text-muted text-center">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default CardAlbum;
