//Core
import React from "react"

//Styles
import style from "./style.module.scss"
import InputMask from "react-input-mask"

const InputWithIcon = ({ img, type = "text", change, mask }) => {
  return (
    <div className={style.InputWithIcon}>
      <div className={style.imageWrapper}>
        <img
          className={style.img}
          src={img}
          alt="ТАСКОМБАНК РЕФІНАНС ЗВОРОТНІЙ ЗВЯЗОК"
        ></img>
      </div>
      {mask ? (
        <InputMask className={style.input} mask="+38 (099) 999-99-99" />
      ) : (
        <input
          className={style.input}
          type={type}
          onChange={({ target: { value } }) => change()}
        ></input>
      )}
    </div>
  )
}

export default InputWithIcon
