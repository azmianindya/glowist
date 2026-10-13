import Skincare from "../../assets/skincare.png"

type SkincareHeroProps = {
  title: string
  description: string
  buttonLabel: string
}

const SkincareHero = ({
  title,
  description,
  buttonLabel,
}: SkincareHeroProps) => {
  return (
    <div className="relative flex min-h-52 w-full items-center overflow-hidden rounded-2xl bg-pink-100 px-14 py-8">
      <div className="relative z-10 flex flex-col gap-3">
        <div className="text-3xl font-bold leading-tight text-pink-600">
          {title}
        </div>

        <div className="text-sm leading-relaxed text-gray-600">
          {description}
        </div>

        <button className="flex w-fit items-center gap-2 rounded-full bg-pink-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-pink-600">
          {buttonLabel}
          <div>→</div>
        </button>
      </div>

      <img
        src={Skincare}
        alt="Skincare products"
        className="absolute right-10 h-full w-1/2 object-contain object-right"
        />
    </div>
  )
}

export default SkincareHero