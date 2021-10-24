function Greet(props){
    return(
        <div>
        <h1>Hello {props.name} aka {props.alyas} </h1>
        {props.children}
        </div>
    ) 
    
}

export default Greet;