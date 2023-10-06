import React, { Component } from 'react'

export class speakers extends Component {
  render() {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src="https://www.dowtechnologies.com/img/product/R165-S_7-Z.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Rockford Prime components</h5>
          <p className="card-text">100$</p>
          <a href="/" className="btn btn-primary">Buy</a>
        </div>
      </div>
    )
  }
}

export default speakers
