import React from "react"

export const Left = ({ children }) => (
  <div className="w-100 flex justify-center">{children}</div>
)

export const Right = ({ children }) => <div className="w-100">{children}</div>
