import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import Comment from './comment'
import '../theme/style/comments.styl'

export default class Comments extends Component {

  static propTypes = {
    comments: PropTypes.array,
    resolveTag: PropTypes.func,
    replyToComment: PropTypes.func
  }

  static defaultProps = {
    comments: [],
    resolveTag: () => {},
    replyToComment: () => {}
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="comments">
        {_.map(this.props.comments, (item) =>
          !item.isResolved &&
            <Comment
              key={item.id}
              comment={item}
              resolveTag={this.props.resolveTag}
              replyToComment={this.props.replyToComment}
            />
        )}
      </div>
    )
  }
}