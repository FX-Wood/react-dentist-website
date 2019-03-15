import React, { Component } from 'react';

export default function Procedures(props) {
    return (
        <div className="procedures">
        <h1>Things we do that hurt</h1>
            <ul>
                {props.tx.map( (name, i) => <li key={i}>{name}</li> )}
            </ul>
        </div>
    )
}