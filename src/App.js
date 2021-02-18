import React, { Component } from 'react';
import Receipt from "./Receipt";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      receipts: this.props.receipts
      // receipt1: this.props.receipts[0],
      // receipt2: this.props.receipts[1],
      // receipt3: this.props.receipts[2]
    };
  };

  render () { 
    console.log(this.state.receipts.length);
    const allReceipt = this.state.receipts.map((receiptElement, index) => {
      return <Receipt receipt={receiptElement} key={index}/>
    });
    return ( 
      <div>
        <h1 className="truck-name">Korilla Receipts</h1>
        <div className="container">
          {/* <Receipt receipt={this.state.receipts[0]}/>
          <Receipt receipt={this.state.receipts[1]}/>
          <Receipt receipt={this.state.receipts[2]}/> */}
          {allReceipt}
        </div>
      </div>
    )
  }
}

export default App;
