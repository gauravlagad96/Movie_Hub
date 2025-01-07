import { Link } from "react-router-dom";


//const API_KEY = "c45a857c193f6302f2b5061c3b85e743";
// const BASE_URL = "https://api.themoviedb.org/3";
 const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const MovieCard = ({ movie }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-2 text-center">
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg mb-2"
          />
        </Link>
        <h3 className="text-sm font-bold truncate">{movie.title}</h3>
        <p className="text-gray-600 text-sm">Rating: {movie.vote_average}</p>
      </div>
    );
  };
export default MovieCard  