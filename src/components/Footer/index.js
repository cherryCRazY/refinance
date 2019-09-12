//Core
import React from "react"

//Style
import "./style.scss"

//Images
import person from "../../images/person.png"
import phone from "../../images/phone.png"

//Component
import Button from "../Button"
import InputWIthIcon from "../InputWIthIcon"

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="text title">Залиш заявку на рефінансування вже зараз</h3>
      <div className="feedback_wrapper">
        <div className="feedback">
          <InputWIthIcon img={person}></InputWIthIcon>
          <InputWIthIcon img={phone} type={"number"}></InputWIthIcon>
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
