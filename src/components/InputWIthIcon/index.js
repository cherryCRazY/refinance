//Core
import React from "react"

//Styles
import style from "./style.module.scss"

const InputWithIcon = ({ img, type = "text" }) => {
  return (
    <div className={style.InputWithIcon}>
      <div className={style.imageWrapper}>
        <img
          className={style.img}
          src={img}
          alt="ТАСКОМБАНК РЕФІНАНС ЗВОРОТНІЙ ЗВЯЗОК"
        ></img>
      </div>
      <input className={style.input} type={type}></input>
    </div>
  )
}

export default InputWithIcon
