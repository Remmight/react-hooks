import React from "react";
import { Card } from "reactstrap";
import Rating from "./Rating";
import MovieList from "./MovieList";

const filter = (props) => {
{props.movies.map((movie, _index, _rating, _year) => (
  <Card style={{ width: "20rem" }}>
    <Card.Img variant="top" src={movie.PosterURL} />
    <Card.Body>
      <Card.Title>{movie.Title}</Card.Title>
      <Card.Text>
        <p>{movie.Year}</p>
      </Card.Text>

      <div>{movie.rating}</div>
            <Rating movieRating={movie.Rating} />
          </Card.Body>
    
        </Card>
      ))}
}
export default MovieList;