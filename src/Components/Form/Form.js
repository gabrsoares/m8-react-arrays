import React, { useState } from 'react'
import './Form.css'

const Form = ({onInputChange}) => {
    const [firstInput, setFirstInput] = useState('')
    const [lastInput, setLastInput] = useState('')
    const [isEmpty, setIsEmpty] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (event) => {
        const {id, value} = event.target
        id === 'first'? setFirstInput(value) : setLastInput(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setIsSubmitted(true)

        if (firstInput !== '' && lastInput !== ''){
            onInputChange(firstInput, lastInput) //retorna a função do app.js para atualizar o estado do viewInfo
            setIsEmpty(false)
            setFirstInput('')
            setLastInput('')
        } else {
            setIsEmpty(true)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form" >
                <label htmlFor="first">Escolha o tipo de dado</label>
                <select id='first' value={firstInput} onChange={handleInputChange}>
                    <option value=""></option>
                    <option value="Nome">Nome</option>
                    <option value="Email">Email</option>
                    <option value="CPF">CPF</option>
                    <option value="Endereço">Endereço</option>
                </select>
                <label htmlFor="last">Insira a informação escolhida</label>
                <input type="text" id='last' value={lastInput} onChange={handleInputChange}/>
            </div>
            {isSubmitted && isEmpty? <p>Preencha todos os campos!</p> : ''}
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form
