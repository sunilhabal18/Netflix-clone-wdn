import Posters from "./Posters";

const Row = ({ titel, posters }) => {
  return (
    <div>
      <div className="row">
        <h2>{titel}</h2>
        <Posters posters={posters} />
      </div>
    </div>
  );
};

export default Row;
