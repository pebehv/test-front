import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = () => {
  const [inputs, setInputs] = useState([{ id: Date.now(), value: '' }]);

  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: '' }]);
  };

  const handleInputChange = (id, value) => {
    const updatedInputs = inputs.map(input => 
      input.id === id ? { ...input, value } : input
    );
    setInputs(updatedInputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // Aquí puedes manejar el envío de datos
  };

  return (
    <Form onSubmit={handleSubmit}>
      {inputs.map(input => (
        <Form.Group key={input.id} className="mb-3">
          <Form.Label>Pregunta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escribe la pregumta"
            value={input.value}
            onChange={(e) => handleInputChange(input.id, e.target.value)}
          />
        </Form.Group>
      ))}
      <Button variant="primary" onClick={handleAddInput} style={{ width: '20%', marginLeft: '80%' }}>
        Agregar Pregunta     </Button>
      <Button variant="success" type="submit" style={{ width: '20%', marginLeft: '80%' }}>
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;