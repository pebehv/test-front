import React from 'react';
import Menu from '../menu/menu';
import { Card, Row, Col } from 'react-bootstrap';




function Dashboard() {
  

  return (
    <div>
      <Menu />
      <Card style={{ margin: '5%' }}>
        <div className="card-header">
          <h1>Dashboard</h1>
        </div>
        <Row className="justify-content-center">
            <Col xs={12} sm={6} md={4} className="mb-4">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Cantidad de Evaluación</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Evaluaciones creadas</Card.Subtitle>
                        <Card.Title className="m-4" style={{ fontSize: '35px' }}>
                            3
                        </Card.Title>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Cantidad de Estudiantes</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Estudiantes inscriptos</Card.Subtitle>
                        <Card.Title className="m-4" style={{ fontSize: '35px' }}>
                            13
                        </Card.Title>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Cantidad de Registros</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Registros creados</Card.Subtitle>
                        <Card.Title className="m-4" style={{ fontSize: '35px' }}>
                            41
                        </Card.Title>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

      </Card>


    </div>
  );
}

export default Dashboard;