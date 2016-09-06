import React, { Component } from 'react'
import Screen from '../components/screen'
import Sidebar from '../components/sidebar'
import Comments from '../components/comments'
import '../theme/style/app.styl'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  getTags,
  prepareTag,
  createTag,
  removeTag,
  resolveTag,
  activateTag,
  replyToComment } from '../redux/modules/tags'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      fullscreen: false
    }
  }

  componentWillMount() {
    this.props.tagsActions.getTags()
  }

  _changeScreenMode = () => {
    this.setState({
      fullscreen: !this.state.fullscreen
    })
  }

  render() {
    const { tags } = this.props
    const {
      prepareTag,
      createTag,
      removeTag,
      resolveTag,
      activateTag,
      replyToComment
    } = this.props.tagsActions

    return (
      <div className="app">
        <Screen
          tags={tags}
          prepareTag={prepareTag}
          activateTag={activateTag}
          fullscreen={this.state.fullscreen}
        />

        <Sidebar
          isMinimized={this.state.fullscreen}
          changeScreenMode={this._changeScreenMode}
        >
          <Comments
            comments={tags}
            createTag={createTag}
            removeTag={removeTag}
            resolveTag={resolveTag}
            activateTag={activateTag}
            replyToComment={replyToComment}
          />
        </Sidebar>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tags: state.tags.toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    tagsActions: bindActionCreators({
      getTags,
      prepareTag,
      createTag,
      removeTag,
      resolveTag,
      activateTag,
      replyToComment
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)