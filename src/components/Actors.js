import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map((actor) => {
    return (
      <div key={actor.name}>
        <p>Name: {actor.name}</p>
        <ul>Movies:
          {actor.movies.map((movies) => {
            return (
              <li key={movies}>{movies}</li>
            )
          })}
        </ul>
      </div>
    ) })
  
  return <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>;
}

export default Actors;
