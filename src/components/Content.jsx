import Row from "./Row";
import { movies, movies2 } from "./data";

const Content = () => {
  return (
    <div>
      <div className="content">
        <Row titel="Trending Now" posters={movies} />
        <Row titel="Top picks for you" posters={movies2} />
      </div>
    </div>
  );
};

export default Content;
