import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import classnames from 'classnames'
import '../theme/style/screen.styl'

export default class Screen extends Component {

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
      <div className={classnames('screen', {fullscreen: this.props.fullscreen})}>
        <div className="image" onClick={this._createTag}>
          image

          {!fullscreen && _.map(tags, (tag) =>
            !tag.isResolved && this.renderTag(tag)
          )}

        </div>
        <div className="control-panel">
          <div className="background-control">
            <div className="control white" value="#fff"/>
            <div className="control white-two" value="#f6f6f6"/>
            <div className="control greyish" value="#b2b2b2"/>
            <div className="control greyish-brown" value="#515151"/>
            <div className="control black" value="#000"/>
          </div>
          <div className="size-control">
            <button className="control zoom-out">
              <div className="minus"/>
            </button>
            <button className="control fit">Fit</button>
            <button className="control zoom-in">
              <div className="plus"/>
            </button>
          </div>
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