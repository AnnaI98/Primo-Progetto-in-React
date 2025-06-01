import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./components/HomePage";
import TicketSelector from "./components/TicketSelector";
import PaymentForm from "./components/PaymentForm";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Musei from "./components/Musei";

import Theweeknd from "./images/TheWeeknd.jpg";
import Neyo from "./images/Neyo.jpg";
import LadyGaga from "./images/Ledygaga.jpg";
import JL from "./images/JL.jpg";
import Rihanna from "./images/Rihanna.jpeg";
import Depachemode from "./images/DepacheMode.jpg";

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: "The Weeknd", prezzo: 202.99, immagine: Theweeknd, Totale: 0, Descrizione: "Preparati a vivere una serata indimenticabile con The Weeknd, uno degli artisti più iconici e innovativi del panorama musicale contemporaneo. Con la sua voce magnetica e uno stile che fonde R&B, pop e elettronica, The Weeknd porta sul palco un mix esplosivo di hit internazionali e atmosfere coinvolgenti. Aspettati uno show ricco di luci spettacolari, coreografie impeccabili e un’energia contagiosa, capace di trasformare ogni canzone in un viaggio emozionale. Un evento imperdibile per tutti i fan e gli amanti della buona musica!"},
      { id: 1, nome: "Ne-yo", prezzo: 150.99, immagine: Neyo, Totale: 0, Descrizione:"Preparati a una serata all’insegna del groove e dell’eleganza con Ne-Yo, uno dei più grandi cantautori e performer dell’R&B contemporaneo. Con la sua voce calda e raffinata, Ne-Yo porta sul palco un repertorio ricco di successi intramontabili, melodie coinvolgenti e testi che parlano d’amore e passione. Un concerto carico di energia, stile e talento, dove il pubblico sarà accompagnato in un viaggio emozionale tra ritmo, soul e sensazioni uniche. Un evento da non perdere per chi ama la musica autentica e i grandi live show."},
      { id: 2, nome: "Lady Gaga", prezzo: 450.99, immagine: LadyGaga, Totale: 0, Descrizione:"Preparati a un’esperienza straordinaria con Lady Gaga, icona globale e pioniera dell’arte pop. Sul palco, Gaga unisce potenza vocale, performance teatrali e uno stile unico, regalando uno show che va ben oltre la musica. Con un mix di hit travolgenti, coreografie spettacolari e scenografie mozzafiato, ogni suo concerto è un viaggio sensoriale fatto di emozioni, creatività e messaggi potenti. Un evento imperdibile per chi vuole vivere la magia di una vera superstar in azione."},
      { id: 3, nome: "Jennifer Lopez", prezzo: 202.99, immagine: JL, Totale: 0,  Descrizione:"Preparati a una serata spettacolare con Jennifer Lopez, una delle artiste più complete e iconiche del panorama musicale internazionale. Con la sua voce potente, le coreografie mozzafiato e un carisma travolgente, J.Lo porta sul palco un mix di hit indimenticabili che attraversano generi come pop, R&B e latin. Uno show pieno di energia, stile e passione, capace di coinvolgere il pubblico dall’inizio alla fine. Un evento imperdibile per chi ama la musica, il ballo e il fascino di una vera star globale."},
      { id: 4, nome: "Rihanna", prezzo: 150.99, immagine: Rihanna, Totale: 0, Descrizione:"Preparati a un’esperienza musicale indimenticabile con Rihanna, una delle icone più influenti e versatili della musica contemporanea. Con la sua voce inconfondibile e uno stile che spazia dal pop al R&B, dal reggae all’elettronica, Rihanna porta sul palco un mix esplosivo di hit internazionali e performance cariche di energia e sensualità. Uno show spettacolare, ricco di luci, coreografie e un’atmosfera coinvolgente, che trasforma ogni concerto in un momento magico e irripetibile. Un evento imperdibile per tutti i fan e gli amanti della grande musica!"},
      { id: 5, nome: "Depeche Mode", prezzo: 450.99, immagine: Depachemode, Totale: 0, Descrizione:"Preparati a immergerti nell’atmosfera oscura e avvolgente dei Depeche Mode, pionieri della musica elettronica e synth-pop. Con la loro combinazione inconfondibile di testi profondi, sonorità elettroniche e melodie memorabili, i Depeche Mode regalano uno spettacolo intenso e carico di emozioni. Un concerto che attraversa decenni di successi, da classici intramontabili a nuove produzioni, avvolto in un’atmosfera suggestiva fatta di luci, suoni e vibrazioni profonde. Un evento imperdibile per chi ama la musica d’autore e le esperienze live coinvolgenti."},
    ],
    showConcerts: false,
  };

  HandleDelete = (cardId) => {
    const updateCards = this.state.cards.map((card) => {
      if (card.id === cardId) {
        return { ...card, Totale: 0 };
      }
      return card;
    });
    this.setState({ cards: updateCards });
  };

  handleIncrement = (card) => {
    const updateCards = [...this.state.cards];
    const id = updateCards.indexOf(card);
    updateCards[id] = { ...updateCards[id] };
    updateCards[id].Totale++;
    this.setState({ cards: updateCards });
  };

  toggleConcerts = () => {
    this.setState({ showConcerts: true });
  };

  render() {
    return (
      <>
        <Navbar toggleConcerts={this.toggleConcerts} />

        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Homepage />} />

          
          <Route
            path="/concerti"
            element={
              this.state.showConcerts ? (
                <div className="container">
                  <h1 className="text-center mt-5 mb-5">Concerti disponibili</h1>
                  <hr />
                  <div className="row">
                    {this.state.cards.map((card) => (
                      <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={card.id}>
                        <Card onDelete={this.HandleDelete} onBuy={this.handleIncrement} card={card} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="container mt-5">
                  <h3 className="text-center text-muted">
                    Nessun concerto da mostrare. Clicca su "Concerti" dal menu.
                  </h3>
                </div>
              )
            }
          />

         
          <Route path="/eventi/musei" element={<Musei />} />

          <Route
            path="/ticket/:id"
            element={<TicketSelector cards={this.state.cards} onBuy={this.handleIncrement} onDelete={this.HandleDelete} />}
          />

          
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </>
    );
  }
}

export default App;
