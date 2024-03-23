import "../sass/parallax.scss"

const Parallax = ({ type }) => {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <h1>{type === "services" ? "What I do" : "What I did"}</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="starts"></div>
    </div>
  );
};

export default Parallax;