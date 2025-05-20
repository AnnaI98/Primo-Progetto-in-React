import React from "react";

function Card(props) {
  return (
    <div className="col">
      <div className="Card" style={{ width: '18rem', textAlign: 'center', borderRadius: '23px' }}>
        <button
          onClick={() => props.onBuy(props.card)}
          className="btn w-100 mb-2"
          style={{
            backgroundColor: '#ADFF2F', 
            color: 'black', 
            border: 'none', 
          }}
        >
          Acquista <span className="badge badge-light">{props.card.Totale}</span>
        </button>
        <img src={props.card.immagine} className="card-img-top" alt={props.card.nome} style={{ borderRadius: '23px' }} />
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
