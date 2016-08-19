import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import Comment from './comment'
import '../style/comments.styl'

export default class Comments extends Component {

  static propTypes = {
    comments: PropTypes.array
  }

  static defaultProps = {
    comments: [
      {
        id: 1,
        author: 'John Doe',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        isResolved: false,
        replies: [
          {
            id: 1,
            author: 'Sally',
            message: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
          }
        ]
      },
      {
        id: 2,
        author: 'Sally',
        message: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        isResolved: false,
        replies: [
          {
            id: 1,
            author: 'John Doe',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          }
        ]
      }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      comments: this.props.comments
    }
  }

  _markResolved = (id) => {
    let comments = this.state.comments
    const index = _.findIndex(comments, {id: id})
    const isResolved = !comments[index].isResolved

    comments = _.merge(comments, _.set(comments[index], ['isResolved'], isResolved))

    this.setState({
      comments
    })
  }

  _reply = (id, message, author = 'Anonymous') => {
    let comments = this.state.comments
    const index = _.findIndex(comments, {id: id})
    const nextId = comments[index].replies.length + 1

    comments[index].replies.push({id: nextId, author: author, message: message})

    this.setState({
      comments
    })
  }

  render() {
    return (
      <div className="comments">
        {_.map(this.state.comments, (item) =>
          !item.isResolved &&
            <Comment
              key={item.id}
              comment={item}
              markResolved={this._markResolved}
              reply={this._reply}
            />
        )}
      </div>
    )
  }
}