//Core
import React from "react"

//Images
import check from "../../../images/check.png"

//styles
import "./style.scss"

const Advantage = ({ text }) => {
  return (
    <div className="Advantage">
      <img src={check} alt="ТАСКОМБАНК | CHECK fine"></img>
      <p className="text">{text}</p>
    </div>
  )
}

export default Advantage
