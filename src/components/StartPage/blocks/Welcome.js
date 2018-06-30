import React from "react"
import { Logo } from "../../images"
import { WriteUp } from "../WriteUp"

export function Welcome() {
  return (
    <div className="pv5 flex-row" style={{ maxWidth: "50rem" }}>
      <div className="flex justify-between cv">
        <Logo />
        <Nav
          navs={[
            { label: "Jikku", url: "", key: 0 },
            { label: "Hello", url: "", key: 1 },
          ]}
        />
      </div>
      <WriteUp />
    </div>
  )
}

const Nav = ({ navs }) => (
  <div className="flex open-sans fw4">
    {navs.map(nav => <NavLink {...nav} />)}
  </div>
)

const NavLink = ({ label, url }) => (
  <div className="pointer mr3 hover-gray b">{label}</div>
)
