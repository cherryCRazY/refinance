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
import swal from "sweetalert"

const onSucces = value => {
  swal(
    "Заявку прийнято в роботу!",
    `Ми зателефонуємо Вам найближчим часом`,
    "success"
  )
}

const onFail = value => {
  swal("Помилка!", `Сервіс не відповідає спробуйте пізніше`, "error")
}

class Footer extends Component {
  state = {
    name: { valid: false, value: "", checked: false },
    phone: { valid: false, value: "", checked: false },
    fetch: false,
    fail: false,
    success: false,
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
      this.setState({
        fetch: true,
      })
      try {
        const res = await axios.post("/", {
          name: name.value,
          phone: normalPhone,
        })

        if (res.status === 200) {
          this.setState({
            success: true,
            fetch: false,
          })
        } else {
          this.setState({
            fail: true,
            fetch: false,
          })
        }
      } catch (error) {
        this.setState({
          fail: true,
          fetch: false,
        })
      } finally {
        this.setState({
          success: false,
          fail: false,
        })
      }
    }
  }

  render() {
    const { name, phone, fetch, fail, success } = this.state

    return (
      <footer className="footer">
        {fetch ? (
          <div className="spinnerWrappers">
            <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text title">
              Залиште заявку - і вже завтра сплачуйте менше
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
          </>
        )}
        <a href="https://tascombank.ua/" style={{ textDecoration: "none" }}>
          <p className="text">ТАСКОМБАНК</p>
        </a>
        <p className="text last">2019</p>
        {success ? onSucces() : null}
        {fail ? onFail() : null}
      </footer>
    )
  }
}

export default Footer
