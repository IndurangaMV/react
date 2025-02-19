import React from "react";

class Student extends React.Component{
    constructor(props){
        super();
        this.state={
            type:'human'
        };
    }
    render(){
        return <div>
                    <h2>{this.props.name}</h2>
                    <h4>my favourite color : {this.props.color}</h4>
                    <h4>my favourite food : {this.props.food}</h4>
                </div>
    }
}
export default Student;