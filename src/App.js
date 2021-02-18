import React, { Component } from 'react';
import Receipt from "./Receipt";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      receipt1: this.props.receipts[0],
      receipt2: this.props.receipts[1],
      receipt3: this.props.receipts[2]
    };
  };


  render () {
    return (
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
        <Receipt receipt={this.state.receipt1}/>
        <Receipt receipt={this.state.receipt2}/>
        <Receipt receipt={this.state.receipt3}/>
      </div>
    )
  }
}

export default App;
