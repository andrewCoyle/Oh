import React, { Component, PropTypes } from 'react'
import CssTransitionGroup from 'react-addons-css-transition-group'
import _ from 'lodash'
import Comment from './comment'
import '../theme/style/comments.styl'

export default class Comments extends Component {

  static propTypes = {
    comments: PropTypes.array,
    resolveTag: PropTypes.func,
    activateTag: PropTypes.func,
    replyToComment: PropTypes.func
  }

  static defaultProps = {
    comments: [],
    resolveTag: () => {},
    activateTag: () => {},
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
            <CssTransitionGroup
              transitionName="example"
              transitionEnterTimeout={3000}
              transitionLeaveTimeout={3000}
              transitionAppearTimeout={3000}
              transitionAppear={true}
              component="div"
              key={item.id}
            >
              <Comment
                key={item.id}
                comment={item}
                resolveTag={this.props.resolveTag}
                activateTag={this.props.activateTag}
                replyToComment={this.props.replyToComment}
              />
            </CssTransitionGroup>
        )}
      </div>
    )
  }
}