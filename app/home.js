import React, { Component } from "react";
class Home extends Component{
    constructor(props){
        super(props)
    }
render(){
    return (
        <div><a href="./hi">start</a>
        <button onClick={this.setState({set: 'choose2',yoko: 'clear', im: 'kl'})}>skip</button>
        </div>
    )
}
}
export default Home