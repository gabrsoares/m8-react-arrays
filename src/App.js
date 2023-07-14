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

    console.log(info.first, info.last)
  }

  return (
    <div className="App">
      <Form onInputChange={handleInputChange}/>
      <DataResult>
        {newInfo.map((info, index) => (
          <div key={index}>
            
            <p style={{ display: "inline-block", marginRight: 10 }}>
              {info.first}:
            </p>
            <p style={{ display: "inline-block" }}>
              {info.last}
            </p>
            <button onClick={() => handleDelete(index)} style={{ display: "inline-block" }}>
              Delete
            </button>
            <button onClick={() => handleOpenModal(info)}>Ver detalhes</button>
          </div>
        ))}
      </DataResult>
      <Modal first={infoModal.firstModal} last={infoModal.lastModal}/>
    </div>
  );
}
