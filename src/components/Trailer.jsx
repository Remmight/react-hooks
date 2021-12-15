import React from "react";

function Trailer() {
  return (
    <div>
      <p>
        Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker
        then teams up with a Jedi Knight, a pilot and two droids to free her and
        to save the galaxy from the violent Galactic Empire.
      </p>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gBKx63Y6rG4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Trailer;
