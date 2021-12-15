import React, { useState } from "react";

const Rating = ({ movieRating = 0 }) => {
    const [rating, setRating] = useState(movieRating);
    const [hoverRating, setHoverRating] = useState(0);
    const onMouseEnter = (index) => {
      setHoverRating(index);
    };
    const onMouseLeave = () => {
      setHoverRating(0);
    };
    const onSaveRating = (index) => {
      setRating(index);
    };
    return (
      <div className="box flex">
        {[1, 2, 3, 4, 5].map((index) => {
          return (
            <Rating
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </div>
    );
  };
  export default Rating;