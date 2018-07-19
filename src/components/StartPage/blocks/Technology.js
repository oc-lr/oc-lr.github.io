import React from "react"
import styled from "styled-components"

import { Card } from "../../Card"
import { Decentralized } from "../../glyphs/Decentralized"
import { Secure } from "../../glyphs/Secure"
import { Verifiable } from "../../glyphs/Verifiable"

export function Technology() {
  return (
    <Back>
      <div
        className="bg-white rounded-lg shadow-lg flex justify-around cv"
        style={{ width: "50rem", height: "30rem" }}
      >
        <Card
          Icon={() => <Decentralized scale={0.23} color="#11998e" />}
          title="Decentralized"
          description="Built on Ethereum"
        />
        <Card
          Icon={() => <Secure scale={0.23} color="#11998e" />}
          title="Secure"
          description="No single point of failure"
        />
        <Card
          Icon={() => <Verifiable scale={0.25} color="#11998e" />}
          title="Verifiable"
          description="Independently auditable"
        />
      </div>
    </Back>
  )
}

const Back = styled.div.attrs({
  className: "w-100 h5 flex ca",
})`
  height: 42rem;
  background: #11998e; /* fallback for old browsers */
  background: linear-gradient(to bottom, #11998e, #38ef7d);
`
