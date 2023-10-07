import './App.css'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes,Router } from "react-router-dom";
import { Login } from './components/Login/Login';
import SearchInput from './components/Search/SearchInput';
import SearchAlbum from './components/ArtistAlbum/ArtistAlbum';


function App() {

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
        {/* screen 1 */}
        <Route path="/" element={<Login />} /> 
        {/* screen 2 */}
        <Route path="/home" element={<SearchInput />} />
        {/* screen 3 */}
        <Route path="/album/:id" element={<SearchAlbum />} />
      </Routes>
    </>
  );
}

export default App
