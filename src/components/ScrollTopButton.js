import React, { Component } from 'react'
import { Glyphicon } from 'react-bootstrap'

/* React Component using for scrolling to top
 * <ScrollTopButton scrollStepInPx="50" intervalInMs="16.66" />
 *
 * @param {ComponentProps} props: {scrollStepInPx, intervalInMs}
 * @return {ReactComponent}
 */
class ScrollTopButton extends Component {
  constructor(props) {
    super(props)
    this.state = { intervalID: 0 }

    this._scroll2top = this._scroll2top.bind(this)
    this._scrollStep = this._scrollStep.bind(this)
  }

  render() {
    return (
      <div className="gotop" onClick={this._scroll2top}>
        <Glyphicon glyph="circle-arrow-up" />
      </div>
    )
  }

  _scroll2top() {
    console.log(3, this.props)

    var id = setInterval(this._scrollStep, this.props.intervalInMs)
    this.setState({ intervalID: id })
  }

  _scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalID)
    }
    window.scroll(window.pageXOffset, window.pageYOffset - this.props.scrollStepInPx)
  }
}

ScrollTopButton.defaultProps = {
  scrollStepInPx: 50,
  intervalInMs: 16.66
}

export default ScrollTopButton
