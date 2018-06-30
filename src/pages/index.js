import React from "react"
import Link from "gatsby-link"

import { NestedContainer } from "../core/NestedContainer"
import { WriteUp } from "../components/StartPage/WriteUp"
import { Footer } from "../components/StartPage/Footer"
import { Left, Right } from "../components/structures"
import { Logo, CoverImage } from "../components/images"

const StartPage = () => (
  <div className="vh-100 flex">
    <Left>
      <div className="pv5 flex-row" style={{ width: "30rem" }}>
        <div className="flex-row">
          <Logo />
          <WriteUp />
        </div>
        <Footer />
      </div>
    </Left>
    <Right>
      <CoverImage />
    </Right>
  </div>
)

export default StartPage
