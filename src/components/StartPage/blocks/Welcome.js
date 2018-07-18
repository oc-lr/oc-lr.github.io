import React from "react"
import { Logo } from "../../Logo"
import { City } from "../../City"
import { WriteUp } from "../WriteUp"

export function Welcome() {
  return (
    <div className="pv5 flex-row" style={{ maxWidth: "50rem" }}>
      <div className="flex justify-between cv">
        <Logo color="#11998e" scale={0.7} />
        <Nav
          navs={[
            { label: "Team", url: "", key: 0 },
            { label: "Contact", url: "", key: 1 },
          ]}
        />
      </div>
      <div className="flex cv">
        <WriteUp />
        <City />
      </div>
    </div>
  )
}

const Nav = ({ navs }) => (
  <div className="flex open-sans fw4">
    {navs.map(nav => <NavLink {...nav} />)}
  </div>
)

const NavLink = ({ label, url }) => (
  <div className="pointer f4 ml3 tr1 br2 hover-white-80 hover-bg-light-green hover-green black-70 b ttu open-sans fw1 bg-green pa3 white">
    {label}
  </div>
)
