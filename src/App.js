import React, { Component } from 'react';
import './App.css';

class App_ extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');

    fetch('http://ec2-52-53-124-18.us-west-1.compute.amazonaws.com:3000')
      .then(response => response.text())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>Send</button>
        </header>
      </div>
    );
  }

}

export default App_;
