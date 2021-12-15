//import logo from './logo.svg';
import "./App.css";
import Rating from "./components/Rating";
import AddMovieModal from "./components/AddMovieModal";
import Movies from "./components/Movies";
//import filter from "./components/filter";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StarIcon from "./components/StarIcon";
import { Button } from "reactstrap";
import MovieList, { MovieCard } from "./components/MovieCard";
import movies from "./components/Movies";

import { Router } from "react-router-dom";
import { Route } from "react-router-dom";
import movieCard from "./components/MovieCard";
import { Switch } from "react-router-dom";
import Trailer from "./components/Trailer";

function App() {
  const [searchMovieTitle, setSearchMovieTitle] = useState("");
  const [movies, setMovies] = useState([...Movies]);

  const addMovie = (newMovie) => setMovies([...movies, newMovie]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleSearch = (query) => {};
  const handleRatingFilter = (index) => {};

  return (
    <Router>
    <>
      <div className="App">
        <div className="header-items">
        <Rating />
          <filter />

          {/*Button variant="primary" onClick={handleShow} id="add-button">
            <span style={{ fontSize: "25px", color: "green" }}> + </span> Add
            Movie
  </Button */}
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
      <Trailer />
    </>
    </Router>
  );
}
export default App;