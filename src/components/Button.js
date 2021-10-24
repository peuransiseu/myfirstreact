import React from "react";

class Button extends React.Component{

    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    addCounter = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    decreaseCounter = () =>{
        this.setState(
            {
                count : this.state.count - 1
            }
        )
    }

    render(){
        return(
        <div>
            <button onClick = {this.addCounter}>Click to Increase!</button>
            <p>counts = {this.state.count}</p>
            <button onClick = {this.decreaseCounter}>Click to Decrease!</button>
        </div>
        )
    }
}

export default Button