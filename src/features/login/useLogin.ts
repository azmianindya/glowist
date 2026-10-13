import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "@tanstack/react-router"

import loginSchema, { type LoginForm } from "./schema"

const useLogin = () => {
  const navigate = useNavigate()
  const [loginError, setLoginError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  })

  const onSubmit = (data: LoginForm) => {
    setLoginError("")

    if (
      data.email === "anindya@gmail.com" &&
      data.password === "12345678"
    ) {
      localStorage.setItem("token", "logged-in")
      navigate({ to: "/dashboard" })
    } else {
      setLoginError("Email atau password salah")
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loginError,
  }
}

export default useLogin