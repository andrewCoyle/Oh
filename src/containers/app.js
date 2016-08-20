import React, { Component } from 'react'
import Image from '../components/image'
import Sidebar from '../components/sidebar'
import Comments from '../components/comments'
import '../style/app.styl'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getTags, createTag, resolveTag, replyToComment } from '../redux/modules/tags'

class App extends Component {

  componentWillMount() {
    this.props.tagsActions.getTags()
  }

  render() {
    const { tags } = this.props
    const { createTag, resolveTag, replyToComment } = this.props.tagsActions

    return (
      <div className="app">
        <Image
          tags={tags}
          createTag={createTag}
        />

        <Sidebar>
          <Comments
            comments={tags}
            resolveTag={resolveTag}
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
    tagsActions: bindActionCreators({getTags, createTag, resolveTag, replyToComment}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)