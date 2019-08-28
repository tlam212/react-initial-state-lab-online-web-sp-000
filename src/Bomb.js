import React from 'react'

export default class Bomb extends React.Component{
  
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  
  render(){
    return(
      <p>{this.state.secondsLeft} seconds left before I go boom!</p>)
  }

}