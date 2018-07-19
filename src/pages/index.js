import React from "react"

import { NestedContainer } from "../core/NestedContainer"
import { Welcome } from "../components/StartPage/blocks/Welcome"
import { Technology } from "../components/StartPage/blocks/Technology"
import { Definition } from "../components/StartPage/blocks/Definition"
import { Team } from "../components/StartPage/blocks/Team"
import { Footer } from "../components/StartPage/blocks/Footer"

const StartPage = () => (
  <div>
    <NestedContainer className="" innerClassName="ch">
      <Welcome />
    </NestedContainer>
    <NestedContainer className="" innerClassName="ch">
      <Definition />
    </NestedContainer>
    <NestedContainer className="" innerClassName="ch">
      <Technology />
    </NestedContainer>
    <NestedContainer className="" innerClassName="ch">
      <Team />
    </NestedContainer>
    <NestedContainer className="" innerClassName="ch">
      <Footer />
    </NestedContainer>
  </div>
)

export default StartPage
