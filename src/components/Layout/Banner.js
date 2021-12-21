import React, { useState, useEffect } from "react";
import Movies from "../../services/Movies";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const _movies = new Movies();

      const { data } = await _movies.getTrends();

      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }

    fetchData();

    const initCarrossel = () => {
      setInterval(() => {
        fetchData();
      }, 10000);
    };

    initCarrossel();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* Title */}
        {/* <h1>{movie?.title || movie?.name || movie?.original_name}</h1> */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBotton" />
    </header>
  );
}

export default Banner;
