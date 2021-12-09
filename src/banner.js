import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.themoviedb.org/t/p"${movie}
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* Title */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/*  description */}
      </div>
    </header>
  );
}

export default Banner;
