import React, { useState, useEffect } from "react"

export default function App()
{
    const [valor, setValor] = useState( () => {
        return 100
    })

    const [valor2, setValor2] = useState( () => {
        return 1000
    })

    function alterar ()
    {
        setValor(a => {
            return a + 10
        })
    }

    function alterar2 ()
    {
        setValor2(a => {
            return a + 100
        })
    }

    useEffect(() => {
        console.log('Alterado')
    }, [valor])

    return (
        <>
            <h1>React Hooks - useEffect</h1>
            <h3>Valor: {valor}</h3>
            <button onClick={alterar}>Alterar</button>
            <h3>Valor2: {valor2}</h3>
            <button onClick={alterar2}>Alterar</button>
        </>
    )
}