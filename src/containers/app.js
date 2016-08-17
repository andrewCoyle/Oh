import React, { Component } from 'react'
import Image from '../components/image'
import Sidebar from '../components/sidebar'
import '../style/app.css'

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
