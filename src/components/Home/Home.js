import { useEffect, useState } from "react";
import "./home.css";

import Catalog from "../Catalog/Catalog";
import Movies from "../../services/Movies";

function HomeScreen() {
  const [movies, setMovies] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      const _movies = new Movies();

      const movies = await _movies.getAllMovies();

      setMovies(movies);
      setBaseUrl(_movies.bannerBaseURL);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="homeScreen">
      {Object.keys(movies).map((genre) => {
        return (
          <Catalog
            title={genre.toUpperCase()}
            movies={movies[genre]}
            base_url={baseUrl}
          />
        );
      })}
    </div>
  );
}

export default HomeScreen;
