import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import '../theme/style/image.styl'

export default class Image extends Component {

  static propTypes = {
    tags: PropTypes.array,
    createTag: PropTypes.func,
    activateTag: PropTypes.func
  }

  static defaultProps = {
    tags: [],
    createTag: () => {},
    activateTag: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _createTag = (e) => {
    this.props.createTag({
      id: this.props.tags.length + 1,
      left: e.pageX - 16,
      top: e.pageY - 16,
    })
  }

  _activateTag = () => {
    this.props.activateTag()
  }

  render() {
    const { tags } = this.props

    return (
      <div className="image-wrapper" onClick={this._createTag}>
        <div className="image">
          image

          {_.map(tags, (tag) =>
            !tag.isResolved && this.renderTag(tag)
          )}

        </div>
      </div>
    )
  }

  renderTag(tag) {
    return (
      <div
        className={classnames('tag', {'active': tag.isActive})}
        key={tag.id}
        style={{
          left: tag.left,
          top: tag.top
        }}
      >
        {tag.id}
      </div>
    )
  }
}