// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isShowFirst: false, isShowLast: false}

  onShowLast = () => {
    this.setState(prevState => ({isShowLast: !prevState.isShowLast}))
  }

  onShowFirst = () => {
    this.setState(prevState => ({isShowFirst: !prevState.isShowFirst}))
  }

  render() {
    const {isShowFirst, isShowLast} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowFirst}
            >
              Show/Hide Firstname
            </button>
            {isShowFirst && <p className="name">joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-button"
              onClick={this.onShowLast}
            >
              Show/Hide lastname
            </button>
            {isShowLast && <p className="name">jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
