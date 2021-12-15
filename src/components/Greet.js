function Greet(props){
    return(
        <div>
        <h1>Hello {props.name} aka {props.alias} </h1>
        {props.children}
        </div>
    ) 
    
}

export default Greet;