import { Check, Moon, Sun } from "lucide-react"

type RoutineCardProps = {
  title: string
  time: string
  progress: string
  status: string
  steps: string[]
  type: "morning" | "night"
}

const RoutineCard = ({
  title,
  time,
  progress,
  status,
  steps,
  type,
}: RoutineCardProps) => {
  const isMorning = type === "morning"

  return (
    <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-white p-5">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100">
            {isMorning ? (
              <Sun size={19} className="text-pink-500" />
            ) : (
              <Moon size={19} className="text-pink-500" />
            )}
          </div>

          <div className="flex flex-col gap-0.5">
            <div className="text-sm font-semibold">
              {title}
            </div>

            <div className="text-xs text-gray-500">
              {time}
            </div>
          </div>
        </div>

        <div
          className={`rounded-full px-3 py-1 text-[11px] font-medium ${
            status === "Selesai"
              ? "bg-green-100 text-green-600"
              : "bg-pink-100 text-pink-500"
          }`}
        >
          {status}
        </div>
      </div>

      {/* Progress */}
      <div className="text-xs text-gray-500">
        {progress}
      </div>

      {/* Steps */}
      <div className="flex items-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pink-400">
              <Check
                size={14}
                className="text-white"
              />
            </div>

            {index < steps.length - 1 && (
              <div className="h-px flex-1 bg-pink-200" />
            )}
          </div>
        ))}
      </div>

      {/* Step Names */}
      <div className="flex justify-between gap-1">
        {steps.map((step) => (
          <div
            key={step}
            className="w-14 text-center text-[10px] leading-tight text-gray-500"
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RoutineCard