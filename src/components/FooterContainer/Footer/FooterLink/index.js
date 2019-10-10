//Core
import React from "react"

//Styles
import style from "./style.module.scss"

const FooterLink = ({ text = "", link = "", annotation, image, small }) => {
  return (
    <div className={style.FooterLink}>
      {image ? <img src={image} alt="ТАСКОМБАНК feedback"></img> : null}
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className={style.link}>{text}</p>
        </a>
        <h5
          className={style.annotation}
          style={
            small ? { fontSize: "8px", width: "60%", paddingTop: "6px" } : {}
          }
        >
          {annotation}
        </h5>
      </div>
    </div>
  )
}

export default FooterLink
