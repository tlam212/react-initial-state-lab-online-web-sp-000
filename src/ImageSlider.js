import React from 'react'

export default class ImageSlider extends React.Component{
  
  constructor(){
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  increment() = {
    this.setState = ({
      currentSlideIndex: this.state.currentSlideIndex + 1
    })
  }
  
  render(){
    return (
      <div onChange={this.increment}>
        I am on slide {this.state.currentSlideIndex}
      </div>
      )
  }
}
