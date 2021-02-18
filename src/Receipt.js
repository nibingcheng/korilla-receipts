import React, { Component } from 'react';
import "./Receipt.css"

class Receipt extends Component {
    constructor(props) {
        super(props);
        
        this.state = this.props.receipt;
    };

    render () {
        console.log(this.state.person, this.state.paid, this.state.order);
        return (
            <div>
            <h3 className="receipt">{this.state.person}</h3>
        
            </div>
        )
    }  

}

export default Receipt;