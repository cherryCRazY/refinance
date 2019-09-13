//Core
import React, { Component } from "react"

//Style
import "./style.scss"

//Images
import person from "../../images/person.png"
import phone_icon from "../../images/phone.png"

//utils
import axios from "axios"

//helpers
import {
  validatePhoneNumber,
  validateName,
  transformPhoneAfterMask,
} from "../../helpers/validation"

//Component
import Button from "../Button"
import InputWIthIcon from "../InputWIthIcon"
import { async } from "q"

const kek = data => axios.post("/", data)

class Footer extends Component {
  state = {
    name: { valid: false, value: "", checked: false },
    phone: { valid: false, value: "", checked: false },
    valid: false,
  }

  handleChangeName = value => {
    this.setState({ name: { ...this.state.name, value } })
  }
  handleChangePhone = value => {
    this.setState({ phone: { ...this.state.phone, value } })
  }

  handleOnClick = async () => {
    const { phone, name } = this.state
    const normalPhone = transformPhoneAfterMask(phone.value)

    const isValidPhone = validatePhoneNumber(normalPhone)
    const isValidName = validateName(name.value)

    if (isValidPhone) {
      this.setState({
        phone: { ...this.state.phone, valid: true, checked: true },
      })
    } else {
      this.setState({
        phone: { ...this.state.phone, valid: false, checked: true },
      })
    }
    if (isValidName) {
      this.setState({
        name: { ...this.state.name, valid: true, checked: true },
      })
    } else {
      this.setState({
        name: { ...this.state.name, valid: false, checked: true },
      })
    }

    if (isValidPhone && isValidName) {
      const res = await axios.post("/", {
        name: name.value,
        phone: normalPhone,
      })
      console.log("res", res)
    }
  }

  render() {
    const { name, phone } = this.state

    return (
      <footer className="footer">
        <h3 className="text title">
          Залиш заявку - і вже завтра сплачуй менше
        </h3>
        <div className="feedback_wrapper">
          <div className="feedback">
            <InputWIthIcon
              img={person}
              change={this.handleChangeName}
              message={"Перевірте правильність вводу ім'я"}
              checked={name.checked}
              valid={name.valid}
            ></InputWIthIcon>
            <InputWIthIcon
              img={phone_icon}
              change={this.handleChangePhone}
              checked={phone.checked}
              valid={phone.valid}
              message={
                "Перевірте правильність вводу номера мобільного телефону"
              }
              type={"number"}
              mask
            ></InputWIthIcon>
            <Button
              style={{ alignSelf: "flex-start" }}
              click={this.handleOnClick}
            ></Button>
          </div>
        </div>
        <a href="https://tascombank.ua/" style={{ textDecoration: "none" }}>
          <p className="text">ТАСКОМБАНК</p>
        </a>
        <p className="text last">2019</p>
      </footer>
    )
  }
}

export default Footer
