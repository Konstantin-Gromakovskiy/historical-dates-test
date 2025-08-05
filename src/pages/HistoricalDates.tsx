import { FC, useState } from 'react'
import styles from './historicalDates.module.scss'
import BackgroundCircle from '@/components/BackgroundCircle'
import { mockTimeSegments } from '@/__fixtures__/mockData'
import HistoricalDate from '@/shared/ui/HistoricalDate'
import Slider from '@/components/Slider'

const HistoricalDates: FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Исторические
          <br />
          даты
        </h1>
        <div className={styles.dates}>
          <HistoricalDate value={mockTimeSegments[activeItemIndex].startYear} />
          <HistoricalDate value={mockTimeSegments[activeItemIndex].endYear} />
        </div>
        <BackgroundCircle
          className={styles.circle}
          count={mockTimeSegments.length}
          width={530}
          activeItemIndex={activeItemIndex}
          title={mockTimeSegments[activeItemIndex].title}
          setActiveItemIndex={setActiveItemIndex}
        />
        <Slider
          className={styles.slider}
          historicalEvents={mockTimeSegments[activeItemIndex].events}
          activeItemIndex={activeItemIndex}
        />
      </main>
    </>
  )
}

export default HistoricalDates
