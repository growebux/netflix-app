import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";
import './banner.css'

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
        // backgroundImage: `url("https://www.themoviedb.org/t/p"${movie}
        // )`,
        // backgroundImage: `url("https://www.themoviedb.org/t/p/original"${movie?.backdrop_path}
        // )`,
       backgroundImage: `url("https://image.tmdb.org/t/p/original//5uVhMGsps81CN0S4U9NF0Z4tytG.jpg")
        `,
        
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* Title */}
        {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1> */}
        <h1 className="banner_title">Red Notice</h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.</h1>
        {/*  description */}
      </div>
      <div className="banner_fadeBotton" />
    </header>
  );
}

export default Banner;
