import React from "react"
import { getButtonClass } from "@binn-ui/core"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
}

export const Button: React.FC<ButtonProps> = ({ label, className, ...rest }) => {
  return (
    <button className={getButtonClass({ className })} {...rest}>
      {label}
    </button>
  )
}
