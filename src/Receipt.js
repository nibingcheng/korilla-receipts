import React, { Component } from 'react';
import "./Receipt.css"

class Receipt extends Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.receipt;
    };

    render () {
        console.log(this.state.person, this.state.paid, this.state.order);
        if (this.state.paid === false) {
            return (
                <div className="receipt">
            <h3>{this.state.person}</h3>
            <h5>Main: {this.state.order.main}</h5>
            <h5>Protein: {this.state.order.protein}</h5>
            <h5>Rice: {this.state.order.rice}</h5>
            <h5>Sauce: {this.state.order.sauce}</h5>
            <h5>Drink: {this.state.order.drink}</h5>
            <h5>Cost: {this.state.order.cost}</h5>
            </div>
           )
        }
        else {
            return null
        }

    }  

}

export default Receipt;