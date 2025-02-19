import React from "react";
class Rabbit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { runstt: "stop", color: "red",favoritecolor:"green",count:0 }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({color: "yellow"})
        }, 1000)
      }
      getSnapshotBeforeUpdate(prevProps, prevState) {
       var x= document.getElementById("div1");
       x.innerHTML ="Before the update, the favorite was " + prevState.color+"</br>The count is: "+this.state.count;
        // setTimeout(() => {
        //     x.innerHTML=""
        //   }, 1000)
      }
      componentDidUpdate() {
       var x= document.getElementById("div2");
       x.innerHTML ="The updated favorite is " + this.state.color+"</br>The count is: "+this.state.count;
        // setTimeout(()=>{x.innerHTML=""},1000)
      }
    makeItRun = () => { this.setState({ runstt: "Running",color:"blue" }) }
    changecolor=()=> { this.setState({ color: "green" }) }
    render() {
        alert("ok");
        this.state.count++;
        return <div>
            <h1 style={{color:this.state.color}}>The Rabbit is {this.state.runstt}.</h1>
            <h2>my favoritecolor is: {this.state.color}</h2>
            <button className="btn btn-danger" onClick={this.makeItRun}>Run</button>
            <button className="btn btn-success" onClick={this.changecolor}>change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
    }
}
export default Rabbit;