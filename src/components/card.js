import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="Card" style={{ width: '18rem', textAlign: 'center' }}>
      <button onClick={() => props.onIncrement(props.card)} className="btn btn-outline-primary w-100">Acquista
      <span className='badge badge-light'>{props.card.Totale}</span></button>
        <img src={props.card.immagine} className="card-img-top" alt={props.card.nome} />
        <div className="card-body">
          <h5 className="card-title">{props.card.nome}</h5>
          <p className="card-text">€{props.card.prezzo}</p>
          <button onClick={() => props.onDelete(props.card.id)} className="btn btn-outline-danger w-100">Cancella</button>
        </div>
      </div>
    </div>
  );
}

export default Card;