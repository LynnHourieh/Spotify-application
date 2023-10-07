import './App.css'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes,Router } from "react-router-dom";
import { Login } from './components/Login/Login';
import SearchInput from './components/Search/SearchInput';
import SearchAlbum from './components/ArtistAlbum/ArtistAlbum';
import { useLocation } from 'react-router-dom';

function App() {
 const { search } = useLocation();
 const sp = new URLSearchParams(search);
 const query = sp.get("q") || "";
//  console.log(query);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">
            Spotify Artistic Search
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<SearchInput />} />
        <Route path="/home/:q" element={<SearchInput />} />
        <Route path="/album/:id" element={<SearchAlbum query={query} />} />
      </Routes>
    </>
  );
}

export default App
