import type { FC, HTMLAttributes } from 'react'
import styles from './backgroundCircle.module.scss'
import calcDotPosition from '@/shared/utils/calcDotPosition'

interface BackgroundCircleProps extends HTMLAttributes<HTMLDivElement> {
  width: number
  count: number
  activeItemIndex: number
  setActiveItemIndex: (index: number) => void
  title: string
}

const BackgroundCircle: FC<BackgroundCircleProps> = ({ width, count, className, activeItemIndex, setActiveItemIndex, title }) => {
  const circleRadius = width / 2
  const points = Array.from({ length: count }, (_, i) => i)
  const activeItemDotDegree = activeItemIndex * (360 / count)

  return (
    <div className={`${styles.backgroundCircleContainer} ${className}`} style={{ width: `${width}px` }}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.circle} style={{ transform: `rotateZ(${-activeItemDotDegree}deg)` }}>
        {points.map((i) => {
          const offsetAngle = -60 // угол поворота круга относительно горизонта, как на макете.
          const dotDegree = i * (360 / count)
          const { x, y } = calcDotPosition(dotDegree, circleRadius, offsetAngle)
          return (
            <button
              type="button"
              key={i}
              className={styles.dot}
              data-active={i === activeItemIndex}
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={() => setActiveItemIndex(i)}
            >
              <span style={{ transform: `rotateZ(${activeItemDotDegree}deg)` }}>
                { i + 1}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default BackgroundCircle
