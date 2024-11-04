import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Evaluacion() {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(' updated:', selectedUser);
    // Aquí puedes manejar la actualización, como enviar a una API
    handleClose();
  };

  const users = [
    { id: 1, NameEval: 'Mark', Type: 'Otto', Enabled: '@mdo' },
    { id: 2, NameEval: 'Jacob', Type: 'Thornton', Enabled: '@fat' },
    { id: 3, NameEval: 'Larry', Type: 'Bird', Enabled: '@twitter' },
  ];

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Enabled</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => handleShow(user)}>
              <td>{user.id}</td>
              <td>{user.NameEval}</td>
              <td>{user.Type}</td>
              <td>{user.Enabled}</td>
            </tr>
          ))}
        </tbody>
      </Table>

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
    </div>
  );
}

export default Evaluacion;