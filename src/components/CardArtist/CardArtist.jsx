import Card from "react-bootstrap/Card";
import Rating from "../Rating";
import { Link } from "react-router-dom";

function CardArtist({item}) {
      
  return (
    <div className="vw-100  d-flex justify-content-between m-3 ">
      <Link to={`/album/${item.id}`} className="text-decoration-none">
        <Card style={{ height: 420, cursor: "pointer" }}>
          {item.images && item.images.length > 0 ? (
            <Card.Img
              variant="top"
              src={item.images[0].url}
              style={{ width: "100%", height: "50%" }}
            />
          ) : (
            <Card.Img
              variant="top"
              src={"../public/images/person.png"}
              style={{ width: "19rem", height: "50%" }}
            />
          )}
          <Card.Body style={{ width: "100%", height: "50%" }}>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.followers.total} followers</Card.Text>
            <Rating rating={item.popularity / 10} />
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}

export default CardArtist;
