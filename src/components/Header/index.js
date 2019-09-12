//Core
import React, { useState } from "react"

//Style
import "./style.scss"

//Components
import Slider from "./Slider"
import Button from "../Button"

//Images
import box from "../../images/box.png"
import logo from "../../images/logo.png"
import ico_calend from "../../images/ico_calend.png"
import ico_calc from "../../images/ico_calc.png"

//helpers
import { findAvarage, findSum } from "../../helpers/calc"

const Header = () => {
  const [sum, setSum] = useState(0)
  const [monthPayment, setMonthPayment] = useState(0)
  const [count, setCount] = useState(12)

  const average = findAvarage(+sum, +count)
  const determ = monthPayment - average

  return (
    <header>
      <div className="wrapper_text">
        <h1 className="header title">Прозорі умови </h1>
        <p className="header title">рефінансування </p>
        <h2 className="header subtitle">для Вашого майбутнього </h2>
        <img className="money_box" src={box} alt="ТАСКОМБАНК РЕФІНАНС"></img>
      </div>
      <div className="form">
        <a href="https://tascombank.ua/">
          <img src={logo} className="logo" alt="Лого ТАСКОМБАНК"></img>
        </a>

        <div className="input_wrapper">
          <p className="text">Ваша поточна заборгованість</p>
          <input
            className="input"
            type="number"
            onChange={({ target: { value } }) => setSum(+value)}
          ></input>
          {console.log(sum)}
        </div>

        <div className="small_inputs input_wrapper">
          <label>
            <p className="text small">Ваш платіж щомісяця</p>
            <input
              type="number"
              className="input small"
              onChange={({ target: { value } }) => setMonthPayment(+value)}
            ></input>
            {console.log(monthPayment)}
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
            <input
              type="text"
              value={average == 0 ? " " : average}
              disabled
              className="input small"
            ></input>
          </label>
        </div>
        <div className="range_wrapper input_wrapper">
          <div>
            <img src={ico_calend} alt="icon calendar"></img>
            <p>період, міс</p>
          </div>
          <Slider change={setCount} count={count}></Slider>
          {console.log(count)}
        </div>
        <div className="input_wrapper">
          <div className="saving">
            <img className="box" src={ico_calc} alt="ТАСКОМБАНК РЕФІНАНС"></img>
            <div className="input">{determ > 0 ? determ : " "}</div>
          </div>
          <p className="text under_text">Економія за місяць</p>
        </div>
        <Button jump></Button>
      </div>
    </header>
  )
}

export default Header
