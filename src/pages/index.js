import React from "react"
import styled from "styled-components"

import { NestedContainer } from "../core/NestedContainer"
import { Welcome } from "../components/StartPage/blocks/Welcome"

const StartPage = () => (
  <div>
    <NestedContainer className="" innerClassName="ch">
      <Welcome />
    </NestedContainer>
    <NestedContainer className="" innerClassName="ch">
      <Back />
    </NestedContainer>
  </div>
)

const Back = styled.div.attrs({
  className: "w-100 h5",
})`
  background: #11998e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #11998e,
    #38ef7d
  )
  background: linear-gradient(
    to bottom,
    #11998e,
    #38ef7d
  )
`

export default StartPage
