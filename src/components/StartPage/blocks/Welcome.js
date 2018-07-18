import React from "react"
import { Logo } from "../../Logo"
import { WriteUp } from "../WriteUp"

export function Welcome() {
  return (
    <div className="pv5 flex-row" style={{ maxWidth: "50rem" }}>
      <div className="flex justify-between cv">
        <Logo color="#11998e" scale={0.3} />
        <Nav
          navs={[
            { label: "Team", url: "", key: 0 },
            { label: "Contact", url: "", key: 1 },
          ]}
        />
      </div>
      <div className="flex cv">
        <WriteUp />
        <div>
          <img src="/city.png" style={{ width: "25rem" }} />
        </div>
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
  <div className="pointer f6 ml3 hover-gray black-70 b ttu montserrat">
    {label}
  </div>
)
