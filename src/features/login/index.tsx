import Input from "../../components/Input"
import Button from "../../components/Button"
import bg from "../../assets/bg-login.jpeg"
import useLogin from "./useLogin"

const Login = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    loginError,
  } = useLogin()

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-125 h-125 bg-white rounded-full shadow flex flex-col justify-center px-20">
        <div className="text-center mb-6">
          <div className="text-3xl font-semibold tracking-widest font-bebas">GLOWIST</div>
          <div className="text-xs text-gray-400 tracking-widest uppercase mt-1">Glow & Beauty Specialist</div>

          {loginError && (
            <p className="text-sm text-red-500 mt-3">
              {loginError}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="nama@email.com"
            required
            {...register("email")}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password"
            required
            {...register("password")}
          />

          <Button type="submit">Masuk</Button>
        </form>
      </div>
    </div>
  )
}

export default Login