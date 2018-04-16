import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/wrapper";
import Nav from "./components/Nav";
import Header from "./components/header";
import Game from "./components/game";
import Card from "./components/Card";
import cards from "./cards.json";
// import Footer from "./components/footer";

class App extends Component {

  state = {
    cards,
    guessedCards: cards,
    currentScore: 0,
    highScore: 0,
    note: "WOW. so game. much fun. don't click the same photo twice or you lose."
  };

  // sort cards in random order
  sortCards = () => {
    cards.sort(function (a, b) { return 0.5 - Math.random() });
  };

  // handle card click
  cardClick = id => {
    console.log(this.state.cards);
    console.log(this.state.guessedCards);
    // see if id of clicked card is in the guessedCards array
    const clickedCards = this.state.guessedCards.find(card => card.id === id);

    // if clicked cards array is undefined, wrong guess. Reset state variables. Determine high score.
    if (clickedCards === undefined) {
      this.setState({
        guessedCards: cards,
        highScore: (this.state.currentScore > this.state.highScore) ? this.state.currentScore : this.state.highScore,
        currentScore: 0,
        note: "nope. click a photo to start over."
      })
      // else, correct guess. Set guessedCards array to new filterd list
    } else {
      const newCardsList = this.state.guessedCards.filter(card => card.id !== id);

      this.setState({
        guessedCards: newCardsList,
        currentScore: this.state.currentScore + 1,
        note: "WOW. good guess."
      })
    }
    this.sortCards();
  };

  render() {
    return (
      <Wrapper>
        <Nav
          currentScore={this.state.currentScore}
          highScore={this.state.highScore}
        />
        <Header
          note={this.state.note}
        />
        <Game>
          {this.state.cards.map(card => (
            <Card
              cardClick={this.cardClick}
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Game>
        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default App;