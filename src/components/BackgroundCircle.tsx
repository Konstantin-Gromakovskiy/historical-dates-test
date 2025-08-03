import type { FC, HTMLAttributes } from 'react'
import styles from './backgroundCircle.module.scss'
import calcDotPosition from '@/shared/calcDotPosition'

interface BackgroundCircleProps extends HTMLAttributes<HTMLDivElement> {
  width: number
  count: number
  activeItemIndex: number
}

const BackgroundCircle: FC<BackgroundCircleProps> = ({ width, count, className, activeItemIndex }) => {
  const circleRadius = width / 2
  const points = Array.from({ length: count }, (_, i) => i)
  const activeItemDotDegree = activeItemIndex * (360 / count)

  return (
    <div className={`${styles.backgroundCircleContainer} ${className}`} style={{ width: `${width}px` }}>
      <div className={styles.circle} style={{ transform: `rotateZ(${-activeItemDotDegree}deg)` }}>
        {points.map((i) => {
          const offsetAngle = -45 // угол поворота круга относительно горизонта, как на макете.
          const dotDegree = i * (360 / count)
          const { x, y } = calcDotPosition(dotDegree, circleRadius, offsetAngle)
          return (
            <button
              type="button"
              key={i}
              className={styles.dot}
              data-active={i === activeItemIndex}
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              {/* <span style={{ transform: `rotateZ(${dotDegree}deg) translateX(-50%) translateY(-50%)` }}>{ activeItemIndex + 1}</span> */}
            </button>
          )
        })}
      </div>
    </div>
  )
}
export default BackgroundCircle
