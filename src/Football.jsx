import React from "react";

class Football extends React.Component {
    shoot() {
        var t1 = document.getElementById("i1").value;
        document.getElementById("i2").value = t1;
    }
    shoot2 = (text,b) => { alert(b.type) }
    render() {
        return <div className="bg bg-primary rounded p-3">
            <input type="text" className="form-control" id="i1" />
            <input type="text" className="form-control my-3" id="i2" readOnly />
            <button className="btn btn-danger" onMouseUp={(event) => this.shoot2("dd",event)}>Shoot</button>
        </div>
    }
}
export default Football;