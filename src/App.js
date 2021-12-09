import react from 'react';
import './App.css';
import Row from './row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      
    </div>
  );
}

export default App;
