//Core
import React from "react"

//Styles
import styles from "./style.module.scss"

//styles
import jump from "jump.js"

const moveTo = () => jump(".footer", { duration: 2000 })

const Button = ({ jump, click, style }) => {
  return (
    <button
      id="button"
      style={style}
      onClick={jump ? moveTo : click}
      className={styles.button}
    >
      ПЕРЕКРЕДИТУВАТИСЬ!!
    </button>
  )
}

export default Button
