import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import classnames from 'classnames'

export default class Comment extends Component {

  static propTypes = {
    comment: PropTypes.object,
    resolveTag: PropTypes.func,
    activateTag: PropTypes.func,
    replyToComment: PropTypes.func
  }

  static defaultProps = {
    comment: {},
    resolveTag: () => {},
    activateTag: () => {},
    replyToComment: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _markResolved = () => {
    this.props.resolveTag(this.props.comment.id)
  }

  _activateTag = () => {
    this.props.activateTag(this.props.comment.id)
  }

  _reply = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.replyToComment(this.props.comment.id, e.target.value, 'Anonymous')
      this.refs.replyInput.value = ''
    }
  }

  render() {
    const { comment } = this.props

    return (
      <div className={classnames('comment', {active: comment.isActive})} onClick={this._activateTag}>
        <div className="head">
          <div className="id">{comment.id}</div>
          <div className="author">{comment.author}</div>
          <div className="operation">
            <label className="label">Mark resolved</label>
            <input type="checkbox" className="mark-resolve" onClick={this._markResolved}/>
          </div>
        </div>
        <div className="body">
          <div className="message">
            {comment.message}
          </div>
          <div className="replies">
            {_.map(comment.replies, (reply) =>
              this.renderReplies(reply)
            )}
          </div>
          <div className="reply-form">
            <input
              className="reply-input"
              type="text"
              placeholder="Reply"
              ref="replyInput"
              onKeyDown={this._reply}
            />
          </div>
        </div>
      </div>
    )
  }

  renderReplies(reply) {
    return (
      <div className="reply" key={reply.id}>
        <div className="author">{reply.author}</div>
        <div className="message">{reply.message}</div>
      </div>
    )
  }
}