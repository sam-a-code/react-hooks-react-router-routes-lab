import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList = directors.map((director) => {
    return (
      <div key={director.name}>
        <p>Name: {director.name}</p>
        <ul>Movies:
          {director.movies.map((movies) => {
            return (
              <li key={movies}>{movies}</li>
            )
          })}
        </ul>
      </div>
    ) })
  


  return <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>;
}

export default Directors;
