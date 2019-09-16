//Core
import React, { useState } from "react"

//Style
import "./style.scss"

//Components
import Slider from "./Slider"
import Button from "../Button"
import CustomInput from "./CustomInput"

//utils
// import debounce from "lodash/debounce"

//Images
// import box from "../../images/box.png"
import PNG_RAS from "../../images/PNG_RAS.png"
import logo from "../../images/logo.png"
import ico_calend from "../../images/ico_calend.png"

//helpers
import { findAvarage, moneyFormatToNumber, debounce } from "../../helpers/calc"

console.log(
  `%c TASCOMBANK`,
  "background: #333366; color: white; font-size: 15px; padding: 3px 40%;"
)

const Header = () => {
  const [sum, setSum] = useState(0)
  const [monthPayment, setMonthPayment] = useState(0)
  const [count, setCount] = useState(36)
  const [checkField, setCheckField] = useState(false)

  const handleOnBlur = () => {
    setCheckField(true)
  }

  const lol = debounce(handleOnBlur, 1000)

  const calc = debounce(value => {
    setCheckField(true)
    setMonthPayment(value)
    console.log("debounce")
  }, 800)

  const handleChangeSum = value => setSum(moneyFormatToNumber(value))
  const handleChangeMonthPayment = value => {
    calc(moneyFormatToNumber(value))
  }

  const average = checkField ? findAvarage(+sum, +count) : 0
  const determ = monthPayment - average

  return (
    <header>
      <div className="wrapper_text">
        <h1 className="header title">ПЕРЕКРЕДИТУЄМО! </h1>
        <p className="header title little ">ВЖЕ ЗАВТРА — СПЛАЧУЙТЕ МЕНШЕ </p>
        <h2 className="header subtitle" style={{ color: "#ffdc73" }}>
          НІЯКИХ СТРАХОВОК та «ЗІРОЧОК»{" "}
        </h2>
        <img
          className="money_box"
          src={PNG_RAS}
          alt="ТАСКОМБАНК РЕФІНАНС"
          style={{ justifySelf: "center" }}
        ></img>
        <a href="https://tascombank.ua/">
          <img src={logo} className="logo" alt="Лого ТАСКОМБАНК"></img>
        </a>
      </div>

      <div className="form">
        <div className="input_wrapper">
          <p className="text">Ваша поточна заборгованість</p>
          <CustomInput className="input" change={handleChangeSum}></CustomInput>
        </div>

        <div className="small_inputs input_wrapper">
          <label>
            <p className="text small">Ваш поточний платіж </p>
            <CustomInput
              className="input small"
              change={handleChangeMonthPayment}
            ></CustomInput>
          </label>
          <label></label>
          <label>
            <p className="text small">
              Щомісячний платіж у
              <img
                src={logo}
                className="small_logo"
                alt="ТАСКОМБАНК РЕФІНАНС"
              ></img>
            </p>
            <CustomInput
              className="input tas"
              disabled
              value={
                checkField && average > 0
                  ? average.toLocaleString("currency")
                  : " "
              }
            ></CustomInput>
          </label>
        </div>
        <div className="range_wrapper input_wrapper">
          <div>
            <img src={ico_calend} alt="icon calendar"></img>
            <p>період, міс</p>
          </div>
          <Slider change={setCount} count={count}></Slider>
        </div>

        <div className="small_inputs input_wrapper sale">
          <label>
            <p className="text small">Економія за місяць</p>
            <CustomInput
              className="input small tas"
              disabled
              value={determ > 0 ? determ : ""}
            ></CustomInput>
          </label>
          <label></label>
          <label>
            <p className="text small">Економія за весь період</p>
            <CustomInput
              className="input small tas"
              disabled
              value={determ > 0 ? determ * count : ""}
            ></CustomInput>
          </label>
        </div>
        <Button jump></Button>
      </div>
    </header>
  )
}

export default Header
