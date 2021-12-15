//import logo from './logo.svg';
import "./App.css";
import Rating from "./components/Rating";
import AddMovieModal from "./components/AddMovieModal";
import Movies from "./components/Movies";
//import filter from "./components/filter";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
//import StarIcon from "./components/StarIcon";
import { Button } from "reactstrap";
import MovieList, { MovieCard } from "./components/MovieCard";

function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [movies, setMovies] = useState([...Movies]);

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleSearch = (query) => {};
  const handleRatingFilter = (index) => {};

  return (
    <>
      <div className="App">
        <div className="header-items">
          <Rating />
          <filter />

          <Button variant="primary" onClick={handleShow} id="add-button">
            <span style={{ fontSize: "25px", color: "green" }}> + </span> Add
            Movie
          </Button>
        </div>
        <div>
          <h2>Star Movie App</h2>
        </div>
        <div className="moviesArea">
          {" "}
          <MovieList movies={movies} moviesArray={searchMovieTitle} />
        </div>
      </div>

      <AddMovieModal show={show} setShow={setShow} addMovie={addMovie} />
    </>
  );
}
export default App;