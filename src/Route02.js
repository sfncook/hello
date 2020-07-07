import React, { Component } from 'react';
import './App.css';

let countScript = 5;
class Route02 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
  }

  handleClick() {
    fetch('/scripts')
      .then(response => response.text())
      .then(data => console.log(data));
  }

  handleClickNew() {
    fetch('/scripts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:`newscript${countScript++}`
      }) // body data type must match "Content-Type" header
    })
        .then(response => response.text())
        .then(data => console.log(data));
  }

  render() {
    return (
      <header className="App-header">
        <h1>Scripts Page</h1>
        <button onClick={this.handleClick}>Get all scripts</button>
        <button onClick={this.handleClickNew}>Create new Script</button>
      </header>
    );
  }

}

export default Route02;
