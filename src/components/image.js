import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import '../theme/style/image.styl'

export default class Image extends Component {

  static propTypes = {
    tags: PropTypes.array,
    fullscreen: PropTypes.bool,
    createTag: PropTypes.func,
    activateTag: PropTypes.func
  }

  static defaultProps = {
    tags: [],
    fulscreen: false,
    createTag: () => {},
    activateTag: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _createTag = (e) => {
    if (!this.props.fullscreen) {
      this.props.createTag({
        id: this.props.tags.length + 1,
        left: e.pageX - 16,
        top: e.pageY - 16,
      })
    }
  }

  _activateTag = (e) => {
    console.log(e.target.id)
    e.stopPropagation()
    this.props.activateTag(e.target.id)
  }

  render() {
    const { tags, fullscreen } = this.props

    return (
      <div className={classnames('image-wrapper', {fullscreen: this.props.fullscreen})}>
        <div className="image" onClick={this._createTag}>
          image

          {!fullscreen && _.map(tags, (tag) =>
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
        onClick={this._activateTag}
        key={tag.id}
        id={tag.id}
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