import React, { Component } from 'react'
import Headlights from './items/headlights'
import Nighteye from './items/Nighteye'
import Speakers from './items/speakers'
import Newp from './items/newp'
import Sonyamp from './items/sonyamp'
import Infiwoofer from './items/infiwoofer'
import Jbl from './items/jbl'
export class items extends Component {
  render() {
    return (
        <>
        <p className='prod'> P R O D U C T S</p>
      <div className='container ry'>
        <Headlights/><Nighteye/>
        <Speakers/><Newp/>
      </div>

        <div className='container ry'>
        <Sonyamp/><Infiwoofer/>
        <Jbl/><Headlights/>
      </div>
      </>
    )
  }
}

export default items
