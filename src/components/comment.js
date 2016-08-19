import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

export default class Comment extends Component {

  static propTypes = {
    comment: PropTypes.object,
    markResolved: PropTypes.func,
    reply: PropTypes.func
  }

  static defaultProps = {
    comment: {},
    markResolved: () => {},
    reply: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _markResolved = () => {
    this.props.markResolved(this.props.comment.id)
  }

  _reply = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      this.props.reply(this.props.comment.id, e.target.value)
      this.refs.replyInput.value = ''
    }
  }

  render() {
    const { comment } = this.props

    return (
      <div className="comment">
        <div className="head">
          <div className="number">{comment.id}</div>
          <div className="author">{comment.author}</div>
          <div className="operation">
            <label htmlFor="">Mark resolved</label>
            <input type="checkbox" onClick={this._markResolved}/>
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