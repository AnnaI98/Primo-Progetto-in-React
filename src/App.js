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
      {id: 0, nome:"The weeknd", prezzo: 202.99, immagine:Theweeknd },
      {id: 1, nome:"Ne-yo", prezzo: 150.99, immagine:Neyo },
      {id: 2, nome:"Lady Gaga", prezzo: 450.99, immagine:LadyGaga },
      {id: 3, nome:"Jennifer Lopez", prezzo: 202.99, immagine:JL },
      {id: 4, nome:"Rihanna", prezzo: 150.99, immagine:Rihanna },
      {id: 5, nome:"Depache mode", prezzo: 450.99, immagine:Depachemode},

  ]

  }
  render(){
  return (
    <>
 <Navbar />
 <div className="container">
<h1>Concerti disponibili</h1>
<hr />

<div className="row">
  {this.state.cards.map(card => (
    <Card
      key={card.id}
      nome={card.nome}
      prezzo={card.prezzo}
      immagine={card.immagine}
    />
  ))}
</div>
 </div>
</>
  );
}
}
export default App;
