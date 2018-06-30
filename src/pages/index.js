import React from "react"
import Link from "gatsby-link"

import { NestedContainer } from "../core/NestedContainer"
import { SiteWrapper } from "../core/SiteWrapper"
import { WriteUp } from "../components/StartPage/WriteUp"
import { Footer } from "../components/StartPage/Footer"
import { Left, Right } from "../components/structures"
import { Logo, CoverImage } from "../components/images"

const StartPage = () => (
  <div>
    <NestedContainer className="ch bg-blue" innerClassName="ch">
      <div className="pv5 flex-row" style={{ width: "30rem" }}>
        <div className="flex-row">
          <Logo />
          <WriteUp />
        </div>
        <Footer />
      </div>
    </NestedContainer>
    <NestedContainer className="ch bg-green" innerClassName="ch">
      <div className="pv5 flex-row" style={{ width: "30rem" }}>
        <div className="flex-row">
          <Logo />
          <WriteUp />
        </div>
        <Footer />
      </div>
    </NestedContainer>
    <NestedContainer className="ch bg-red" innerClassName="ch">
      <div className="pv5 flex-row" style={{ width: "30rem" }}>
        <div className="flex-row">
          <Logo />
          <WriteUp />
        </div>
        <Footer />
      </div>
    </NestedContainer>
    <NestedContainer className="ch bg-yellow" innerClassName="ch">
      <div className="pv5 flex-row" style={{ width: "30rem" }}>
        <div className="flex-row">
          <Logo />
          <WriteUp />
        </div>
        <Footer />
      </div>
    </NestedContainer>
  </div>
)

export default StartPage
