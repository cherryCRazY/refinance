//Core
import React from "react"

//Components
import Header from "../components/Header"
import Advanteges from "../components/Advanteges"
import Footer from "../components/Footer"
import SEO from "../components/seo"

//Styles
import "../styles/main.scss"

const IndexPage = () => (
  <div>
    <SEO title="РЕФІНАНС" />
    <Header></Header>
    <Advanteges></Advanteges>
    <Footer></Footer>
  </div>
)

export default IndexPage
