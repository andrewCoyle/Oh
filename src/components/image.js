import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import '../style/image.styl'

export default class Image extends Component {

  static propTypes = {
    tags: PropTypes.array,
    createTag: PropTypes.func
  }

  static defaultProps = {
    tags: [],
    createTag: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _createTag = (e) => {
    this.props.createTag({
      id: this.props.tags.length + 1,
      left: e.pageX - 15,
      top: e.pageY - 15,
    })
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
        className="tag"
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