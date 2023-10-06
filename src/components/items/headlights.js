import React, { Component } from 'react'

export class  headlights extends Component {
  render() {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src="https://alexnld.com/wp-content/uploads/2018/11/CMS5144_1.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">IPH Bi-Xenon Projector</h5>
          <p className="card-text">100$</p>
          <a href="/" className="btn btn-primary">Buy</a>
        </div>
      </div>
    )
  }
}

export default headlights
