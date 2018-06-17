import React from "react"
import Link from "gatsby-link"

import { WriteUp } from "../components/StartPage/WriteUp"
import { Footer } from "../components/StartPage/Footer"
import { Left, Right } from "../components/structures"
import { Logo, CoverImage } from "../components/images"

const StartPage = () => (
  <div className="vh-100 bg-blue">
    <Left>
      <Logo />
      <WriteUp />
      <Footer />
    </Left>
    <Right>
      <CoverImage />
    </Right>
  </div>
)

export default StartPage
