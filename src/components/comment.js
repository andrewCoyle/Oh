import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import classnames from 'classnames'

export default class Comment extends Component {

  static propTypes = {
    comment: PropTypes.object,
    createTag: PropTypes.func,
    removeTag: PropTypes.func,
    resolveTag: PropTypes.func,
    activateTag: PropTypes.func,
    replyToComment: PropTypes.func,
    setPreparingStatusOff: PropTypes.func,
  }

  static defaultProps = {
    comment: {},
    createTag: () => {},
    removeTag: () => {},
    resolveTag: () => {},
    activateTag: () => {},
    replyToComment: () => {},
    setPreparingStatusOff: () => {},
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

  _createComment = () => {
    this.props.setPreparingStatusOff()
    this.props.createTag(this.props.comment.id, this.refs.commentArea.value)
  }

  _cancelComment = () => {
    this.props.setPreparingStatusOff()
    this.props.removeTag(this.props.comment.id)
  }

  render() {
    const { comment } = this.props

    return (
      comment.createdAt ? this.renderComment(comment) : this.renderCommentForm(comment)
    )
  }

  renderCommentForm(comment) {
    return (
      <div className={classnames('comment', {active: comment.isActive})} onClick={this._activateTag}>
        <div className="head">
          <div className="id">{comment.id}</div>
          <div className="author">{comment.author}</div>
        </div>
        <div className="body">
          <div className="comment-form">
            <textarea className="comment-area" cols="32" rows="6" ref="commentArea"/>
            <button className="btn-add" onClick={this._createComment}>Add Comment</button>
            <button className="btn-cancel" onClick={this._cancelComment}>Cancel</button>
            <a href="#" className="invite">+ Invite others</a>
          </div>
        </div>
      </div>
    )
  }

  renderReplyForm() {
    return (
      <div className="reply-form">
        <input
          className="reply-input"
          type="text"
          placeholder="Reply"
          ref="replyInput"
          onKeyDown={this._reply}
        />
      </div>
    )
  }

  renderComment(comment) {
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
          {this.renderReplyForm()}
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