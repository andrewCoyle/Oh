import React, { Component } from 'react'
import Image from '../components/image'
import Sidebar from '../components/sidebar'
import '../style/app.styl'

export default class App extends Component {
  render() {

    return (
      <div className='app'>
        <Image />
        <Sidebar />
      </div>
    )
  }
}
