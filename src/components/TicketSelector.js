import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TicketSelector({ cards, onBuy, onDelete }) {
  const { id } = useParams();
  const card = cards.find((c) => c.id === parseInt(id));
  const [quantità, setQuantità] = useState(1);
  const navigate = useNavigate();

  if (!card) return <p>Concerto non trovato.</p>;

  const handleAcquista = () => {
    navigate("/payment", { state: { card, quantità } });
  };

  const handleAnnulla = () => {
    onDelete(card.id);
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "50px auto",
        padding: "30px",
        borderRadius: "20px",
        backgroundColor: "#1f2937", // grigio scuro
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#e0e7ff", // azzurro chiaro
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "25px", fontWeight: "700" }}>
        Biglietti per {card.nome}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <img
          src={card.immagine}
          alt={card.nome}
          style={{
            width: "320px",
            borderRadius: "20px",
            boxShadow: "0 15px 40px rgba(14, 165, 233, 0.7)", // azzurro ombra
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        <div style={{ flex: "1 1 300px" }}>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "1.1rem",
              marginBottom: "25px",
              lineHeight: "1.5",
              color: "#a5b4fc", 
            }}
          >
            {card.Descrizione}
          </p>

          <p
            style={{
              fontWeight: "700",
              fontSize: "1.6rem",
              marginBottom: "25px",
              color: "#60a5fa", 
            }}
          >
            Prezzo unitario:{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #3b82f6, #2563eb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "900",
              }}
            >
              €{card.prezzo.toFixed(2)}
            </span>
          </p>

          <label
            htmlFor="quantita"
            style={{ fontWeight: "600", fontSize: "1.1rem" }}
          >
            Numero di biglietti:
          </label>
          <input
            id="quantita"
            type="number"
            min="1"
            max="10"
            value={quantità}
            onChange={(e) => setQuantità(parseInt(e.target.value) || 1)}
            style={{
              width: "100%",
              padding: "12px 15px",
              marginTop: "8px",
              marginBottom: "35px",
              borderRadius: "12px",
              border: "none",
              fontSize: "1.2rem",
              fontWeight: "600",
              textAlign: "center",
              outline: "none",
              boxShadow: "0 0 10px #3b82f6",
              backgroundColor: "#111827", 
              color: "#c7d2fe",
            }}
          />

          <div style={{ display: "flex", gap: "20px" }}>
            <button
              onClick={handleAcquista}
              style={{
                flex: 1,
                padding: "16px 0",
                background:
                  "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
                border: "none",
                borderRadius: "14px",
                color: "#fff",
                fontWeight: "700",
                fontSize: "1.3rem",
                cursor: "pointer",
                boxShadow: "0 6px 15px rgba(37, 99, 235, 0.7)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Acquista
            </button>

            <button
              onClick={handleAnnulla}
              style={{
                flex: 1,
                padding: "16px 0",
                backgroundColor: "transparent",
                border: "2px solid #60a5fa",
                borderRadius: "14px",
                color: "#60a5fa",
                fontWeight: "700",
                fontSize: "1.3rem",
                cursor: "pointer",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#60a5fa";
                e.currentTarget.style.color = "#1e293b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#60a5fa";
              }}
            >
              Annulla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketSelector;


