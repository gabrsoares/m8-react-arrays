import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form/Form";
import Modal from "./Components/Modal/Modal";
import DataResult from "./Components/DataResult/DataResult";

export default function App() {
  const [newInfo, setNewInfo] = useState([]);
  const [viewData, setViewData] = useState(false)
  const [infoModal, setInfoModal ] = useState({
    firstModal: '',
    lastModal: ''
  })

  const handleInputChange = (firstValue, lastValue) => {
    setNewInfo([
      ...newInfo,
      {
        first: firstValue,
        last: lastValue
      }
    ]);
    setViewData(true)
  }

  const handleDelete = (index) => {
    const updatedInfos = [...newInfo];
    updatedInfos.splice(index, 1);
    setNewInfo(updatedInfos);
  };

  const handleOpenModal = (info) => {
    const idModal = document.getElementById('modal')
    idModal.style.display = 'flex'

    setInfoModal({
      firstModal: info.first,
      lastModal: info.last
    })
  }

  return (
    <div className="App">
      <Form onInputChange={handleInputChange}/>
      <DataResult>
        {newInfo.map((info, index) => (
          <div style={{border: '1px solid #000', marginBottom: '10px'}} key={index}>
            <div className="content">
              <p className="dataInfo" style={{ display: "inline-block", marginRight: 10 }}>
                {info.first}:
              </p>
              <p className="dataInfo" style={{ display: "inline-block" }}>
                {info.last}
              </p>
            </div>
            <div className="buttons">
              <button id="button-details" onClick={() => handleOpenModal(info)}>Ver detalhes</button>
              <button id="button-delete" onClick={() => handleDelete(index)} style={{ display: "inline-block" }}>
                Delete
              </button>
            </div>
            
            
          </div>
        ))}
      </DataResult>
      <Modal first={infoModal.firstModal} last={infoModal.lastModal}/>
    </div>
  );
}
