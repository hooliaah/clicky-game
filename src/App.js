import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav";
import Card from "./components/Card";
import cards from "./cards.json";
import Game from "./components/game";

class App extends Component {

  state = {
    cards
  };

  render() {
    return (
     
      <Game>
        {this.state.cards.map(card => (
          <Card
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Game>
      
    );
  }
}

export default App;
