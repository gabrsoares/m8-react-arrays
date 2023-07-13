import React, { useState } from "react";
import './App.css';
import Form from "./Components/Form/Form";
import Modal from "./Components/Modal/Modal";
import DataResult from "./Components/DataResult/DataResult";

export default function App() {
  const [newProduct, setNewProduct] = useState([]);
  const [storedFirstValue, setStoredFirstValue] = useState('')
  const [storedLastValue, setStoredLastValue] = useState('')

  const handleInsert = () => {
    setNewProduct([
      ...newProduct,
      {
        name: "a",
        date: new Date()
      }
    ]);
  };

  const handleInputChange = (firstValue, lastValue) => {
    setStoredFirstValue(firstValue)
    setStoredLastValue(lastValue)
  }

  const handleDelete = (index) => {
    const updatedProducts = [...newProduct];
    updatedProducts.splice(index, 1);
    setNewProduct(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Valor armazenado: {storedFirstValue}</h1>
      <h1>Valor armazenado: {storedLastValue}</h1>
      <Form onInputChange={handleInputChange}/>
      {newProduct.map((product, index) => (
        <div key={index}>
          <p style={{ display: "inline-block", marginRight: 10 }}>
            {product.name}
          </p>
          <p style={{ display: "inline-block" }}>
            Gerado em: {product.date.toLocaleTimeString()}{" "}
          </p>
          <button onClick={() => handleDelete(index)} style={{ display: "inline-block" }}>
            Delete
          </button>
        </div>
      ))}
      <button onClick={handleInsert}>Click-me</button>
    </div>
  );
}
