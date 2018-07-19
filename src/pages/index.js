import React from "react"

import { NestedContainer } from "../core/NestedContainer"
import { Welcome } from "../components/StartPage/blocks/Welcome"
import { Process } from "../components/StartPage/blocks/Process"
import { Technology } from "../components/StartPage/blocks/Technology"
import { Definition } from "../components/StartPage/blocks/Definition"
import { Team } from "../components/StartPage/blocks/Team"
import { RoadMap } from "../components/StartPage/blocks/RoadMap"
import { Footer } from "../components/StartPage/blocks/Footer"

const StartPage = () => (
  <div>
    <NestedContainer className="ch" innerClassName="ch">
      <Welcome />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Process />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Technology />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <RoadMap />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Team />
    </NestedContainer>
    <NestedContainer className="ch" innerClassName="ch">
      <Footer />
    </NestedContainer>
  </div>
)

export default StartPage
