"use client"
import React, { Component } from 'react'
import { render } from 'react-dom'
import Home from "./home"
import Image from "next/image";
import gojo32 from './ppl/gojo3.png';
import gojo1 from './ppl/gojo1.png';
import gojo4 from './ppl/gojo4.png';
import  Yi  from "./Yi.js";
import Yi2 from './game2';
import Yi3 from './hi';
export default class Ho extends Component{
  constructor(props){
      super(props)
      this.state = {
        set: true, 
        pro1: '',
        pro2: '',
        pro4: '',
        name: ['sakura','yamada','hinata','miku','enu','anya',"miyamura",'inokawa','andrey'],
        name2: '',
        num: 0,
        num2: 0,
        sup: '',
        yoko: '',
        kazu: '',
        pos: 'absolute left-2/4 -translate-x-2/4 -bottom-96 bg-blue-600 px-5 w-80 mx-auto my-0 rounded-2xl border-solid border-2 border-blue-950',
        dialog: 'absolute z-2 select-none animate-[show_1s_ease-in-out] bottom-0 left-2/4 -translate-x-2/4 w-3/4 backdrop-blur-lg rounded-t-xl border-indigo-950 p-5 shadow-inner shadow-indigo-950 border-4 h-44 border-solid '
      }
      this.confirm = this.confirm.bind(this)
  }
  componentDidMount(){
    if(this.state.sup == 'go'){
      document.getElementById('sup').setAttribute('class','bg-center bg-no-repeat h-screen bg-cover')
    }
  }
  confirm(){
    
    this.setState({
      name: this.state.name[this.state.num],
      set: false
    })
    const g = this.state.name[this.state.num]
    const st = '';
    if(document.getElementById('female').checked){
      this.setState({
      pro1: 'she',
      pro2: 'her',
      pro4: '-chan'
      })
    }else if(document.getElementById('male').checked){
      this.setState({
        pro1: 'he',
        pro2: 'his',
        pro4: '-kun'
      })
    }else{
      this.setState({
        pro1: 'it',
        pro2: 'it',
        pro3: 'it',
        pro4: '-san'
      })
    }
  } 
   
