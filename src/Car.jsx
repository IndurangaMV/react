import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
    };
  }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  // ✅ Fix: Correctly update color from input field
  updateColor = (event) => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <form>
          <label className="form-label">Enter color:</label>
          <input
            type="text"
            className="form-control"
            onChange={this.updateColor} // ✅ Fix: Passing function reference
            value={this.state.color} // ✅ Fix: Controlled input
          />
        </form>
        <p>
          It is a <span style={{ color: this.state.color }}>{this.state.color}</span>  
          <b> {this.state.model} </b>  
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor} className="btn btn-primary mt-2">
          Change to Blue
        </button>
      </div>
    );
  }
}

export default Car;
