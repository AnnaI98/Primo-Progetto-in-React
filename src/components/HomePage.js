

import Sala from "../images/Sala.jpg";
import Biglietti from "../images/Biglietti.jpg";
import Museo from "../images/Museo.jpg";
import Concerto from "../images/Concerto.jpg";
import Mummia from "../images/Mummia.jpg";


const images = [Sala, Biglietti, Museo, Concerto, Mummia];

function Homepage() {
  return (
    <div className="container text-center mt-5" style={{ maxWidth: "90%" }}>
      <h1>Benvenuto su TicketVibes</h1>
      <p>Scopri concerti, festival, teatro e molto altro!</p>

      <div className="carousel-double-row">
        <div className="carousel-track">
          {[...images, ...images].map((src, i) => (
            <img
              key={"row1-" + i}
              src={src}
              alt={`img-${i}`}
              className="carousel-image"
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>

        <div className="carousel-track reverse">
          {[...images, ...images].map((src, i) => (
            <img
              key={"row2-" + i}
              src={src}
              alt={`img-${i}`}
              className="carousel-image"
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          ))}
        </div>
      </div>

      <style>{`
        .carousel-double-row {
          overflow: hidden;
          height: 540px; /* 2 righe da 260px + margini */
          position: relative;
          margin-top: 40px;
          user-select: none;
        }
        .carousel-track {
          display: flex;
          gap: 20px;
          animation: scrollLeft 20s linear infinite;
        }
        .carousel-track.reverse {
          animation-direction: reverse;
          margin-top: 20px;
        }
        .carousel-image {
          width: 380px;
          height: 260px;
          object-fit: cover;
          border-radius: 15px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (max-width: 768px) {
          .carousel-image {
            width: 280px;
            height: 190px;
          }
          .carousel-double-row {
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}

export default Homepage;




