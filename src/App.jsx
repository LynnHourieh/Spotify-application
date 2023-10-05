import './App.css'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes,Router } from "react-router-dom";
import { Login } from './components/Login/Login';
import SearchInput from './components/Search/SearchInput';
import SearchAlbum from './components/ArtistAlbum/ArtistAlbum';
import SearchArtist from './components/SearchArtist/SearchArtist';
function App() {


  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Spotify Artistic Search</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<SearchInput />} />
        <Route path="/artist" element={<SearchArtist />} />
        <Route path="/album" element={<SearchAlbum />} />
      </Routes>
    </>
  );
}

export default App
