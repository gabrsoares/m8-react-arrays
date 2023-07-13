import React, { useState } from 'react'
import './Form.css'

const Form = ({onInputChange}) => {
    const [firstInput, setFirstInput] = useState('')
    const [lastInput, setLastInput] = useState('')

    const handleInputChange = (event) => {
        const {id, value} = event.target
        id === 'first'? setFirstInput(value) : setLastInput(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onInputChange(firstInput, lastInput)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form" >
                <input type="text" id='first' value={firstInput} onChange={handleInputChange}/>
                <input type="text" id='last' value={lastInput} onChange={handleInputChange}/>
            </div>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form
