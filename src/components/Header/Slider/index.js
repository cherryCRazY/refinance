import React from "react"
import Slider from "react-rangeslider"

// To include the default styles
import "./slider.scss"

const Horizontal = ({ change, count }) => (
  <div className="slider" style={{ width: "85%" }}>
    <Slider
      min={6}
      step={3}
      max={60}
      value={count}
      handleLabel={"" + count}
      onChange={value => change(value)}
    />
  </div>
)

export default Horizontal