  render(){
   const name = this.state.name[this.state.num]
   const name2 = this.state.name
   const dialogs1 = [
   `${name2} : what mission?! and why me!? why are you putting this burden on me , you old man ?!`,
   'gojo: forget about those details, you will understand soon enough, so let\'s hurry up choose the location to start our mission, shall we?',
   function choose(){
    document.getElementById('k').setAttribute("class", "bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2")
  }]
  const dialogs2 = [ 'gojo:  so, our mission is to switch off 3 currently active cursed beacons that if on for too long can have the possibility of summoning a dangerous cursed spirit to our world..',
   "gojo:  also the cursed beacons have the ability to be invisible even for jujutsu sorcerers as they exist in another cursed energy level making the visible only for those with the absolute same level of cursed energy",
   'gojo:  as for "how did we locate them if we cant see them?" those beacons emmit stable cursed energy waves that gets higher the more a sorcerer get\'s close to it',
   `${name2}: and what does that have to do with me?`,
   `gojo: good question, its that you ${name2}${this.state.pro4} are the one who can see the beacons`,
   'gojo:  but you will have to be very care full as you disable those beacons; one faliure attempt and you are DEAD'
  ]
  const dialogs3 = [
    'gojo: now go ahead little buddy, go disable the beacon and remember you might die',
    'gojo: but don\'t worry it will be a simple minigame that you have to win, not a big deal now go beat up that beacon',
    function ik(){document.getElementById('p').setAttribute('class','bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2')}
  ]
  const dialogs4 = [
    `${name2}: welcome back? it\'s literaly my first time in a supernatural cursed beacon with a handsome curse killing machine`,
    'beacon: the beacon is currently enadled, if you want to disable this beacon proceede by playing the game that will be presented on the screen once you are ready',
    'beacon: this game you are about to play has a timer of one minute, and what you have to do is to click the randomly appearing buttons before they get locked again',
    'beacon: so are you ready?',
    function uv2(){document.getElementById('l').setAttribute('class','bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2')}
  ]
  const dialogs5 = [
    'gojo: we have to turn off the beacons before the break of dawn',
    'gojo: let\'s quickly go to the next beacon',
    function uv3(){document.getElementById('ol').setAttribute('class','bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2')}
  ]
  const dialogs6 = [
    `gojo: anyway here is our second beacon, but looks like this one is surrounded by cursed spirits`,
    `gojo: there must be some good oponents in there, I will take the curses you go disable the beacon`,
    'gojo: right after we finish off this beacon we must rush directly to our third beacon, we have another special mission after this so we have to hurry',
    `beacon: welcome ${name2}${this.state.pro4} `,
    'beacon: the second beacon is currently enabled, if u would like to disable this beacon you will proceed by playing a minigame similar to the previous one',
    'beacon: but the only difference is that the buttons will be spaced out alittle more and the amount of clicks to win has incriased from 90 to 120 as for the time given,  you have 1 minute and 20 seconds',
    function uv4(){document.getElementById('ol').setAttribute('class','bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2')}
  ]
  const dialogs7 = [
    `gojo: you did well ${name2}${this.state.pro4} the quicker we move the faster we finish the mission and the faster we start our next special mission`,
    'gojo: as u can see from up here the beacon is taking effect HURRY!!',
    'gojo: quick now disable this last beacon, and I will take on this storm of spirits',
    function uv5(){document.getElementById('ol').setAttribute('class','bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2')}
  ]
  const dialogs8 = [
    `${name2}: who .. are we talking about?`,
    'gojo: ow uhh never mind',
    'gojo: now that we have succefully stopped the special grade curse from appearing, we can start our special mission now',
    `${name2}: so what is this mission about?`,
    function uv6(){document.getElementById('sup').setAttribute('class','bg-center bg-no-repeat h-screen bg-cover')},
    `${name2}: uuum?... hello?..  who turned off the light?`,
    `${name2}: anybody here?`,
    '**something crashes**',
    `${name2}: WHOSE THERE!!?`,
    `${name2}: where does this gojo guy disapear when he is needed?`,
    function uv7(){
      document.getElementById('sup').setAttribute('class','bg-jjkbg6 bg-center bg-no-repeat h-screen bg-cover')
    },
    'gojo & others in the back ground: SUPRIZE!!',
    `${name2}: that scared the hell out of me`,
    `${name2}: who told you it's my birth day today anyway`,
    "gojo: that info stays a secret, ok",
    "gojo: now let's celebrate your bithday!!",
    `narrator: and so ${name2}${this.state.pro4} and others in the jujutsu high celebrated ${this.state.pro2} birth day`,
    function uv8(){document.getElementById('ol').setAttribute('class','bg-blue-950 absolute bottom-12 left-2/4 -translate-x-2/4 animate-[show2_1s_ease-in-out] hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2')}
  ]
   const num = 0
      switch(this.state.set){
      case 'back':
        return(
          <div className='bg-blue-600 px-5 w-60 mx-auto my-0 rounded-2xl border-solid border-2 border-blue-950'>
            <h1 className='font-medium text-center text-sm'>{name2} and the cursed beacons</h1>
            <p>repeating?</p>
            <p>seems like an experiance to repeat</p>
          <button className="bg-blue-950 hover:bg-sky-400 hover:text-slate-950 w-30 border-solid border-sky-600 border-2" onClick={()=>this.setState({set: false})}>start</button>
          <button className="bg-blue-950 hover:bg-sky-400 hover:text-slate-950 w-30 border-solid border-sky-600 border-2" onClick={()=>this.setState({set: true, name: ['sakura','yamada','hinata','miku','enu','anya',"miyamura",'inokawa','andrey']})}>reset</button>
          </div>
        )
      case true:
          return (
            <div className=" bg-jjkbg6 h-screen bg-no-repeat bg-center ">
                  <div className="h-screen grid place-content-center w-screen backdrop-blur-2xl">
                    <button className="w-96 shadow-blue-700 hover:bg-sky-400 hover:text-slate-950 text-7xl object-none h-40 object-center shadow-xl rounded-lg bg-indigo-950 text-center" onClick={()=> this.setState({pos: 'absolute left-2/4 -translate-x-2/4 animate-[show_1s_ease-in-out] bottom-0 bg-blue-600 px-5 w-80 rounded-2xl border-solid border-2 border-blue-950'})}> start</button></div>
              <div id="pick" className={this.state.pos}>
                <h3 className='text-center text-lg'>pick a name</h3>
              <div className="grid grid-cols-3">
                <button className="bg-blue-950 hover:bg-sky-400 hover:text-slate-950 w-6 border-solid border-sky-600 border-2" onClick={()=> this.state.num > 0?this.setState({num: this.state.num-1}):this.setState({num: this.state.name.length-1})}>{'<'}</button>
                <p>{name}</p>
                <button className="bg-blue-950 hover:bg-sky-400 hover:text-slate-950 w-6 border-solid border-sky-600 border-2" onClick={()=> this.state.num === this.state.name.length-1?this.setState({num: 0}):this.setState({num: this.state.num + 1})}>{'>'}</button>
              </div><br/>
              <div className="grid grid-cols-2">
                <label htmlFor='male'>|male|
                  <input type='radio' name='j' id='male' />
                  </label>
                  <label htmlFor='female'>|female|
                  <input type='radio' name='j' id='female'/><br />
                </label>
              </div>
              <button className="bg-blue-950 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-32 my-3 border-sky-600 border-2" onClick={this.confirm}>start</button>
              </div>
              </div>
            )
      case false:
          return (<div>
            <Image id='q' alt="k" className=' z-1 w-100 h-full bg-cover bg-center bg-no-repeat absolute z-0 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4' width={500} height={1000} src={this.state.im === ''?gojo32:gojo1} />
            <div className='bg-jjkbg1 z-0 bg-cover bg-center h-screen bg-no-repeat'>
              <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">gojo: hey there {name2}{this.state.pro4}<br/>
                     this might be a little out of nowhere, but we have to go on a mission where YOU will be the key to success</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs1[this.state.num2]) === dialogs1[this.state.num2]?document.getElementById('d').innerHTML = dialogs1[this.state.num2]:(dialogs1[this.state.num2])()
                       if(this.state.num2 < 2 ){
                          this.setState({num2: this.state.num2 + 1})
                          console.log(this.state.num2)
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                     <button className="bg-blue-950 absolute -bottom-12 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='k' onClick={()=>{ 
                      this.setState({set: 'choose',num2: 0})}
                  }>choose</button>
                </div>
                </div>
          </div>)
      case 'choose':
        return (<div className="bg-jjkbg1 bg-cover h-screen bg-no-repeat bg-center">
          <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">gojo:  it migth be a good time to explain it now </p>
                <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs2[this.state.num2]) === dialogs2[this.state.num2]?document.getElementById('d').innerHTML = dialogs2[this.state.num2]:(dialogs2[this.state.num2])()
                        if(this.state.num2 < 5){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                </div>
                <div id='k'></div>
          <div className='absolute z-0 grid grid-cols-3 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-2/4 rounded-xl border-solid border-slate-800 border-4'>
          
          <button onClick={() => {
            this.setState({set: 'yokohama',num2: 0})
          }
            } className="bg-blue-950 h-full rounded-l-xl hover:bg-sky-400 hover:text-slate-950 w-30 border-solid text-4xl border-sky-600 border-2">yokohama<br /> shrine</button>
          {this.state.yoko == "clear"? <button onClick={() => {this.setState({set: 'kazu'})}} className="bg-blue-950 h-full rounded-l-xl hover:bg-sky-400 hover:text-slate-950 w-30 border-solid text-4xl border-sky-600 border-2" >kazumora<br /> alleys</button>:<button className="bg-gray-800 h-full hover:bg-gray-600 hover:text-slate-950 w-30 border-solid border-sky-600 border-2"><svg style={{color: 'rgb(180, 180, 177)'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
          {this.state.kazu == 'clear'? <button onClick={() => {this.setState({set: 'shibuya'})}} className="bg-blue-950 h-full rounded-l-xl hover:bg-sky-400 hover:text-slate-950 w-30 border-solid text-4xl border-sky-600 border-2">shibuya</button> : <button className="bg-gray-800 h-full rounded-r-xl hover:bg-gray-600 hover:text-slate-950 w-30 border-solid border-sky-600 border-2"><svg style={{color : 'rgb(180, 180, 177)'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
          </div>
        </div>)
      case 'yokohama':
        return (<div className="bg-jjkbg2 bg-cover bg-center h-screen bg-no-repeat">
          <Image id='q' alt="k" className=' z-1 w-100 h-full bg-cover bg-center bg-no-repeat absolute z-0 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4' width={500} height={1000} src={gojo32}/>
          <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">gojo: now here we are at yokohama shrine, the location of our first beacon.</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs3[this.state.num2]) === dialogs3[this.state.num2]?document.getElementById('d').innerHTML = dialogs3[this.state.num2]:(dialogs3[this.state.num2])()
                        if(this.state.num2 < 2){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                     <button onClick={()=>{
                      this.setState({set: 'yoko p',num2: 0})
                     }} id='p' className="bg-blue-950 absolute -bottom-12 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2">begin</button>
                </div>
        </div>)
      case 'yoko p':
        return (
          <div className="bg-jjkbg2 bg-center bg-no-repeat h-screen bg-cover">
            {this.state.im == 'kl'? <><Yi lo={()=>{this.setState({set: "lost"})}} ko={()=>{
              document.getElementById('c').setAttribute('class', this.state.dialog)
              this.setState({set: 'yoko d',yoko: 'clear',num2: 0})
              }} /></>:<></>}
            <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">beacon:  wellcome back, user</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs4[this.state.num2]) === dialogs4[this.state.num2]?document.getElementById('d').innerHTML = dialogs4[this.state.num2]:(dialogs4[this.state.num2])()
                        if(this.state.num2 < 4){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                     <button onClick={()=>{ this.setState({im: 'kl'})
                      document.getElementById('c').setAttribute('class', 'absolute z-2 select-none animate-[unshow_1s_ease-in-out] -bottom-96 left-2/4 -translate-x-2/4 w-3/4 backdrop-blur-lg rounded-t-xl border-indigo-950 p-5 shadow-inner shadow-indigo-950 border-4 h-44 border-solid ')}}
                      className="bg-blue-950 absolute -bottom-96 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='l'>start</button>
                </div> 
          </div>
        )
      case 'yoko p2':
        return (
           <div className="bg-jjkbg2 bg-center bg-no-repeat h-screen bg-cover">
            {this.state.im == 'kl'? <><Yi lo={()=>{this.setState({set: "lost"})}} ko={()=>{
              this.setState({set: 'yoko d',yoko: 'clear',num2: 0})
              document.getElementById('c').setAttribute('class', this.state.dialog)
              }} /></>:<></>}
          </div>
        )
      case 'yoko d':
        return (
          <div className='bg-jjkbg3 bg-center bg-cover h-screen bg-no-repeat'>
            <Image id='q' alt="k" className=' z-1 w-100 h-full bg-cover bg-center bg-no-repeat absolute z-0 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4' width={500} height={1000} src={this.state.im === ''?gojo32:gojo1} />
            <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">gojo: good job there {name2} but u took a long time that the sun is setting</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs5[this.state.num2]) === dialogs5[this.state.num2]?document.getElementById('d').innerHTML = dialogs5[this.state.num2]:(dialogs5[this.state.num2])()
                        if(this.state.num2 < 2){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                     <button onClick={()=>{ this.setState({set: 'choose2'})}}
                      className="bg-blue-950 absolute -bottom-2/4 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='ol'>start</button>
                </div> 
          </div>
        )
      case 'choose2':
        return (
          <div className='bg-jjkbg1 bg-cover bg-center h-screen bg-no-repeat'>
             <div className='absolute z-0 grid grid-cols-3 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-2/4 rounded-xl border-solid border-slate-800 border-4'>
          <button onClick={() => {
            this.setState({set: 'yokohama',num2: 0})
            }
            } className="bg-blue-950 h-full rounded-l-xl hover:bg-sky-400 hover:text-slate-950 w-30 border-solid text-4xl border-sky-600 border-2">yokohama<br /> shrine</button>
          {this.state.yoko == "clear"? <button onClick={() => {this.setState({set: 'kazu',num2: 0})}} className="bg-blue-950 h-full hover:bg-sky-400 hover:text-slate-950 w-30 border-solid text-4xl border-sky-600 border-2" >kazumora<br /> alleys</button>:<button className="bg-gray-800 h-full hover:bg-gray-600 hover:text-slate-950 w-30 border-solid border-sky-600 border-2"><svg style={{color: 'rgb(180, 180, 177)'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"></path> </svg></button>}
          {this.state.kazu == 'clear'? <button onClick={() => {this.setState({set: 'shibuya',num2: 0})}} className="bg-blue-950 h-full rounded-r-xl hover:bg-sky-400 hover:text-slate-950 w-30 border-solid text-4xl border-sky-600 border-2">shibuya</button> : <button className="bg-gray-800 h-full rounded-r-xl hover:bg-gray-600 hover:text-slate-950 w-30 border-solid border-sky-600 border-2"><svg style={{color : 'rgb(180, 180, 177)'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi my-0 mx-auto bi-lock" viewBox="0 0 16 16"> <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"> </path> </svg> </button>}
          </div>
          </div>
        )
      case 'kazu':
        return (
          <div className='bg-jjkbg4 bg-center bg-no-repeat h-screen bg-cover'>
            <Image id='q' alt="k" className=' z-1 w-100 h-full bg-cover bg-center bg-no-repeat absolute z-0 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4' width={500} height={1000} src={this.state.im === ''?gojo32:gojo1} />
            <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">gojo: the sun has set and we have to turn them all off before sun rise ...or else</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs6[this.state.num2]) === dialogs6[this.state.num2]?document.getElementById('d').innerHTML = dialogs6[this.state.num2]:(dialogs6[this.state.num2])()
                        if(this.state.num2 < 6){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                     <button onClick={()=>{ this.setState({set: 'kazu p',im: 'kl'})}}
                      className="bg-blue-950 absolute -bottom-96 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='ol'>GO!!</button>
                </div>
          </div>
        )
        case 'kazu p':
          return (
            <div className='bg-jjkbg4 bg-center bg-no-repeat h-screen bg-cover'>
               {this.state.im == 'kl'? <><Yi2 lo={()=>{this.setState({set: "lost2"})}} ko={()=>{
              this.setState({set: 'choose2',kazu: 'clear',num2: 0})
              }} /></>:<></>}
            </div>
          )
      case 'shibuya':
        return (
          <div className='bg-jjkbg5 bg-center bg-no-repeat h-screen bg-cover'>
            <Image id='q' alt="k" className=' z-1 w-100 h-full bg-cover bg-center bg-no-repeat absolute z-0 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4' width={500} height={1000} src={this.state.im === ''?gojo32:gojo1} />
            <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-black font-bold mx-11">gojo: the sun has set and we have to turn them all off before sun rise ...or else</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs7[this.state.num2]) === dialogs7[this.state.num2]?document.getElementById('d').innerHTML = dialogs7[this.state.num2]:(dialogs7[this.state.num2])()
                        if(this.state.num2 < 3){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                      }}>{'>'}</button>
                     <button onClick={()=>{ this.setState({set: 'shibuya p',im: 'kl'})}}
                      className="bg-blue-950 absolute -bottom-96 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='ol'>GO!!</button>
                </div>
          </div>
        )
      case 'shibuya p':
        return (
          <div>
            <div className='bg-jjkbg5 bg-center bg-no-repeat h-screen bg-cover'>
               {this.state.im == 'kl'? <><Yi3 lo={()=>{this.setState({set: "lost3"})}} ko={()=>{
              this.setState({set: 'suprise',kazu: 'clear',num2: 0})
              }} /></>:<></>}
            </div>
          </div>
        )
      case 'suprise':
        return (
          <div id='sup' className='bg-jjkbg7 bg-center bg-no-repeat h-screen bg-cover'>
            <Image id='q' alt="k" className=' z-1 w-100 h-full bg-cover bg-center bg-no-repeat absolute z-0 left-2/4 top-3/4 -translate-x-2/4 -translate-y-2/4' width={500} height={1000} src={this.state.im == 'no'?gojo4:gojo32}/>
            <div id='c' className={this.state.dialog}>
                     <p id='d' className="text-center text-xl text-[#ffff] font-bold mx-11">gojo: I didn't expect you to finish it off this easily, i guess he was just weaker than you</p>
                     <button className="bg-blue-950 absolute bottom-12 left-3/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='yu' onClick={()=>{
                        String(dialogs8[this.state.num2]) === dialogs8[this.state.num2]?document.getElementById('d').innerHTML = dialogs8[this.state.num2]:(dialogs8[this.state.num2])()
                        if(this.state.num2 < 17){
                          this.setState({num2: this.state.num2 + 1})
                          }else{
                            this.setState({num2: this.state.num2})
                          }
                        if(this.state.num2 == 4){
                          this.setState({im: 'no'})
                        }
                        if(this.state.num2 == 10){
                          this.setState({im: ''})
                        }
                      }}>{'>'}</button>
                     <button onClick={()=>{ this.setState({set: 'credits'})}}
                      className="bg-blue-950 absolute -bottom-96 left-2/4 -translate-x-2/4 hover:bg-sky-400 hover:text-slate-950 w-20 border-solid mx-8 my-2 border-sky-600 border-2" id='ol'>finish</button>
                </div>
          </div>
        )
      case 'lost':
        return (
          <div className='bg-jjkbg1 bg-center bg-cover h-screen bg-no-repeat'>
            <h1 className='text-center text-black font-bold'>YOU DIED</h1>
              <div class="grid place-content-center"><button onClick={()=>this.setState({set: 'yoko p2'}) } className='w-96 text-3xl shadow-blue-700 hover:bg-sky-400 hover:text-slate-950 object-none h-40 object-center shadow-xl rounded-lg bg-indigo-950 text-center'>restart from save</button></div>
          </div>
        )
      case 'lost2':
        return (
          <div className='bg-jjkbg1 bg-center bg-cover h-screen bg-no-repeat'>
            <h1 className='text-center text-black font-bold'>YOU DIED</h1>
              <div class="grid place-content-center"><button onClick={()=>this.setState({set: 'kazu p'})} className='w-96 text-3xl shadow-blue-700 hover:bg-sky-400 hover:text-slate-950 object-none h-40 object-center shadow-xl rounded-lg bg-indigo-950 text-center'>restart from save</button></div>
          </div>
        )
      case 'lost3':
        return (
          <div className='bg-jjkbg1 bg-center bg-cover h-screen bg-no-repeat'>
            <h1 className='text-center text-black font-bold'>YOU DIED</h1>
              <div class="grid place-content-center"><button onClick={()=>this.setState({set: 'shibuya p'})} className='w-96 text-3xl shadow-blue-700 hover:bg-sky-400 hover:text-slate-950 object-none h-40 object-center shadow-xl rounded-lg bg-indigo-950 text-center'>restart from save</button></div>
          </div>
        )
      case 'credits':
        return (
          <div>
            <div id="cred" >
              <h1 className='text-center'>credit goes to</h1>
              <h2 className='text-center'>game developer ... salim abdu</h2>
              <h2 className='text-center'>scripting  ... salim abdu</h2>
              <h2 className='text-center'>plot ... hiyab</h2>
              <h1 className='text-center'>cast</h1>
              <h2 className='text-center'>gojo as . ... gojo</h2>
              <h2 className='text-center'>beacon as ... beacon</h2>
              <h2 className='text-center'>player as  .... {name2}{this.state.pro4}</h2>
              <h1 className='text-center text-2xl'>and at last congragulations on finishing the game</h1>
              <a className='text-center text-blue-900' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>click to take your prize for finishing the game</a>
            </div>
          </div>
        )
       }
  }
}
