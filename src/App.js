import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form/Form";
import Modal from "./Components/Modal/Modal";
import DataResult from "./Components/DataResult/DataResult";

export default function App() {
  const [newInfo, setNewInfo] = useState([]);
  const [newID, setNewID] = useState(1)
  const [viewData, setViewData] = useState(false)
  const [infoModal, setInfoModal ] = useState({
    firstModal: '',
    lastModal: '',
    dateModal: ''
  })

  const handleInputChange = (firstValue, lastValue, date) => {
    setNewID(newID + 1)
    setNewInfo([
      ...newInfo,
      {
        first: firstValue,
        last: lastValue,
        dateCreated: date,
        id: newID
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
      lastModal: info.last,
      dateModal: info.dateCreated
    })
  }

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString()
  }

  const handleSortEarliest = () => {
    const sortedList = newInfo.sort((a,b) => {
      return a.id - b.id
    })
    setNewInfo([...sortedList])
  }

  const handleSortLatest = () => {
    const sortedList = newInfo.sort((a,b) => {
      return b.id - a.id
    })
    setNewInfo([...sortedList])
  }

  return (
    <div className="App">
      <Form onInputChange={handleInputChange} getCurrentTime={getCurrentTime}/>
      <DataResult sort={
        <div className="order">
          <p>Ordenar por:</p>
          <div className="order-buttons">
            <button className="sort-button" onClick={handleSortEarliest}>Antigo</button> <button className="sort-button" onClick={handleSortLatest}>Novo</button>
          </div>
        </div>}
      >
        {newInfo.map((info, index) => (
          <div style={{border: '1px solid #000', marginBottom: '10px'}} key={info.id}>
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
      <Modal first={infoModal.firstModal} last={infoModal.lastModal} date={infoModal.dateModal}/>
    </div>
  );
}
