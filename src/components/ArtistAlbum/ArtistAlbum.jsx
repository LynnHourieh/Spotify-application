import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardAlbum from "../CardAlbum/CardAlbum";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const SearchAlbum = () => {

   let { id } = useParams();
   const[albums,setAlbums]=useState("")
   const [flag,setFlag]=useState(false)
   let token = localStorage.getItem("token");
   const[loading,setLoading]=useState(false)
   console.log(token)

 
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

useEffect(() => {
 
  getAlbums();
}, [id]);

console.log(albums)
  return (
    <div className="m-5">
      <h2>name</h2>
      <p>Albums</p>
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
