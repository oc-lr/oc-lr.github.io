import React from "react"
import styled from "styled-components"
import Particles from "react-particles-js"

import { Card } from "../../Card"
import { Decentralized } from "../../glyphs/Decentralized"
import { Secure } from "../../glyphs/Secure"
import { Verifiable } from "../../glyphs/Verifiable"

export function Technology() {
  return (
    <Back>
      <Particles
        width="70rem"
        height="30rem"
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#fff",
                blur: 0,
              },
            },
          },
        }}
        style={{ width: "100%" }}
      />
      <div
        className="absolute flex justify-around cv"
        style={{ width: "50rem", height: "30rem" }}
      >
        <Card
          Icon={() => <Decentralized scale={0.23} color="#fff" />}
          title="Decentralized"
          description="Built on Ethereum"
        />
        <Card
          Icon={() => <Secure scale={0.23} color="#fff" />}
          title="Secure"
          description="No single point of failure"
        />
        <Card
          Icon={() => <Verifiable scale={0.25} color="#fff" />}
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
  height: 40rem;
  background: #11998e; /* fallback for old browsers */
  background: linear-gradient(to bottom, #11998e, #38ef7d);
`
