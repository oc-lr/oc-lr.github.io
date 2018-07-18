import React from "react"
import styled from "styled-components"

export function Technology() {
  return (
    <Back>
      <div
        className="bg-white rounded-lg shadow-lg"
        style={{ width: "50rem", height: "30rem" }}
      />
    </Back>
  )
}

const Back = styled.div.attrs({
  className: "w-100 h5 flex ca",
})`
  height: 42rem;
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
