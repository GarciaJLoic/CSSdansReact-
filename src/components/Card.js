import imgCard from "../assets/index.jpeg";

function Card() {
  return (
    <div className="cardBlock">
      <div className="card">
        <div className="headerCard">
          <img src={imgCard} alt="illustration done" />
          <div className="textCard">
            <h1>Rozes</h1>
            <h2>Under the Grave</h2>
            <p>(2016)</p>
          </div>
        </div>
        <div className="rateCard">
          <p>Rate this album </p>
          <p>★ ★ ★ ★ ★</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
