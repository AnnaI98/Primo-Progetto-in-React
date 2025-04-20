import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="Card" style={{ width: '18rem', textAlign: 'center' }}>
        <img src={props.immagine} className="card-img-top" alt={props.nome} />
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text">€{props.prezzo}</p>
          <button className="btn btn-outline-primary">Acquista</button>
        </div>
      </div>
    </div>
  );
}

export default Card;