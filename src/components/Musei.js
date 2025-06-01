
import MuseoEG from "../images/MuseoEG.jpg";
import MocoMuseum from "../images/MocoMuseum.jpg";
import MuseoCere from "../images/MuseoCere.jpg";

const museiData = [
  {
    id: 1,
    nome: "Museo Moco",
    indirizzo: "Honthorststraat 20, 1071 DE Amsterdam, Paesi Bassi",
    prezzo: "18€",
    orari: "09:00 - 20:00",
    immagine: MocoMuseum,
  },
  {
    id: 2,
    nome: "Museo Egizio",
    indirizzo: "Via Accademia delle Scienze, 6, 10123 Torino TO",
    prezzo: "19€",
    orari: "09:00 - 18:30",
    immagine: MuseoEG,
  },
  {
    id: 3,
    nome: "Museo Madame Tussauds",
    indirizzo: "Marylebone Rd, London NW1 5LR, Regno Unito",
    prezzo: "34,50€",
    orari: "10:00 - 17:00",
    immagine: MuseoCere,
  },
];

function Musei() {
  const handleSelect = (museo) => {
    alert(`Hai selezionato il museo: ${museo.nome}`);
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "900px" }}>
      <h2
        className="text-center mb-4 fw-bold"
        style={{ color: "#60a5fa", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}
      >
        Musei disponibili
      </h2>

      <div className="row">
        {museiData.map((museo) => (
          <div key={museo.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100"
              style={{
                backgroundColor: "#111827",
                color: "#c7d2fe",
                borderRadius: "20px",
                boxShadow: "0 15px 40px rgba(14, 165, 233, 0.7)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img
                src={museo.immagine}
                alt={museo.nome}
                className="card-img-top"
                style={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  boxShadow: "0 15px 40px rgba(14, 165, 233, 0.7)",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5
                  className="card-title"
                  style={{ color: "#60a5fa", fontWeight: "700" }}
                >
                  {museo.nome}
                </h5>
                <p>
                  <strong>Indirizzo:</strong> {museo.indirizzo}
                </p>
                <p>
                  <strong>Prezzo:</strong>{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "900",
                    }}
                  >
                    {museo.prezzo}
                  </span>
                </p>
                <p>
                  <strong>Orari:</strong> {museo.orari}
                </p>
                <button
                  className="btn mt-auto"
                  onClick={() => handleSelect(museo)}
                  style={{
                    background:
                      "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                    border: "none",
                    borderRadius: "14px",
                    color: "#fff",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    cursor: "pointer",
                    boxShadow: "0 6px 15px rgba(37, 99, 235, 0.7)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Seleziona
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Musei;

