import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="
      flex
      flex-row
      flex-wrap justify-center gap-10 w-full
      h-[300px] xl:h-[800px]">
      <BallCanvas />
    </div>
  )
}

export default SectionWrapper (Tech, 'tech');