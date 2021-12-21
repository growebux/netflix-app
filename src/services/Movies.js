import axios from "axios";
const { REACT_APP_API_KEY: API_KEY } = process.env;

const BASE_URL = "https://api.themoviedb.org/3";

export class Movies {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
  }

  get baseURL() {
    return BASE_URL;
  }

  get bannerBaseURL() {
    return "https://image.tmdb.org/t/p/original/";
  }

  getNetflixOriginals() {
    return this.instance.get(
      `/movie/upcoming?api_key=${API_KEY}&language=en-US`
    );
  }

  getTrends() {
    return this.instance.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US`
    );
  }

  getTopRated() {
    return this.instance.get(
      `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
  }

  getMoviesByGenre(genre) {
    const GENRES = {
      ACTION: 28,
      COMEDY: 35,
      HORROR: 27,
      ROMANCE: 10749,
      DOCUMENTARY: 99,
    };

    return this.instance(
      `/discover/movie?api_key=${API_KEY}&with_genres=${GENRES[genre]}`
    );
  }

  async getAllMovies() {
    const promises = [
      this.getNetflixOriginals(),
      this.getTopRated(),
      this.getTrends(),
      this.getMoviesByGenre("ACTION"),
      this.getMoviesByGenre("COMEDY"),
      this.getMoviesByGenre("HORROR"),
      this.getMoviesByGenre("ROMANCE"),
      this.getMoviesByGenre("DOCUMENTARY"),
    ];

    const allResults = await Promise.all(promises);

    const final = {
      "netflix originals": allResults[0].data.results,
      "top rated": allResults[1].data.results,
      trends: allResults[2].data.results,
      action: allResults[3].data.results,
      comedy: allResults[4].data.results,
      romance: allResults[5].data.results,
      documentary: allResults[6].data.results,
    };

    return final;
  }

  renderBanner(params) {
    return axios.get("https://image.tmdb.org/t/p/original/" + params);
  }
}

export default Movies;
