import React, { Component } from 'react'
import classnames from 'classnames'
import Comments from './comments'
import '../style/sidebar.styl'

export default class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isMinimized: false
    }
  }

  _toggleSidebar = () => {
    this.setState({
      isMinimized: !this.state.isMinimized
    })
  }

  render() {
    const { isMinimized } = this.state

    return (
      <div className={classnames('sidebar', {
        minimized: isMinimized
      })}>

        <div className="top-menu">
          <input type="text"/>
          <select>
            <option value="1">share</option>
          </select>
          <button className="minimize" onClick={this._toggleSidebar}>{isMinimized ? '<' : '>'}</button>
          <button>{'X'}</button>
        </div>

        <Comments/>

      </div>
    )
  }
}