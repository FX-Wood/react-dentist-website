import React, { Component } from 'react';

export default class Procedures extends Component {
    render() {
        return (
            <div className="procedures">
            <h1>Things we do that hurt</h1>
                <ul>
                    {this.props.tx.map( (name, i) => <li key={i}>{name}</li> )}
                </ul>
            </div>
        )
    }
}