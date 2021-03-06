const { REACT_APP_API_KEY: API_KEY} = process.env

const requests = {
   fetchNetflixOriginals: `movie/upcoming?api_key=${API_KEY}&language=en-US`,
   fetchTrending: `/movie/popular?api_key=${API_KEY}&language=en-US`,
   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
   
}


export default requests;