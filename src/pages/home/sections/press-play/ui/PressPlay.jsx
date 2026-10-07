import pressPlay from '../assets/press-play.png'
import { data } from '../model/data'

export function PressPlay() {
  return (
    <section className="relative bg-[#d9a3b6]">
      <h2 className="sr-only">{data.title}</h2>
      <img
        src={pressPlay}
        alt=""
        width={1440}
        height={814}
        loading="lazy"
        className="mx-auto w-full max-w-[1440px]"
      />
      {/* Кликабельная зона поверх нарисованной кнопки play (центр — 50%/50% картинки) */}
      <button
        type="button"
        aria-label={data.playLabel}
        className="absolute top-[49.75%] left-1/2 aspect-square w-[5%] min-w-10 -translate-x-1/2 -translate-y-1/2 rounded-full transition hover:scale-110 hover:shadow-[0_0_24px_rgba(255,255,255,0.6)]"
      />
    </section>
  )
}
