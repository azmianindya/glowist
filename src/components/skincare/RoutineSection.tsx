import { CalendarDays } from "lucide-react"
import RoutineCard from "./RoutineCard"
import ReapplyCard from "./ReapplyCard"
import { routines } from "../../features/skincare/data"

const RoutineSection = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays
            size={21}
            className="text-pink-500"
          />

          <h2 className="text-lg font-semibold">Rutinitas Hari Ini</h2>
        </div>

        <button className="text-sm font-medium text-pink-500 transition hover:text-pink-600">Lihat Semua →</button>
      </div>

      {/* Cards */}
      <div className="flex w-full gap-4">
        {routines.map((routine) => (
          <RoutineCard
            key={routine.title}
            title={routine.title}
            time={routine.time}
            progress={routine.progress}
            status={routine.status}
            steps={routine.steps}
            type={routine.type}
          />
        ))}

        <ReapplyCard />
      </div>
    </section>
  )
}

export default RoutineSection