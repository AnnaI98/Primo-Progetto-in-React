import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PaymentForm() {
  const location = useLocation();
  const navigate = useNavigate();

  const { card, quantità } = location.state || {};

  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  if (!card) {
    return (
      <div
        style={{
          maxWidth: "600px",
          margin: "50px auto",
          padding: "30px",
          borderRadius: "20px",
          backgroundColor: "#1f2937", 
          color: "#e0e7ff",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          textAlign: "center",
        }}
      >
        <h2>Dati mancanti per il pagamento</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(37, 99, 235, 0.7)",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
        >
          Torna alla Home
        </button>
      </div>
    );
  }

  const totale = (card.prezzo * quantità).toFixed(2);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "creditCard") {
      alert(
        `Pagamento di €${totale} per ${quantità} biglietti a ${card.nome} effettuato con successo!\n` +
          `Email: ${email}\nCarta: **** **** **** ${cardNumber.slice(-4)}`
      );
      navigate("/");
    }
  };

  const handleThirdPartyPayment = () => {
    alert(
      `Pagamento di €${totale} per ${quantità} biglietti a ${card.nome} effettuato con successo tramite ${
        paymentMethod === "paypal" ? "PayPal" : "Klarna"
      }!`
    );
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto 50px auto",
        borderRadius: "20px",
        padding: "30px",
        backgroundColor: "#1f2937", 
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
        color: "#e0e7ff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
    
      <div
        style={{
          borderRadius: "15px",
          padding: "20px",
          backgroundColor: "#111827",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(37, 99, 235, 0.7)",
          marginBottom: "30px",
        }}
      >
        <img
          src={card.immagine}
          alt={card.nome}
          style={{
            width: "100%",
            borderRadius: "15px",
            objectFit: "cover",
            height: "220px",
            marginBottom: "15px",
            boxShadow: "0 6px 20px rgba(37, 99, 235, 0.6)",
          }}
        />
        <h3 style={{ marginBottom: "10px" }}>{card.nome}</h3>
        <p style={{ color: "#a5b4fc", marginBottom: "10px" }}>
          {card.descrizione}
        </p>
        <p style={{ fontWeight: "700", fontSize: "1.25rem", marginBottom: "5px", color: "#60a5fa" }}>
          Prezzo unitario: €{card.prezzo}
        </p>
        <p style={{ fontWeight: "600", fontSize: "1.1rem", marginBottom: "0" }}>
          Numero biglietti: {quantità}
        </p>
        <hr style={{ borderColor: "#2563eb", marginTop: "20px", marginBottom: "20px" }} />
        <p
          style={{
            fontWeight: "900",
            fontSize: "1.75rem",
            color: "transparent",
            backgroundImage: "linear-gradient(90deg, #3b82f6, #2563eb)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          Totale: €{totale}
        </p>
      </div>

      {/* Form di pagamento */}
      <form onSubmit={handlePaymentSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 15px",
            marginBottom: "25px",
            borderRadius: "12px",
            border: "none",
            outline: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            boxShadow: "0 0 10px #3b82f6",
            backgroundColor: "#111827",
            color: "#c7d2fe",
          }}
        />

        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 15px",
            marginBottom: "25px",
            borderRadius: "12px",
            border: "none",
            fontSize: "1.1rem",
            fontWeight: "600",
            boxShadow: "0 0 10px #3b82f6",
            backgroundColor: "#111827",
            color: "#c7d2fe",
            appearance: "none",
            cursor: "pointer",
          }}
        >
          <option value="creditCard" style={{ color: "#111827" }}>
            Carta di credito
          </option>
          <option value="paypal" style={{ color: "#111827" }}>
            PayPal
          </option>
          <option value="klarna" style={{ color: "#111827" }}>
            Klarna
          </option>
        </select>

        {paymentMethod === "creditCard" && (
          <>
            <input
              type="text"
              maxLength="19"
              placeholder="Numero carta"
              required
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              pattern="\d{13,19}"
              title="Inserisci un numero di carta valido"
              style={{
                width: "100%",
                padding: "14px 15px",
                marginBottom: "20px",
                borderRadius: "12px",
                border: "none",
                fontSize: "1.1rem",
                fontWeight: "600",
                boxShadow: "0 0 10px #3b82f6",
                backgroundColor: "#111827",
                color: "#c7d2fe",
                outline: "none",
              }}
            />

            <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
              <input
                type="text"
                maxLength="4"
                placeholder="CVV"
                required
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                pattern="\d{3,4}"
                title="Inserisci il codice CVV"
                style={{
                  flex: "1",
                  padding: "14px 15px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  boxShadow: "0 0 10px #3b82f6",
                  backgroundColor: "#111827",
                  color: "#c7d2fe",
                  outline: "none",
                }}
              />
              <input
                type="text"
                maxLength="5"
                placeholder="MM/AA"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                title="Formato scadenza MM/AA"
                style={{
                  flex: "1",
                  padding: "14px 15px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  boxShadow: "0 0 10px #3b82f6",
                  backgroundColor: "#111827",
                  color: "#c7d2fe",
                  outline: "none",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              Paga ora
            </button>
          </>
        )}

        {(paymentMethod === "paypal" || paymentMethod === "klarna") && (
          <button
            type="button"
            onClick={handleThirdPartyPayment}
            style={{
              width: "100%",
              padding: "16px 0",
              backgroundColor: "#2563eb",
              border: "none",
              borderRadius: "14px",
              color: "#fff",
              fontWeight: "700",
              fontSize: "1.3rem",
              cursor: "pointer",
              boxShadow: "0 6px 15px rgba(37, 99, 235, 0.7)",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b82f6")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#2563eb")
            }
          >
            Paga con {paymentMethod === "paypal" ? "PayPal" : "Klarna"}
          </button>
        )}
      </form>
    </div>
  );
}

export default PaymentForm;


