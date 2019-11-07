import React from 'react';
import Dashboard from './Dashboard';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row className="justify-content-md-center">
      <Col>
        <Dashboard />
      </Col>
      </Row>
    </Container>
  );
}

export default App;
