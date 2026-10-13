import { Input as HeroInput, type InputRootProps } from "@heroui/react"

type InputProps = Omit<InputRootProps, "children"> & {
  label: string
  error?: string
  type?: string
  placeholder?: string
}

const Input = ({
  label,
  error,
  type = "text",
  placeholder,
  ...props
}: InputProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>

      <HeroInput
        {...props}
        type={type}
        placeholder={placeholder}
        className={`w-full ${error ? "border-red-500" : ""}`}
      />

      {error && (
        <p className="text-sm text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input