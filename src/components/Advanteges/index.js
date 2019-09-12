//Core
import React from "react"

//Components
import Advantage from "./OneAdvantage"

//styles
import "./style.scss"

const Advanteges = () => {
  return (
    <div className="advanteges_wrapper">
      <div className="advanteges">
        <Advantage text={"Ніяких  страховок та прихованих платежів"} />
        <Advantage text={`Ніяких зростаючих відсотків!`} />
        <Advantage text={"Гарантована фіксована ставка"} />
      </div>
    </div>
  )
}

export default Advanteges
