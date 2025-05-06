import React, {Component} from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
import Theweeknd from "./images/TheWeeknd.jpg";
import Neyo from "./images/Neyo.jpg";
import LadyGaga from "./images/Ledygaga.jpg";
import JL from "./images/JL.jpg";
import Rihanna from "./images/Rihanna.jpeg";
import Depachemode from "./images/DepacheMode.jpg";


class App extends Component {
  state = { 
    cards:[
      {id: 0, nome:"The weeknd", prezzo: 202.99, immagine:Theweeknd, Totale: 0 },
      {id: 1, nome:"Ne-yo", prezzo: 150.99, immagine:Neyo, Totale: 0 },
      {id: 2, nome:"Lady Gaga", prezzo: 450.99, immagine:LadyGaga, Totale: 0 },
      {id: 3, nome:"Jennifer Lopez", prezzo: 202.99, immagine:JL, Totale: 0 },
      {id: 4, nome:"Rihanna", prezzo: 150.99, immagine:Rihanna, Totale: 0 },
      {id: 5, nome:"Depache mode", prezzo: 450.99, immagine:Depachemode, Totale: 0 }
    ]
  }
  HandleDelete = cardId =>{
  const updateCards = this.state.cards.filter(card => card.id !== cardId);
  this.setState({ cards: updateCards });
}

handleIncrement = (card) => {
  const updateCards = [...this.state.cards];
  const id = updateCards.indexOf(card);
    updateCards[id] = { ...updateCards[id] }; 
    updateCards[id].Totale++;
    this.setState({ cards: updateCards });
  }

  render(){
  return (
    <>
 <Navbar />
 <div className="container">
<h1 className="text-center mt-5 mb-5">Concerti disponibili</h1>
<hr />

<div className="row">
  {this.state.cards.map(card => (
     <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={card.id}>
    <Card
      
      onDelete={this.HandleDelete}
      onBuy={this.handleIncrement}
      card= {card}
    />
    </div>
  ))}
</div>
 </div>
</>
  );
}
}
export default App;
