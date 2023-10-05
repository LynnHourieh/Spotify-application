import Card from "react-bootstrap/Card";


function CardAlbum({item}) {

  return (
    <div className="vw-100  d-flex justify-content-between">
      
      <Card style={{ width: "18rem", height:"40rem" }}>
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
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            <p> {item.artists[0].name}</p>
           
              {" "}
              <p>{item.release_date}</p>
              <p> {item.total_tracks} traks </p>
         
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center"
        >
             <a style={{textDecoration:"none"}}
              href={item.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >Preview on Spotify</a></Card.Footer>
      </Card>
    </div>
  );
}

export default CardAlbum;
