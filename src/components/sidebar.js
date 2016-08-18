import React, { Component } from 'react'
import classnames from 'classnames'
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
    return (
      <div className={classnames('sidebar', {
        minimized: this.state.isMinimized
      })}>
        <div className="top-menu">
          <input type="text"/>
          <select>
            <option value="1">share</option>
          </select>
          <button onClick={this._toggleSidebar}>{'>'}</button>
          <button>{'X'}</button>
        </div>
        <div className="comments">
          <div className="comment">
            <div className="head">
              <div className="number">1</div>
              <div className="author">John Doe</div>
              <div className="operation">
                <label htmlFor="">Mark resolved</label><input type="checkbox"/>
              </div>
            </div>
            <div className="body">
              <div className="message">
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </div>
              <div className="reply-from">
                <input type="text" placeholder="Reply"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}