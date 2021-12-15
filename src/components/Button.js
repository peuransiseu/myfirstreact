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
            <button className="button1" onClick = {this.addCounter}>Click to Increase!</button>
            <p className="counter">Price = ₱ {this.state.count}.00</p>
            <button className="button2" onClick = {this.decreaseCounter}>Click to Decrease!</button> 
        </div>           
       
        )
    }
}

export default Button;