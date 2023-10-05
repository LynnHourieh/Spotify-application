import Card from "react-bootstrap/Card";
import Rating from "../Rating";

function CardArtist() {
    const rating = 2.5;
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
        <Rating rating={rating}/>
        </Card.Body>
      </Card>
     

    </div>
  );
}

export default CardArtist;
