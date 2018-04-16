import React, { Component } from 'react';
import './App.css';
import Nav from "./components/nav";
import Card from "./components/Card";
import cards from "./cards.json";
// import Game from "./components/game";
import Wrapper from "./components/wrapper";

class App extends Component {

  state = {
    cards,
    guessedCards: cards,
    currentScore: 0,
    highScore: 0
  };

  cardClick = id => {
    const clickedCards = this.state.guessedCards.filter(card => card.id !== id);
    this.setState({guessedCards: clickedCards});
    console.log(clickedCards);
  };


  render() {
    return (

      <Wrapper>
        <Nav />

        {this.state.cards.map(card => (
          <Card
            cardClick={this.cardClick}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}

      </Wrapper>

    );
  }
}

export default App;
