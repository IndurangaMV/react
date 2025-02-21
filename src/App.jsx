import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styling
import { Container } from "react-bootstrap";

function Car(props) {
  return <li>Hai, I am {props.brand} </li>;
}

function Garage() {
  const car = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Toyota' },
    { id: 4, brand: 'Audi' }
  ];

  return (
    <>
      <h2>Garage</h2>
      {car.length > 0 && <h3>You have {car.length} cars in the garage.</h3>}
      <ul>
        {car.map((cars) => <Car key={cars.id} brand={cars.brand} />)} 
      </ul>
    </>
  );
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
      </label>
      <br />
      <label>Enter your age:
        <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" className="btn btn-primary mt-3" />
    </form>
  );
}

function App() {
  return (
    <Container className="mt-5">
      <MyForm />
      <Garage />
    </Container>
  );
}

export default App;
