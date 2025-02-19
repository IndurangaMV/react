import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Optional Bootstrap styling
import { Container } from "react-bootstrap";
import Flower from "./Flower";
import Rabbit from "./Rabbit";
import Football from "./Football";

function MissGoal(){
  return <h1>Missed..!</h1>
}
function MadeGoal(){
  return <h1>Goal..!</h1>
}
function Choose(props){
  if(!props.isGoal){
    return <MissGoal/>
  }else{
    return <MadeGoal/>
  }
}

function App() {
  return (
    <Container className="mt-5">
     
      <Choose isGoal={false}/>
    </Container>
  );
}

export default App;
