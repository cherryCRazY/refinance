//Core
import React, { useState } from "react"

//Style
import "./style.scss"

//Images
import person from "../../images/person.png"
import phone_icon from "../../images/phone.png"

//utils
import axios from "axios"

//Component
import Button from "../Button"
import InputWIthIcon from "../InputWIthIcon"

const kek = data => axios.post("/", data)

const Footer = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <footer className="footer">
      <h3 className="text title">Залиш заявку - і вже завтра сплачуй менше</h3>
      <div className="feedback_wrapper">
        <div className="feedback">
          <InputWIthIcon img={person} change={setName}></InputWIthIcon>
          <InputWIthIcon
            img={phone_icon}
            change={setPhone}
            type={"number"}
            mask
          ></InputWIthIcon>
          <Button></Button>
        </div>
      </div>
      <a href="https://tascombank.ua/" style={{ textDecoration: "none" }}>
        <p className="text">ТАСКОМБАНК</p>
      </a>
      <p className="text last">2019</p>
    </footer>
  )
}

export default Footer
