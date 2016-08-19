import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import '../style/image.styl'

export default class Image extends Component {

  static propTypes = {
    tags: PropTypes.array
  }

  static defaultProps = {
    tags: [
      {
        id: 1,
        left: 100,
        top: 100
      },
      {
        id: 2,
        left: 250,
        top: 250
      }
    ]
  }

  constructor(props) {
    super(props)
    this.state = {
      tags: this.props.tags
    }
  }

  _createTag = (e) => {
    let tags = this.state.tags
    const id = tags.length + 1
    const element = {
      id: id,
      left: e.pageX - 15,
      top: e.pageY - 15
    }
    tags.push(element)

    this.setState({
      tags
    })
  }

  render() {
    const { tags } = this.state

    return (
      <div className="image-wrapper" onClick={this._createTag}>
        <div className="image">
          image

          {_.map(tags, (tag) =>
            this.renderTag(tag)
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