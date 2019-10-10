//Core
import React from "react"

//Style
import style from "./style.module.scss"

//Components
import FooterLink from "../Footer/FooterLink"

//Image
import worldwide from "../../../images/worldwide.png"
import footer_phone from "../../../images/footer_phone.png"

const Footer = () => {
  return (
    <footer className={style.Footer}>
      <div className={style.LinksWrapper}>
        <p className={style.TAS}>АТ «ТАСКОМБАНК»</p>
        <FooterLink
          image={footer_phone}
          text={"0 (800) 503 580"}
          link={"tel:0800503580"}
          annotation={"(Безкоштовно в межах України)"}
        ></FooterLink>

        <FooterLink
          image={worldwide}
          text={"www.tascombank.ua"}
          link={"http://tascombank.ua"}
          annotation={"Ліцензія НБУ №84 від 25 жовтня 2011 року"}
        ></FooterLink>

        <FooterLink
          small
          annotation={
            "Залишаючи номер телефона Ви підтверджуєте згоду на обробку Ваших персональних данних"
          }
        ></FooterLink>
      </div>
    </footer>
  )
}

export default Footer
