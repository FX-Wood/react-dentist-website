import React from 'react';
import { Link as A } from 'react-router-dom';

export default function Procedures(props) {
    return (
        <div className="procedures">
        <h1>Things we do that hurt</h1>
            <ul>
                {props.tx.map( name => <li key={name.id}><A to={'/procedures/' + name.id}>{name.proc}</A></li> )}
            </ul>
        </div>
    )
}