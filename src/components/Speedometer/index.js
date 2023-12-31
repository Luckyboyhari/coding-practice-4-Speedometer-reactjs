// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}
  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preValue => ({speed: preValue.speed + 10}))
    }
  }
  onApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preValue => ({speed: preValue.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="image"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="para"> Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="but-con">
          <button type="button" className="butt" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="butt1" onClick={this.onApplyBreak}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
