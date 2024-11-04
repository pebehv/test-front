import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validar campos
    if (!username || !password) {
      setError('Por favor, ingresa un usuario y una contraseña.');
      return;
    }

    // Aquí podrías agregar tu lógica de autenticación
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    
    // Navegar al componente Menu
    navigate('/menu');
  };

  return (
    <div className="App">
      <div className="centered-div">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Introduce su usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="inputPassword5">Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="passwordHelpBlock"
            />
          </Form.Group>

          {error && <div className="error-message">{error}</div>}

          <Button variant="primary" type="submit">
            Iniciar Sesión
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;