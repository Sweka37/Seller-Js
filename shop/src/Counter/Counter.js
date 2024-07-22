import React, { Component } from 'react'
import img1 from "../Images/mango.jpg"
import img2 from "../Images/banana.jpg"
import Customer from '../Customer/Customer';
const names={
  name1:"Anu",
  name2:"Bob",
  name3:"Ravi"
}
export default class Ccounter extends Component {
  constructor(){
    super();
    this.state={
      count:0,
      count1:0
    }
  }
  incrementCounter = () =>{
    this.setState({count:this.state.count+1})
  };
  incrementCounter1 = () =>{
    this.setState({count1:this.state.count1+1})
  };
  render() {
    return (
      <div>
        <center>
        <h1>Bob ate {this.state.count} mangoes {this.state.count1} bananas</h1>
        <img src={img1}></img>
        <img src={img2}></img><br></br>
        <button onClick={this.incrementCounter}>Eat Mango</button>
        <button onClick={this.incrementCounter1}>Eat Banana</button>
        <Customer data={names}/>
        </center>
      </div>
    )
  }
}

