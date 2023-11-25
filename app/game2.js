import React, { Component } from "react";
export default class Yi2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0,
      toWin: 120, 
      timer: 80,
      btn: 0,
      pause: 'continue',
      winlose: ''
    };
    this.clickCounter = this.clickCounter.bind(this);
  }
  clickCounter() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }
  k(){
    this.props.ko();
  }
  l(){
    this.props.lo();
  }
  componentDidMount() {
    setTimeout(()=>{
    setInterval(() => {
      if (this.state.timer > 0 && this.state.clickCount < this.state.toWin && this.state.pause == 'continue') {
        this.setState({
          timer: this.state.timer - 1,
          btn: Math.round(Math.random() * 4 + 1)
        });
      }else if(this.state.pause == 'pause'){
        this.setState({
            timer: this.state.timer,
            btn: 0
          });
     } else if(this.state.clickCount >= this.state.toWin){
        this.setState({
          timer: this.state.timer,
          winlose: 'win',
          btn: 0
        });
      }
    if(this.state.clickCount >= this.state.toWin){
      this.setState({timer: this.state.timer,winlose: 'win',btn: 0})
    }else if(this.state.timer == 0 && this.state.clickCount < this.state.toWin){
      this.setState({timer: this.state.timer,btn : 0,winlose: 'lose'})
    }
      
    }, 1000)},5000)
  }
  render() {
    return (
      <div>
        <h1 className="text-center text-black font-bold bg-red-900" id='er'>amount of clicks to win:  {this.state.toWin} <br /> your clicks:  {this.state.clickCount}</h1>
        {this.state.winlose == 'win'? document.getElementById('er').innerHTML = 'YOU win!.... beacon successfully disabled': this.state.winlose == 'lose'?document.getElementById("er").innerHTML == 'you lose, you die':<></>}
        {this.state.winlose == 'win'?<button onClick={()=>{this.props.ko()}} className="bg-rose-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-red-800 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-rose-700 border-2">proceede</button>:this.state.winlose == 'lose'? <button onClick={()=>{this.props.lo()}} className="bg-rose-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-red-800 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-rose-700 border-2">restart</button>:<></>}
        <p className="absolute top-10 right-5 text-center text-black font-bold bg-red-900">time remainig: {this.state.timer}</p>
        <button onClick={()=>{this.setState({pause : 'pause'})}} className="absolute top-16 left-2/4 -translate-x-2/4 text-center text-black font-bold bg-red-900">pause</button>
        <button onClick={()=>{this.setState({pause : 'continue'})}} className="absolute top-24 left-2/4 -translate-x-2/4 text-center text-black font-bold bg-red-900">resume</button>
        <div className="grid grid-cols-2 gap-60 place-content-between w-full bg-darkRed rounded-xl h-3/4 mx-auto my-16"> 
          <div className="grid grid-cols-1">
              {this.state.btn == 1 ? <button className=" bg-rose-950 hover:bg-red-800 hover:text-slate-950 w-30 h-30 border-solid mx-32 my-32 border-rose-700 border-2" onClick={this.clickCounter}>click</button> : <button className="bg-gray-800 hover:bg-gray-600  mx-32 my-32 hover:text-slate-950 w-30 h-30  border-solid border-rose-700 border-2"><svg style={{ color: 'rgb(180, 180, 177)' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
              {this.state.btn == 2 ? <button className=" bg-rose-950 hover:bg-red-800 hover:text-slate-950 w-30 h-30 border-solid mx-32 my-32 border-rose-700 border-2" onClick={this.clickCounter}>click</button> : <button className="bg-gray-800 hover:bg-gray-600  mx-32 my-32 hover:text-slate-950 w-30 h-30 border-solid border-rose-700 border-2"><svg style={{ color: 'rgb(180, 180, 177)' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
          </div>
          <div className="grid grid-cols-1">
              {this.state.btn == 3 ? <button className="bg-rose-950 hover:bg-red-800 hover:text-slate-950 w-30 h-30 border-solid mx-32 my-32 border-rose-700 border-2" onClick={this.clickCounter}>click</button> : <button className="bg-gray-800 hover:bg-gray-600 mx-32 my-32  hover:text-slate-950 h-30 w-30 border-solid border-rose-700 border-2"><svg style={{ color: 'rgb(180, 180, 177)' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
              {this.state.btn == 4 ? <button className="bg-rose-950 hover:bg-red-800 hover:text-slate-950 w-30 h-30 border-solid mx-32 my-32 border-rose-700 border-2" onClick={this.clickCounter}>click</button> : <button className="bg-gray-800 hover:bg-gray-600  mx-32 my-32 hover:text-slate-950 h-30 w-30 border-solid border-rose-700 border-2"><svg style={{ color: 'rgb(180, 180, 177)' }} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
          </div></div>
      </div>
    );
  }
}