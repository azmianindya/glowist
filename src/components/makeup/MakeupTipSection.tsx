import { Lightbulb } from "lucide-react"

import MakeupTipCard from "./MakeupTipCard"
import { makeupTips } from "../../features/makeup/data"

const MakeupTipSection = () => {
  return (
    <section className="flex flex-1 flex-col gap-4 rounded-2xl bg-white p-4">
      <div className="flex items-center gap-2">
        <Lightbulb
          size={21}
          className="text-pink-500"
        />

        <h2 className="text-lg font-semibold text-pink-700">
          Tips Makeup
        </h2>
      </div>

      <div className="flex flex-col gap-2">
        {makeupTips.map((tip) => (
          <MakeupTipCard
            key={tip.title}
            title={tip.title}
            description={tip.description}
            image={tip.image}
          />
        ))}
      </div>
    </section>
  )
}

export default MakeupTipSection