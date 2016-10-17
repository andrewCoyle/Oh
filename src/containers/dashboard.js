import React, { Component } from 'react'
import '../theme/style/dashboard.styl'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="panel">
          <div className="panel-left">
            <button className="add-image">OhApollo</button>
          </div>
          <div className="panel-right">
            <button className="btn-notification">notification</button>
            <div className="current-user">current user</div>
          </div>
          <div className="user-menu"></div>
        </div>
        <div className="screen-grid">
          <div className="screen">
            <div className="screen-link"></div>
            <div className="screen-info"></div>
          </div>
        </div>
      </div>
    )
  }
}