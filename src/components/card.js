import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="col d-flex justify-content-center mb-4">
      <div
        className="card shadow-sm"
        style={{
          width: '18rem',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
          backgroundColor: '#ffffff',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-10px)';
          e.currentTarget.style.boxShadow = '0 12px 24px rgba(30, 144, 255, 0.4)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
        }}
      >
        <img
          src={props.card.immagine}
          alt={props.card.nome}
          style={{
            borderRadius: '20px 20px 0 0',
            height: '180px',
            objectFit: 'cover',
            boxShadow: 'inset 0 0 40px rgba(30,144,255,0.15)',
          }}
        />
        <div
          className="card-body d-flex flex-column"
          style={{ flexGrow: 1, padding: '1.25rem' }}
        >
          <h5
            className="card-title"
            style={{
              flexShrink: 0,
              fontWeight: '700',
              color: '#1e90ff',
              marginBottom: '0.5rem',
              textShadow: '0 1px 2px rgba(30,144,255,0.3)',
            }}
          >
            {props.card.nome}
          </h5>
          <p
            className="card-text"
            style={{
              flexShrink: 0,
              fontWeight: '600',
              fontSize: '1.15rem',
              color: '#333',
              marginBottom: 'auto',
            }}
          >
            €{props.card.prezzo.toFixed(2)}
          </p>
          <div style={{ flexGrow: 1 }}></div>
          <Link
            to={`/ticket/${props.card.id}`}
            className="btn"
            style={{
              backgroundColor: '#1e90ff',
              color: 'white',
              borderRadius: '12px',
              padding: '12px 0',
              fontWeight: '700',
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(30,144,255,0.35)',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1e90ff')}
          >
            Seleziona
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;



