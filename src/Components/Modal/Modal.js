import React from "react";
import './Modal.css'

const Modal = (props) => {

    const handleClick = () => {
        document.getElementById('modal').style.display = 'none'
    }
    
    return(
        <div id='modal'>
            <div className="modal-body">
                <h2>Informações</h2>
                <p id="info-text">{props.first}:</p>
                <p id="info-answer">{props.last}</p>
                <p id="info-date">Criado em: {props.date}</p>
            </div>
            <div className="modal-button">
                <button id="open-modal" onClick={handleClick}>Fechar</button>
            </div>
        </div>
    )
}

export default Modal