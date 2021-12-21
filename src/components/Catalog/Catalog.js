import "./row.css";

function Catalog({ movies, title, base_url }) {
  const isLargeRow = true;

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* container > posters */}

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => console.log("foo")}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
