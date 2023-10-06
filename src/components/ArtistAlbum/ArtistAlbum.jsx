import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardAlbum from "../CardAlbum/CardAlbum";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchAlbum = () => {

   let { id } = useParams();
   let token = localStorage.getItem("token");
   const[albums,setAlbums]=useState("")
   const [flag,setFlag]=useState(false)

   const[loading,setLoading]=useState(false)
 const [artistName, setArtistName] = useState("");

 
const getAlbums = async () => {

  const { data } = await axios.get(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  setAlbums(data.items);
  setLoading(true)
  
};
  const getArtistName = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArtistName(data.name); // Set the artist's name
    } catch (error) {
      console.error("Error fetching artist name:", error);
    }
  };
useEffect(() => {
 getArtistName()
  getAlbums();
}, [id]);

console.log(albums)
  return (
    <div className="m-5">
      <div className="m-4"><h2>{artistName}</h2>
      <p class="text-muted"> Albums</p></div>
      
      {loading?( <Row className="m-3">

        {albums.map((item) => (
          <Col sm={6} md={4} lg={3} className="mb-3" key={item.id}>
           {loading && (<CardAlbum  item={item} />) } 
          </Col>
        ))}
      </Row>):(<h2>no albums</h2>)}
     
    </div>
  );
};

export default SearchAlbum;
