import React, { Component } from 'react'

export default class Compo extends Component {
  componentDidUpdate(prevProps, prevState){
    console.log("Component Updated!")
  }
  componentWillUnmount(){
    console.log("Component Will Unmount!")
  }
  render() {
    return (
      <div>
        <h2>Logger Component</h2>
        <p>Check your console for lifecycle logs.</p>
      </div>
    )
  }
}
