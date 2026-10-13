import { Button as HeroButton, type ButtonRootProps } from "@heroui/react"
import type { ReactNode } from "react"

type ButtonProps = Omit<ButtonRootProps, "children"> & {
  children: ReactNode
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <HeroButton
      {...props}
      className={`w-full bg-pink-200 text-white rounded-lg py-2 font-medium hover:bg-pink-400 ${className ?? ""}`}
    >
      {children}
    </HeroButton>
  )
}

export default Button