import React, { Component } from 'react';
import './App.css';

class Route02 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
    fetch('/scripts')
      .then(response => response.text())
      .then(data => console.log(data));
  }

  render() {
    return (
      <header className="App-header">
        <h1>Scripts Page</h1>
        <button onClick={this.handleClick}>Get all scripts</button>
      </header>
    );
  }

}

export default Route02;
