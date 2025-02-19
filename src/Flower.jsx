import React from "react";

class Flower extends React.Component{
    constructor(){
        super();
        this.state={
            color:"red"
        }
    }
    changeColor=()=>{(this.state.color=="red")?this.setState({color:"blue"}):this.setState({color:"red"})};
    render(){
        return (
            <div>
                <h2 style={{color:this.state.color}}>Hai, this is {this.state.color} Flower</h2>
                <button className="btn btn-danger" onClick={this.changeColor}>Change</button>
            </div>
        );
    }
}
export default Flower;