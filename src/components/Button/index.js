//Core
import React from "react"

//Styles
import style from "./style.module.scss"

import jump from "jump.js"

const moveTo = () => jump(".footer", { duration: 2000 })

const Button = ({ jump }) => {
  return (
    <button
      id="button"
      onClick={jump ? moveTo : () => {}}
      className={style.button}
    >
      ПЕРЕКРЕДИТУВАТИСЬ!!
    </button>
  )
}

export default Button
