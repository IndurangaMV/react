import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Alert } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";


function App() {
  return (
    <Container className="mt-5 text-center">
      <Alert variant="info">
        <h4>🚀 React Bootstrap Test</h4>
        <p>This is a simple test to check if React Bootstrap is working.</p>
      </Alert>
      <Button variant="primary" size="lg">
        Click Me
      </Button>
      <Navbar variant='success' className="bg bg-dark text-light p-3 mt-5 rounded rounded-5">hai</Navbar>
    </Container>
  );
}

export default App;

