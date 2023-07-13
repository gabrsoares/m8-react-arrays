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
            onInputChange(firstInput, lastInput)
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
                <input type="text" id='first' value={firstInput} onChange={handleInputChange}/>
                <input type="text" id='last' value={lastInput} onChange={handleInputChange}/>
            </div>
            {isSubmitted && isEmpty? <p>Preencha todos os campos!</p> : ''}
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form
