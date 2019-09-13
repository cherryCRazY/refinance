//Core
import React from "react"

//Styles
import style from "./style.module.scss"
import InputMask from "react-input-mask"

const InputWithIcon = ({
  img,
  type = "text",
  change,
  mask,
  message,
  valid,
  checked,
}) => {
  return (
    <div className={style.InputWithIconWrapper}>
      <div className={style.InputWithIcon}>
        <div className={style.imageWrapper}>
          <img
            className={style.img}
            src={img}
            alt="ТАСКОМБАНК РЕФІНАНС ЗВОРОТНІЙ ЗВЯЗОК"
          ></img>
        </div>

        {mask ? (
          <InputMask
            className={style.input}
            onChange={({ target: { value } }) => change(value)}
            mask="+38 (099) 999-99-99"
          />
        ) : (
          <input
            className={style.input}
            type={type}
            onChange={({ target: { value } }) => change(value)}
          ></input>
        )}
      </div>

      <p> {checked ? (valid ? " " : message) : ""}</p>
    </div>
  )
}

export default InputWithIcon
