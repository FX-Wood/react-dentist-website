import React from 'react';

export default function ProcedureShow(props) {
    console.log(props)
    let proc = props.tx.find(s => s.id == props.match.params.id)
    console.log(proc)
    return (
        <>
        <h1>{proc.proc}</h1>
        <p>This hurts a lot</p>
        <p>{JSON.stringify(proc, '\n', 2)}</p>
        </>
    )
} 