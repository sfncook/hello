import React, { Component } from 'react';
import './App.css';

class Route01 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
    fetch('/jobs')
      .then(response => response.text())
      .then(data => console.log(data));
  }

  render() {
    return (
      <header className="App-header">
        <h1>Jobs Page</h1>
        <button onClick={this.handleClick}>Get all jobs</button>
      </header>
    );
  }

}

export default Route01;
