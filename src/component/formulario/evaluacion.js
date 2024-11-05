import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Menu from '../menu/menu';
import Formulario from './formulario';




function Evaluacion() {
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [newUser, setNewUser] = useState({ NameEval: '', Type: '', Enabled: '' });
  const [users, setUsers] = useState([
    { id: 1, NameEval: 'Evaluacion1', Type: 't1', Enabled: 'Si' },
    { id: 2, NameEval: 'Evaluacion2', Type: 't2', Enabled: 'No' },
    { id: 3, NameEval: 'Evaluacion3', Type: 't3', Enabled: 'Si' },
  ]);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };
  const handleSelect= (user) => {
    //setSelectedUser2(user);
    setSelect(true);
  };
  
  const handleCloseAdd = () => {
    setShowAdd(false);
    setNewUser({ NameEval: '', Type: '', Enabled: '' });
  };
  
  const handleShowAdd = () => {
    setShowAdd(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated:', selectedUser);
    // Aquí puedes manejar la actualización, como enviar a una API
    handleClose();
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newId = users.length ? users[users.length - 1].id + 1 : 1;
    setUsers([...users, { id: newId, ...newUser }]);
    handleCloseAdd();
  };

  return (
    <div>
      <Menu />
      <Card style={{ margin: '5%' }}>
        <div className="card-header">
          <h1>Evaluaciones</h1>
          <Button variant="primary" onClick={handleShowAdd} style={{ width: '20%', marginLeft: '80%' }}>
            Agregar Registro
          </Button>
   
        </div>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Evaluacion</th>
              <th>Type</th>
              <th>Habilitado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}  onClick={() => handleSelect(user)}>
                <td>{user.id}</td>
                <td>{user.NameEval}</td>
                <td>{user.Type}</td>
                <td>{user.Enabled}</td>
                <td ><Button style={{ width: '50%' }}
                onClick={() => handleShow(user)}>Editar</Button> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      {select &&
        <Formulario />
      }

      
      </Card>

      {/* Modal para editar usuario */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNameEval">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="NameEval"
                  value={selectedUser.NameEval}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  name="Type"
                  value={selectedUser.Type}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEnabled">
                <Form.Label>Enabled</Form.Label>
                <Form.Control
                  type="text"
                  name="Enabled"
                  value={selectedUser.Enabled}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>

      {/* Modal para agregar nuevo usuario */}
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddSubmit}>
            <Form.Group controlId="formNewNameEval">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="NameEval"
                value={newUser.NameEval}
                onChange={handleNewInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formNewType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                name="Type"
                value={newUser.Type}
                onChange={handleNewInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formNewEnabled">
              <Form.Label>Enabled</Form.Label>
              <Form.Control
                type="text"
                name="Enabled"
                value={newUser.Enabled}
                onChange={handleNewInputChange}
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Add User
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Evaluacion;