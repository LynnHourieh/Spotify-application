import Card from "react-bootstrap/Card";


function CardAlbum({item}) {

  return (
    <div className="  d-flex justify-content-between">
      <Card style={{ width: "15rem", height: 500 }}>
        {item.images && item.images.length > 0 ? (
          <Card.Img
            variant="top"
            src={item.images[0].url}
            style={{ width: "100%", height: "40%" }}
          />
        ) : (
          <Card.Img
            variant="top"
            src={"../public/images/person.png"}
            style={{ width: "19rem", height: "40%" }}
          />
        )}
        <Card.Body style={{ height: "60%" }}>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
           
              {" "}
              <h3>Artists:</h3>
              <ul class="text-muted">
                {item.artists.map((artist) => (
                  <li key={artist.id}>{artist.name}</li>
                ))}
              </ul>{" "}
              <div class="text-muted">{item.release_date}</div>
              <div class="text-muted"> {item.total_tracks} tracks </div>
       
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center">
          <a
            style={{ textDecoration: "none" }}
            href={item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Preview on Spotify
          </a>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardAlbum;
